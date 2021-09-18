const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages({
     includes:['path','flag']
})
module.exports = {
    configureWebpack: {
        plugins: [
            new tfPages.webpack.DefinePlugin({
                ROUTES: JSON.stringify(tfPages.routes)
            })
        ]
    },
	devServer: {
		port:8081,
	    proxy: {
		   '/api' : {
			   target: "http://tapi.jxzwawa.cn",//域名
			   changeOrigin: true,//开启代理
			 }
		 }
	}
}