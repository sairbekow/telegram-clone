export const PATH_PAGE = {
  root: '/',
  login: '/login',
  register: '/register',
  settings: '/settings',
  profile: (username: string) => `/profile/${username}`,
  chat: (slug: string) => `/chat/${slug}`,
  page404: '/404',
}
