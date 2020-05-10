declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.gif' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

/// <reference lib="dom" />
declare interface GlobalFetch {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
}
