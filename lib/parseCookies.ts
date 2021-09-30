import cookie from 'cookie'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function parseCookies(req): any {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}
