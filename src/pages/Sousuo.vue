<template>
	<div>
		<div class="sousuo_top">
			<input type="text"  value="搜索商品">
			<button>取消</button>
			<router-link to="/">
			<span @click="abcshow1(true)"><li @click="abcshow(true)"></li></span>
			</router-link>
		</div>
		<div class="sousuo_main">
			<p>大家都在搜</p>
			<div>
				<span>护肤套装</span><span>粉饼</span><span>面膜</span><span>口红</span><span>面部护肤</span><span>韩束</span><span>防晒隔离</span>
			</div>
		</div>
	</div>
</template>
<script >
	// 引入组件

	export default{
		methods:{
			abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow);
			},
			abcshow1:function(isshow){
				
				this.$store.dispatch("isshow2",isshow);
			}
		}

	}
</script>
<style >

.sousuo_top{
	width: 100%;
	height: 0.47rem;
	display: flex;
	align-items: center;
	position: relative;
}
.sousuo_top>input{
	height: 0.29rem;
	border: 1px solid lightgray;
	outline: none;
	border-radius: 0.05rem;
	margin-left: 0.1rem;
	padding-left: 0.05rem;
	color: lightgray;
	flex:1;
}
.sousuo_top>button{
	color: #e83068;
	display: inline-block;
	border-radius: 0.03rem;
	border: 1px solid #e83068;
	width: 0.57rem;
	text-align: center;
	height: 0.29rem;
	margin-left: 0.1rem;
}

.sousuo_top>a>span>li{
	list-style: none;
}
.sousuo_top>a>span>li{
		background:url("../images/tu4.png");
		background-repeat: no-repeat;
		background-size:0.27rem 0.24rem;
		background-position:0.0rem 0.045rem;
		float: left;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
		display: inline-block;
		width: 0.2733rem;
		height: 0.28rem;
			
	}
.sousuo_main{
	width: 100%;
	height: 1.4116rem;
	padding:0.1rem;box-sizing: border-box;
	}
.sousuo_main>p{
	font-size: 0.18rem;
	height: 0.2rem;	
}

.sousuo_main>div>span{
	float: left;
	font-size: 0.16rem;
	border:1px solid #ff0056;
	color: #ff0056;
	margin-left: 0.05rem;
	padding: 0.03rem;
	margin-top: 0.1rem;
}	

</style>