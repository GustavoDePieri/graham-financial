/**
 * Prepend the configured `NEXT_PUBLIC_BASE_PATH` to a /public asset path.
 *
 * Why: Next.js does NOT auto-prefix `basePath` onto string-literal
 * `src`/`href` values that point into `/public` — only `_next/*` build
 * assets get the assetPrefix applied automatically. So when the site is
 * hosted under a subpath (e.g. https://user.github.io/repo/), every
 * <Image src="/images/x.png">, <link rel="icon" href="/favicon.ico">,
 * download links, OG image URLs, etc. need to be passed through this
 * helper to resolve correctly in production.
 *
 * Pass-through behavior:
 *   - Paths that don't start with "/" are returned unchanged
 *     (covers external URLs, data URIs, etc.).
 *   - Empty/no basePath returns the input unchanged.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path || !path.startsWith("/")) return path;
  if (!basePath) return path;
  return `${basePath}${path}`;
}
