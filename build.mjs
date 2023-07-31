import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  // sourcemap: 'external',
  minify: true,
  plugins: [dts()],
  external: ['@napi-rs/canvas', 'thumbhash']
})
