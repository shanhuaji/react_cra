/* craco.config.js */
const path = require('path')
function pathHandler(pathElem){
   return path.join(__dirname,pathElem)
}
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
          /* less */
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" },
        },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  /* 反向代理 */
  devServer:{
      proxy: {
        '/ajax': {
          'target': 'https://m.maoyan.com',
          'changeOrigin': true,
        },
      }
  },
  /* 路径别名 */
  webpack:{
      alias:{
        '@':pathHandler('./src'),
        'Comp':pathHandler('./src/components')
      }
  }
};
