declare module 'chalk' {
  interface IChalk {
    red: (s: string) => string
    blue: (s: string) => string
    green: (s: string) => string
  }

  const chalk: IChalk

  export default chalk
}
