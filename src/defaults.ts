export const defaultOptions = {
  cache: true,
  threshold: 1,
  debounce: 300,
  noResults: (query: string) => `No results found for ${query}`
}

export function defaultResultTemplate<T>(keys: (keyof T)[]) {
  const defaultKey = keys[0]
  return (item: T) => `${item[defaultKey]}`
}
