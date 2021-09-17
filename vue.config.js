const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	},
	devServer: {
		port:8080,
	    proxy: {
		   '/api' : {
			   target: "http://tapi.jxzwawa.cn",//域名
			   changeOrigin: true,//开启代理
			 }
		 }
	}

}