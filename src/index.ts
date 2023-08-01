import { createCanvas, loadImage } from '@napi-rs/canvas'
import { rgbaToThumbHash, thumbHashToDataURL } from 'thumbhash'

function bufferToDataURL(buffer: Buffer) {
  const dataPrefix = 'data:png;base64,'

  const dataURL = `${dataPrefix}${buffer.toString('base64')}`

  return dataURL
}

export default function thumbhashPlugin(): import('bun').BunPlugin {
  return {
    name: 'bun-plugin-thumbhash',
    async setup(build) {
      const exportsCache = new Map<string, Record<string, any>>()

      build.onResolve({ filter: /.*\?thumb$/ }, args => ({
        path: args.path,
        namespace: 'thumbhash',
      }))

      build.onResolve({ filter: /.*/, namespace: 'thumbhash' }, args => {
        const path = Bun.fileURLToPath(new URL(args.path, Bun.pathToFileURL(args.importer)))
        
        return {
          path,
          namespace: 'thumbhash',
        }
      })

      build.onLoad({ filter: /\.(png|jpe?g|gif|webp|bmp|tiff?)$/, namespace: 'thumbhash' }, async (args) => {
        if (exportsCache.has(args.path)) {
          return {
            contents: `export default ${JSON.stringify(exportsCache.get(args.path))}`,
            loader: 'js',
          }
        }

        const image = await loadImage(args.path)
        const canvas = createCanvas(image.width, image.height)
        const context = canvas.getContext('2d')
        
        const scale = 100 / Math.max(image.width, image.height)
        canvas.width = Math.round(image.width * scale)
        canvas.height = Math.round(image.height * scale)
        context.drawImage(image, 0, 0, canvas.width, canvas.height)
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height)
        const binaryThumbHash = rgbaToThumbHash(pixels.width, pixels.height, pixels.data)
        
        // ThumbHash to data URL
        const placeholderURL = thumbHashToDataURL(binaryThumbHash)

        const exports = {
          src: placeholderURL,
          width: pixels.width,
          height: pixels.height,
          originalSrc: bufferToDataURL(image.src),
          originalHeight: image.height,
          originalWidth: image.width,
        }

        exportsCache.set(args.path, exports)

        return {
          contents: `export default ${JSON.stringify(exports)}`,
          loader: 'js',
        }
      })
    }
  }
} 
