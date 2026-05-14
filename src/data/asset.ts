/**
 * Resolves a public/* path against the configured Vite base. Vite's BASE_URL
 * always ends with '/', so callers should pass paths without a leading slash
 * (e.g. asset('assets/editor.png')).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/'
  return `${base}${path.replace(/^\//, '')}`
}
