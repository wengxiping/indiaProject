export default{
	data(){
		return {
			setInterval: 0, //页码
			setTime:60,
			setCodeStatus:false,
			isLoading: false, //刷新数据
			loaded: false, //加载完毕
		}
	},
	watch:{
		loginStatusWatch()
		{
			console.log('here')
			return this.loginStatus
		}
	},
	methods:{
		getCodeResetTime(){
			var self = this
			self.setCodeStatus = true
			self.setInterval = setInterval(()=>{
				if(self.setTime==1){
					self.setCodeStatus = false
					clearInterval(self.setInterval)
				  self.setTime =60
				}else{
					self.setTime--;
				}
			},1000);
		},
		
	}
}