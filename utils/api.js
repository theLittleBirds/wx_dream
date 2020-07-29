// 生产环境
// const WxApiRoot = 'https://www.baidu.com'
// 测试环境
// const WxApiRoot = 'http://rway.scfunion.com';
const WxApiRoot = 'http://127.0.0.1:8080';

module.exports = {
  WxApiRoot,
  addUserURrl: WxApiRoot + '/wx/user'        // 添加user
}
