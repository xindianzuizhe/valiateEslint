import request from '../index'
const checkUser = (params) => {
  return request({
    url: '/user',
    params: params,
    method: 'post',
  })
}
export default {
  checkUser,
}
