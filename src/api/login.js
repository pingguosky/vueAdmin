import fetch from '@/utils/fetch'

export function login (username, password) {
  return fetch({
    url: '/user/login#!method=POST',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
