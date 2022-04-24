// const users = {
//     admin: {
//       id: 1,
//       name: '大脸怪(admin)',
//       avatar: 'https://assets.qszone.com/images/avatar.jpg',
//       email: 'Ronnie@123.com',
//       role: ['admin'],
//     },
//     editor: {
//       id: 2,
//       name: '大脸怪(editor)',
//       avatar: 'https://assets.qszone.com/images/avatar.jpg',
//       email: 'Ronnie@123.com',
//       role: ['editor'],
//     },
//     guest: {
//       id: 3,
//       name: '访客(guest)',
//       avatar: 'https://assets.qszone.com/images/avatar.jpg',
//       role: [],
//     },
//   }
// 使用Mock生成数据
import Mock from 'mockjs'
let data = Mock.mock({
  data: {
    //生成一个英文名字
    name: Mock.Random.name(),
    //生成一个中文名字
    chineseName: Mock.Random.cname(),
  },
})
export default [
  {
    url: '/api/user',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data,
      }
    },
  },
]
