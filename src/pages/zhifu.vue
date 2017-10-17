<template>
	<div>
		<div class="navigation" @click="abc">
			<router-link  tag="div" to='/' > <span ></span></router-link>支付<span @click="myclic"></span>
		</div>
		<div class="message">
			<div>请输入收货人：{{pass1}}</div>
			<div>请输入联系电话：{{pass4}}</div>
			<div>请输入身份证号：{{pass5}}</div>
			<div>请输入收货地址：{{pass6}}</div>
			<div class="btn1">确定支付</div>
		</div>
	</div>
</template>
<script>
export default{
	data:function(){
		return{
			
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
	},
	 created (){
	      this.pass1 = this.$route.query.pass1;
	      this.pass4 = this.$route.query.pass4;
	      this.pass5 = this.$route.query.pass5;
	      this.pass6 = this.$route.query.pass6;
	     
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
	.btn1{
		background-color:pink;
		height:0.6rem;
		font-size:0.40rem;
		font-family: 700;
		line-height:0.6rem;
		color:#333;
		text-align:center;
	}
</style>