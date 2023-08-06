type ThumbHash = {
  src: string
  width: number
  height: number
  originalSrc: string | unknown
  originalWidth: number
  originalHeight: number
}

declare module '*.jpg?thumb' {
  const th: ThumbHash
  export default th
}

declare module '*.jpeg?thumb' {
  const th: ThumbHash
  export default th
}

declare module '*.png?thumb' {
  const th: ThumbHash
  export default th
}

declare module '*.webp?thumb' {
  const th: ThumbHash
  export default th
}

declare module '*.avif?thumb' {
  const th: ThumbHash
  export default th
}
