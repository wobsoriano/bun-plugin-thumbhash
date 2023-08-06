# bun-plugin-thumbhash



https://github.com/wobsoriano/bun-plugin-thumbhash/assets/13049130/3cbf35ce-d7cb-495e-93fc-77816e32dbf9



[ThumbHash](https://github.com/evanw/thumbhash) plugin for Bun.

A very compact representation of a placeholder for an image. Store it inline with your data and show it while the real image is loading for a smoother loading experience.

## Install

```bash
bun install bun-plugin-thumbhash
```

## Usage

```ts
import thumbhash from 'bun-plugin-thumbhash'

await Bun.build({
  entrypoints: ['./index.tsx'],
  outdir: './dist',
  plugins: [thumbhash()],
})
```

```tsx
import Image from './example.png?thumb'

export function App() {
  const [isLoading] = useState(false)
  return (
    <>
      { isLoading 
        ? <img src={Image.src} width={Image.width} height={Image.height} />
        : <img src={Image.originalSrc} width={Image.originalWidth} height={Image.originalHeight} />
      }
    </>
  )
}
```

## TypeScript Shim

Add the following to your `.d.ts` file:

```ts
/// <reference types="bun-plugin-thumbhash/client" />
```

## License

MIT
