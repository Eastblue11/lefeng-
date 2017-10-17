<template>
<div id='d'>

    <!--顶部菜单-->
		<div class="d-header">
			<router-link to='/mami'>
				<span>
					<
				</span>
			</router-link>
			<em>亲润乐峰专场</em>
			<router-link to='/'>
				<i><img src="../images/p-1.png">	</i>
			</router-link>
		</div>
		<!--顶部菜单下第一张图-->
		<div class='d-main-1'>
		
			<img src='http://b.appsimg.com/2017/07/12/5353/1499823431752.jpg'>
		</div>
		<!--上不封顶-->
		<div class='p-main-2'>
			<span>满199元减50</span><span>上不封顶</span>
		</div>
		
		<!--价格销量筛选-->
		<div class='p-main-3'>
			<span>价格</span><span>销量</span><span>筛选</span>
		</div>


		<!--网络请求数据-->
		<div class='d-data'>
		<!--第一次请求数据-->
			<div class='d-data-1' v-for='(item,index) in list1'>
				<div><img :src="item.goods.image" style="width:1.6945rem;height:2.0336rem"/> </div>
				<div>{{item.goods.name}}</div>
				<div>
					<i>￥<span>{{item.goods.vipshopPrice}}</span></i>
					<del><em>￥<span>{{item.goods.marketPrice}}</span></em></del>
					<span><img src='../images/market.png'/></span>
				</div>
			</div>

			
		
		</div>		
		<!--最外层div-->
		</div>
</template>

<script>
export default {
		data(){
			return{
				list1:[],			
			}
		},
		methods:{
			getData1:function(){
				this.$http.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=800028340&start=1&m=brand&brand_id=800028340&warehouse=VIP_BJ').then(function(res1){
					// console.log(res1.data.data)
					this.list1=res1.data.data
					// console.log($this.list1)
				})
			}
		},
		created(){
			this.getData1();
			
		}
	}
</script>
<style>

	* {
		padding: 0;
		margin: 0;
	}
	
	em,
	i {
		font-style: normal;
	}
	
	li {
		list-style: none;
	}
	

	
	body {
		font-size: 0.12rem;
	}
/*顶部菜单*/
	
	.d{
		font-size:0
	}
	.d-header {
	
		text-align: center;
		height: 0.4709rem;
		width: 100%;
		background-color: #FFFFFF;
		font-size: 0;
		line-height: 0.4709rem;
	
	}
	
	.d-header span {
		vertical-align: top;
		display: inline-block;
		height: 0.4709rem;
		font-size: 0.3rem;
		width: 10%;
	}
	
	.d-header i {
		display: inline-block;
		width: 10%;
		vertical-align: top;
	}
	
	.d-header img {
		height: 0.25rem;
		width: 0.25rem;
		vertical-align: middle;
	}
	
	.d-header em {
		font-size: 0.2rem;
		display: inline-block;
		width: 80%;
	}
/*顶部菜单下第一张图*/
.d-main-1{
	height:1.83rem;
}
.d-main-1 img{
	height:1.83rem;width:4.14rem
}
/*上不封顶*/
.p-main-2{
	font-size:0.13rem;
	height:0.3rem;
	background-color:#595971;
	color:#FFF;
	text-align:left;
	line-height:0.3rem;
	padding-left:0.1rem;
}
.p-main-2 span:first-of-type{
	margin-right:0.1rem
}

/*<!--价格销量筛选-->*/
.p-main-3 {
	height:0.39rem;
	font-size:0.15rem;
	line-height:0.39rem;
	border-bottom:0.01rem solid #ccc
}
.p-main-3 span{
	display:inline-block;
	width:33.17%;
	text-align:center;
	border-right:0.01rem solid #ccc
}
.p-main-3 span:last-of-type{
	border-right:0
}

/*网络第一次请求数据*/
.d-data-1{
	font-size:0.15rem;
	height:2.7918rem;
	width:2.06rem;
	float:left;
	border-right:0.01rem solid #ccc;border-bottom:0.01rem solid #ccc;
}
.d-data-1 img{
	margin-left:0.18775rem;
}
.d-data-1 div:nth-of-type(2){
	line-height:0.13rem;
	font-size:0.1rem;
	width:1.8rem;height:0.13rem;
	display:inline-block;
	overflow:hidden;
	/*text-overflow :  ellipsis ;*/
	margin-left:  0.15rem;
}
.d-data-1 div:nth-of-type(3){
	width:1.8rem;
	margin-left:  0.15rem;
}
.d-data-1 div:nth-of-type(3) i span{
	display:inline-block;
	margin-right:0.2rem;
	font-size:0.25rem
}
.d-data-1 div:nth-of-type(3) em{
	color:#ccc;	
}
.d-data-1 div:nth-of-type(3){
	margin-top:0.1rem;
}
.d-data-1 div:nth-of-type(3) img{

	width:0.3rem;height:0.3rem;
	

}













</style>

	// <div class='d-data-1' v-for='(item,index) in list1'>
	// 			<div><img :src="item.goods.image" style="width:1.6945rem;height:2.0336rem"/> </div>
	// 			<div>{{item.goods.name}}</div>
	// <div>
	<i>￥<span>{{item.goods.vipshopPrice}}</span></i
	><del><em>￥<span>{{item.goods.marketPrice}}</span></em></del>
	<span></span></div>
	// 		</div>