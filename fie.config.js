/**
 * 套件帮助文档 可查看: http://gitlab.alibaba-inc.com/fie/fie-toolkit-nuke
 */
module.exports = {
  // 当前项目使用的fie套件
  toolkit: 'fie-toolkit-nb',

  toolkitConfig: {
    // 本地服务器端口号
    // qap开发中客户端需要通过此接口获得qap.json，请不要修改，如果该端口被占用，请修改apache或其他服务配置
    port: 8080,
    // 是否自动打开浏览器
    open: true,
    // 文件修改后是否自动刷新浏览器
    liveload: true,
    type: 'theme',
  },
  tasks: {
    commit: [
      {
        command: './node_modules/eslint/bin/eslint.js --fix ./ --ext .jsx --ext .js',
      }, {
        command: 'fie plugin commit',
      },
    ],
    build: [
      {
        // 同步版本号
        command: 'fie git sync',
      },
      {
        // 检测dependencies中的版本依赖
        command: 'fie check',
      },
    ],
    publish: [],
    open: [
      {
        // 打开gitlab上的项目
        command: 'fie git open',
      },
    ],
  },
  // air发布配置
  air: {
    pages: {
      // BU代码，如：淘宝、天猫、国际UED
      bizCode: {
        daily: '',
        release: '',
      },
      root: 'www', // 资源根路径（相对 fie.config.js 的相对路径，默认为 www）
      cache: 300, // 资源在客户端的缓存时间，默认所有页面都是 300s
      // 页面  会找到_output/qap下的index文件夹
      index: {
        spm: 'aaa.bbb',
        title: '页面标题',
        description: '页面描述',
        cache: 200, // 该页面的缓存时间，优先级比全局的高，可选
      },
    },
  },
};
