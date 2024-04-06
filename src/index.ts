import { defaultOptions, defaultResultTemplate } from "./defaults"

interface AutoCompleteOptions<T> {
  element: string
  data: T[] | (() => T[] | Promise<T[]>)
  keys: (keyof T)[]
  cache?: boolean
  threshold?: number
  debounce?: number
  noResults?: (query: string) => string
  resultTemplate?: (item: T) => string
  hiddenId?: string
}


export default function autoComplete<T>(options: AutoCompleteOptions<T>) {
  const config = { ...defaultOptions, ...options }
  config.resultTemplate ??= defaultResultTemplate(config.keys)
}