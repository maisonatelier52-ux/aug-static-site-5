/**
 * Normalizes image paths coming from data sources (JSON/CMS/mock data)
 * into something next/image's `src` prop can actually use.
 *
 * next/image requires src to be:
 *  - a root-relative path starting with "/" (resolved against /public), or
 *  - a fully-qualified URL ("https://..."), or
 *  - a statically imported module.
 *
 * Data files sometimes contain filesystem-style relative paths like
 * "../images/foo.webp" (valid when writing the file, meaningless in the
 * browser), which makes next/image throw `Failed to construct 'URL'`.
 * This function fixes that, and falls back to a placeholder if the field
 * is missing entirely.
 */
export function normalizeImageSrc(src) {
  if (!src || typeof src !== 'string') return '/images/placeholder.jpg';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
    return src;
  }
  // Strip any leading ../ or ./ segments and force root-relative.
  return '/' + src.replace(/^(\.\.\/|\.\/)+/, '');
}