<template>
	<div class="p">
		<!-- 顶部导航 -->
		<div class="navigation" @click="abcshow(true)">
			<router-link tag="div" to='/' ></router-link>我是妈咪<span></span>
		</div>

		<!--妈咪精选 精心呵护-->
		<div class="p-main_1">

			<img src="//b.appsimg.com/2017/05/18/6464/18dc4bbea3eacbcbbb81313922a2f995.jpg" />
		</div>
		<!--我是妈咪-->
		<div id="p-main_2" :class="{scroll:flag}">
			<img src="http://b.appsimg.com/2017/05/18/9631/80f8884d976938b994fc0f742b9c115b.jpg" />
		</div>
		<div :class="{_blank:flag}">

		</div>
		<!--我是妈咪精选品牌-->
		<div class="p-main_3">
			<img src="//b.appsimg.com/2017/05/18/1873/1fe80911debd283675c6b9485289aa6f.jpg" />
		</div>

		<!--固定图片数据展示-->
		<router-link to='/data'>
		<div class="p_out">
		
			<div class="p_out-1"  >
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10012353_242.jpg" />
				<div>
					<p>母婴亲润</p>
					<p><a>全场2.8折起</a></p>
					<p><a>立即抢购</a></p>
				</div>
			</div>
		
			<div class="p_out-1" >
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10015807_242.jpg" />
				<div>
					<p><a>母婴袋鼠</a></p>
					<p><a>全场2.3折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1" >
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10026233_242.jpg" />
				<div>
					<p><a>母婴红色小象</a></p>
					<p><a>全场2.5折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1">
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10014482_242.jpg" />
				<div>
					<p><a>母婴十月天使</a></p>
					<p><a>全场2.5折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1" brandId='800028432'>
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10006345_242.jpg" />
				<div>
					<p><a>母婴五羊</a></p>
					<p><a>全场2.3折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1" brandId='800028319'>
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10011918_242.jpg" />
				<div>
					<p><a>母婴帕玛氏</a></p>
					<p><a>全场2.3折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1">
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10026706_242.jpg" />
				<div>
					<p><a>母婴滴露</a></p>
					<p><a>全场2.3折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1">
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10026780_242.jpg" />
				<div>
					<p><a>母婴京润珍珠</a></p>
					<p><a>全场2.3折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>
			<div class="p_out-1">
				<img src="http://h5rsc.vipstatic.com/lefeng_venue/607/10003976_242.jpg" />
				<div>
					<p><a>母婴好孩子</a></p>
					<p><a>全场2.3折起</a></p>
					<p><a>立即抢购</a></p>
				</div>

			</div>

		</div></router-link>

		<!--我是妈咪最爱爆款-->
		<div class="p-main_4">
			<img src="//b.appsimg.com/2017/05/18/947/abb0741c6a11c5a8d47c3d6fe3f599c8.jpg" />
		</div>

		<!--网络数据请求数据-->
		<div @click="abcshow(false)">
			<div class="p-main_5">
			<div class="p-main_5-in" v-for='(item,index) in list' >
				<img v-lazy="item.goods.image" style="width: 1.7527rem;height: 2.2158rem;" @click='clickme(item.goods.gid)'/>
			
			<div class="p-main_5-in-1" @click='clickme(item.goods.gid)'>{{item.goods.name}}</div>
	<div class="p-main_5-in-2"><i>￥<span>{{item.goods.vipshopPrice}}</span></i><span @click="addCart(item)">立即购买</span></div>
			</div><br clear="all" />
		</div>
		</div>
		


	</div>

