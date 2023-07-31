# bun-plugin-thumbhash

[ThumbHash](https://github.com/evanw/thumbhash) plugin for Bun.

A very compact representation of a placeholder for an image. Store it inline with your data and show it while the real image is loading for a smoother loading experience.

## Install

```bash
bun install bun-plugin-thumbhash
```

## Usage

```ts
import { plugin } from 'bun'
import thumbhash from 'bun-plugin-thumbhash'

plugin(thumbhash())
```

```tsx
import Image from './example.png?thumb'

export function App() {
  const [isLoading] = useState(false)
  return (
    <>
      { loading 
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
