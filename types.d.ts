type ThumbHash = {
  src: string
  width: number
  height: number
  originalSrc: string
  originalWidth: number
  originalHeight: number
}

declare module '*.jpg?th' {
  const th: ThumbHash
  export default th
}

declare module '*.jpeg?th' {
  const th: ThumbHash
  export default th
}

declare module '*.png?th' {
  const th: ThumbHash
  export default th
}

declare module '*.webp?th' {
  const th: ThumbHash
  export default th
}

declare module '*.avif?th' {
  const th: ThumbHash
  export default th
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