</template>
<script>
	export default {
		data() {
				return {
					flag: "",
					list:{}
				}
			},
			methods: {
				abcshow:function(isshow){
				this.$store.dispatch("isshow",isshow)
			},
			addCart:function(item){
            this.$store.dispatch('addCart',item);
           //	this.mixData(this.lists,cartData);
    
        	},
				clickme:function(id){
					this.$router.push({path:'data2',query:{id:id}})
				},
				menu: function() {
					this.scroll = document.body.scrollTop;
					 // console.log(this.scroll)
					if (this.scroll >= 233) {
						this.flag = true
					} else {
						this.flag = false
					}
				},
			
				getData: function() {
					var $this = this;
					$this.$http.get('https://w-ssl.lefeng.com/wap/goods/listWithStock?json=data&brandId=800028767&start=1&limit=76&warehouse=VIP_BJ&isDisplay=false&_=1499754043013').then(function(res) {
						
						$this.list=res.data.data
						
						// console.log($this.list)
					})
				}
			},
			mounted: function() {
				window.addEventListener('scroll', this.menu)
			},
			created: function() {
				this.getData()
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

	
	.p {
		height: 40rem;
		font-size: 0;
	}
	
	html {
		font-size: 100px;
	}
	
	body {
		/*background-color: #c5ddf9;*/
		font-size: 0.12rem;
	}
	/*顶部菜单*/
	
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
	#app>div:nth-of-type(1)>.navigation>.router-link-active{
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
	
	.p-header em {
		font-size: 0.2rem;
		display: inline-block;
		width: 80%;
	}
	/*<!--妈咪精选 精心呵护-->*/
	
	.p-main_1 {
		font-size: 0;
	}
	
	.p-main_1 img {
		height: 1.9264rem;
		width: 100%;
	}
	/*我是妈咪*/
	
	#p-main_2 {
		font-size: 0;
	}
	
	#p-main_2 img {
		height: 0.4525rem;
	}
	
	._blank {
		height: 0.4525rem;
	}
	/*妈咪图滚动式新增属性*/
	
	.scroll {
		z-index: 2;
		position: fixed;
		top:0;
		left: 0;
	}
	/*我是妈咪精选品牌*/
	
	.p-main_3 {
		height: 0.4525rem;
	}
	
	.p-main_3 img {
		height: 0.4525rem;
		width: 100%;
	}
	/*固定图片数据*/
	
	.p_out {
		height: 13.3rem;
		background-color: #e3accb;
		font-size: 0.14rem;
	}
	
	.p_out img {
		height: 1.9044rem;
		width: 1.8414rem;
	}
	
	.p_out-1 {
		width: 1.9044rem;
		height: 2.5997rem;
		text-align: center;
		float: left;
		margin: 0.0276rem 0.08266rem;
	}
	
	.p_out-1 p:first-of-type {
		font-weight: bold;
	}
	
	.p_out-1 p:nth-of-type(2) a {
		color: #810b04;
		font-size: 0.12rem;
	}
	
	.p_out-1 p:nth-of-type(3) a {
		background-color: #810b04;
		width: 1.9044rem;
		display: inline-block;
		color: white;
	}
	
	.p_out-1 p {
		margin-top: 0.03rem;
	}
	
	.p_out-1 div {
		background-color: white;
	}
	
	.p-main_4 img {
		height: 0.4525rem;
	}
	
	.p-main_4 {
		height: 0.4525rem;
	}
	/*网络请求数据*/
	.p-main_5{
		font-size: 0;background-color: #c5ddf9;
		margin-bottom: 0.5rem;
	}
	.p-main_5-in{
	
		position: relative;
		background-color: #fff;
		font-size: 0.12rem;
		height: 3.18rem;
		width: 1.9475rem;
		/*text-align: center;*/
		float: left;
		margin: 0.05rem 0.06125rem;
	}
	.p-main_5-in-1,.p-main_5-in-2{
		margin-left: 0.07rem;
	}
	.p-main_5-in-2 i {
		margin-right:0.7rem ;	
	}
	.p-main_5-in-2 i span{
		font-size: 0.2rem;
		color: #FF0155;
	}
	.p-main_5-in-2>span{
		display: inline-block;
		background-color: #FF0155;
		border-radius: 0.02rem;
	}
	.p-main_5-in-2 {
		position: absolute;
		bottom: 0.05rem;left: 0;	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*http://a.vpimg2.com/upload/merchandise/pdcvis/2017/06/07/7/c92d7574-2693-4319-8dae-00fa546d0f78_1242x738_80.jpg*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>