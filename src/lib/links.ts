/**
 * Prefix a site-relative path with the deploy base. ALWAYS use this (or a
 * relative URL) for internal links — never hardcode a leading "/", because the
 * site may be served under a path prefix and root-absolute links would escape
 * it.
 *
 *   href('')        -> site home
 *   href('about/')  -> the about page
 *   href('blog/x/') -> a blog post
 */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith('/') ? base : `${base}/`) + path.replace(/^\/+/, '');
}
