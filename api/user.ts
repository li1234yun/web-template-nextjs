/**
 *  User API
 */

import request from 'utils/request'

interface userLoginForm {
  account: string
  password: string
}

export function userLogin(data: userLoginForm): Promise<any> {
  return request.post('/invoke/auth/LOGIN', data)
}
