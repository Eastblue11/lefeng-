<template>
<div>
	<div class="navigation" @click="abc()">
			<router-link  tag="div" to='/' > <span ></span></router-link>结算<span  @click="myclic"></span>
		</div>
	<div class="message">
		<div>请输入收货人：<input type="text" v-model="pass1"></div>
		
		<div>请输入联系电话：<input type="text" v-model="pass4"></div>
		<div>请输入身份证号：<input type="text" v-model="pass5"></div>
		<div>请输入收货地址：<input type="text" v-model="pass6"></div>
		<div class="btn" @click="clickmy(pass1,pass4,pass5,pass6)">确定提交</div>
	</div>
	
</div>
</template>
<script>
export default{
	data:function(){
		return{
			pass1:'',
			pass2:'',
			pass3:'',
			pass4:'',
			pass5:'',
			pass6:''
		
		}
	},
	methods:{
		myclic:function(){
				
				this.myclick()
				this.abcshow(false)
			},
			abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow)
			},
			myclick:function(){
				this.$router.push({path:'/',query:{}})
			},
			abc:function(){
			this.abcshow(true)
			this.abcshow1(true)
		},
		abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow)
			},
			abcshow1:function(isshow){
				
				this.$store.dispatch("isshow2",isshow)
			},
			clickmy:function(pass1,pass4,pass5,pass6){
			this.$router.push({path: '/zhifu',query:{pass1:pass1,pass4:pass4,pass5:pass5,pass6:pass6}});
		

		},
	}
}
</script>
<style>
	#app>div:nth-of-type(1)>.navigation{
		width:100%;
		height:0.4809rem;
		font-size:0.164rem;
		text-align:center;
		line-height:0.4709rem;
		color:#333;
		font-weight: inherit;
   		font-style: inherit;
    	/*font-family: inherit;*/
    	background:url(../images/rep.gif)repeat-x;
    	background-size:100% 0.4809rem;
	}
	#app>div:nth-of-type(1)>.navigation>.router-link-active>span{
		float:left;
		width:0.4809rem;
		height:0.4809rem;
		font-size:0.1968rem;
		background:url(../images/left.gif)no-repeat;
		background-position: center;
		background-size:0.12rem 0.19rem;
	}
	#app>div:nth-of-type(1)>.navigation>span{
		float:right;
		width:0.4863rem;
		height:0.4709rem;
		background:url(../images/right.png)no-repeat;
		background-position: center;
		background-size:0.2459rem;
	}
	.message{
		width:100%;
	}
	.message>div{
		width:100%;
		height:0.8rem;
		font-size:0.20rem;
		line-height:0.8rem;
		box-sizing: border-box;
		padding-left:0.1rem;
	}
	.message>div>input{
		width:50%;
		height:0.6rem;
		font-size:0.20rem;
		line-height:0.6rem;
		border:0;
	}
	
		
	
	.btn{
		background:skyblue;
		height:0.6rem;
		font-size:0.40rem;
		font-family: 700;
		line-height:0.6rem;
		color:#333;
		text-align:center;
	}
</style>