/* 'feat', // 新功能
  'fix', // 修补
  'docs', // 仅文档新增改动
  'style', // 仅样式改动
  'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
  'test', // 测试用例
  'code' // 优化代码 
*/
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'code']],
  },
}
