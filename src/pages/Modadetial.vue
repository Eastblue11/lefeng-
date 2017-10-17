<template>
		<div>
			<!-- 顶部导航 -->
			<div class="navigation">
				<div @click="clickme"></div>
				<div>{{lists.goods&&lists.goods.name}}</div>
				<span></span>
			</div>
			<div class="detailimg">
				<img :src="lists.goods&&lists.goods.middleImage[0]">
			</div>
			<!-- 商品信息 -->
			<div class='merchandise'>
				<div class="merchandise-name">
					<span>{{ lists.goods&&lists.goods.name}}</span>
					<span></span>
				</div>
				<div class="merchandise-price">
					¥<span>{{lists.goods&&lists.goods.vipshopPrice}}</span>
					<del>¥{{lists.goods&&lists.goods.marketPrice}}</del>
				</div>
			</div>

			<!-- 全场包邮 -->
			<!-- <p v-for="(ite,ind) in lists.goods.pmsList" class="posbage">
				<span>{{ite.type}}</span>{{ite.msg}}
			</p> -->
			<!-- 全场包邮下填充 -->
			<div class="posbagebottompadding"></div>
			<!-- 商品评价 -->
			<div class="commeval"></div>
			<!-- 购物车 -->
			<div class="commcart">
				<router-link to='/cart'>           
	            	<div></div>
	         	</router-link> 				
				<div @click="addCart(lists)">加入购物车</div>
			</div>
		</div>
</template>
<script>
export default {
  data () {
      return {
          id:'',lists:{}
      }
  },
  methods:{
		  	clickme:function(){
		  		this.abcshow1(true);
		  		this.clickmy();
		  	},
	  		clickmy:function(){
	  			this.$router.push({path:'/moda',query:{}})
	  		},
	  		abcshow1:function(isshow){
					
					this.$store.dispatch("isshow2",isshow)
			},
			addCart:function(item){
  			 var cartData = this.$store.state.cartList;
  			/*console.log(item);*/ 			
  			this.$store.dispatch('addCart',item);
  			/*this.mixData(this.list5,cartData);*/
  		},
        getData:function(){
        		this.$http.get('http://w.lefeng.com/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+this.id+'&brandId=755041475').then(function(res){
        		this.lists=res.data.data
        		/*console.log(this.lists)*/
        		
        	})
        }
	},	
	  created (){
	      this.id = this.$route.query.id;
	      this.getData()
	  }

}
</script>
<style>
/*顶部样式*/
#app>div:nth-of-type(1)>.navigation{
		width:100%;
		height:0.4809rem;
    	background:url(../images/rep.gif)repeat-x;
    	background-size:100% 0.4809rem;
	}
	#app>div:nth-of-type(1)>.navigation>div:nth-of-type(1){
		float:left;
		width:0.4809rem;
		height:0.4809rem;
		font-size:0.1968rem;
		background:url(../images/left.gif)no-repeat;
		background-position: center;
		background-size:0.12rem 0.19rem;
	}
	#app>div:nth-of-type(1)>.navigation>div:nth-of-type(2){
		float:left;
		width:3.1681rem;
		height:0.4809rem;
		font-size:0.1968rem;
		font-size:0.164rem;
		text-align:center;
		line-height:0.4709rem;
		color:#333;
		font-weight: inherit;
   		font-style: inherit;
	}
	#app>div:nth-of-type(1)>.navigation>span{
		float:right;
		width:0.4863rem;
		height:0.4709rem;
		background:url(../images/right.png)no-repeat;
		background-position: center;
		background-size:0.2459rem;
	}
.detailimg{
	font-size:0;
	width:100%;
	height:2.46rem;
}
.detailimg>img{
	width:100%;
	height:2.46rem;
}

/*商品信息样式*/
.merchandise{
	width:3.9216rem;
	height:0.7833rem;
	margin:0.10933rem;
	font-size:0;
}
.merchandise-name{
	width:100%;
	height:0.24rem;
	margin-bottom:0.27333rem;
	font-size:0.153067rem;
	line-height:0.24rem;
	color:#333; 
}
.merchandise-name>span:nth-of-type(2){
	float:right;
	width:0.2733rem;
	height:0.2733rem;
	background:url(data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAA5FBMVEUAAAD/orX/gar/kLH/gar/gqv/hq7/w8P/gKv/gar/gav/gar/ha3/iK7/gar/gav/gar/g6v/g6v/hq3/gKv/gav/gKv/gav/gaz/gqz/gqv/g6z/g63/gKr/gKv/gqv/gaz/gqz/iK//gKr/gav/g6v/gKv/gav/gqv/8/f/gKr/8PX/qsf/zd3/gqz/4+3/3un/r8n/mbv/6fD/5u7/kbX/h67/7PL/1+T/v9T/uND/pML/irH/xNf/tM3/lLj/hK3/0+L/u9H/nL3/jbP/0OD/oL//xtr/2+b/ytv/scv/psTvHn9bAAAAKXRSTlMABtoL4nkbAvrJ9OcnEu/CrD86IeqdlYpvYFEzL9SDaltGFq+PTbijc+/LkJQAAAPlSURBVFjD7ZhpU+JAEIab+76FVRAVXXXTXIFwC8il6/H//89Wp6ecxBANGT5t+XwhmSne6unume4M/PCDk+t0sXgejYELmXSteF4KgHfSkVwWTZKJym0IPlGL3KV4Oh4s33oSjl7U0UayXLOaGAl+ms5X4RtCF0l0ch8FJnaZRSeJIrjA/0nhXpIRc5WFOu4nX3I3M4+CeWu2eFovZq0hCoJpiFVQMHpYTtvr101vi4Jsw82bCaG4nGgf6DOhe1LIC8XWU/Nj2vj7LGJ2Cfs4DyOx2jQ1O69ztNAzNDuTPk/83mcnu/Pd0ByMlx0UbHXNSXuERMShGeC1b7S9rEes2do/3WUX3cInyjTaaWsu6KYLlpZFv7+/LfSPtWzNaKXBxhUSpOlCd4c40yRs26olYtp8pNd6zLb4oDTETXXes74+oKDP5g7MpZyBhUsaeda+pGt7a67b09bO9NmG/UHP4YAl609osqsdjN5bkbFjem6R6h8pemomoOaHLoXowXRAh7aINDVHPjc0f0xRhPCNTCuAIBPnFPTJDBHXZKptX53R25NPSc6ER/qltAqCIE9havoXNTqIE2EypoEJcz4pmMphfiHRK5H5nPgKPCHuaLOS0AWLluh5qqnQQTT4B+9FdSTRVyXRITuVdtgNixaRc0KBLR9GdFzfiSOfM0qFd8S/IqdupE9pTIEZCfDyy+I4UQ+U8dCiPKfT5Rcwcd69yjStlSrMB40yL9Zz+oaKvabOgkTPgYnQy0BdtEUNUgyYhix6qlsAcyDIcElXpWvvUxLUIjVVRTck2rDXqPYxVn8iK38Uj5BUOolUQJKjga5q7GXdk1Wqpx6mYAwkgTCVKaVU7cntpNhOSAYd2fXYGh/UlWof4qkUlFu1r1L6EFMhkMhmcuFTc7zj6vyZAg2PBgpRyoGTe9MBvjZr2/zoSYOT6yxNvflJ0RF3Efuoor8jgPv9hMvn9G/Trbqv/ZmNgsT5LTU/MFhL8Q3lRsl069A4tJGmwuxOIX5oCrSRuImBwD1Y2/FhmokQfMkpEn2Pqq9IBDPwDb+QeDQ8F3pMlQA8qg68xiicBg9cIDGffJfzLdYsgSciSHS+7i6NPvszCh75g/jdOaDvkKhHwTPVJBLPY9dUWiFx555L7rc0w5f97lyiya/YgReIOXS9VNEfkYifwaEEyqza7zoyqcPpWQQfnMaRWC3stXiLJoko+KIWRI6XxdjFSLgzAD4JVdB+q/bSR5NwARRoiGvK4ZoKcQ+ZcgiUyOSReZ5MxcpPqqDMVQpt5K/hCGQqKAk24EjUcpYb3+NRrdMWqlzDcSleXmXgh/+Kf7J+p6u342HHAAAAAElFTkSuQmCC)no-repeat;
	background-size:0.2733rem 0.2733rem;
}
.merchandise-price{
	font-size:0.16rem;
	color:#fc1159;
}
.merchandise-price>span{
	font-size:0.27333rem;
	line-height: 0.27333rem;
}
.merchandise-price>del{
	font-size:0.1312rem;
	color:#999;
	
}
.posbage{
	font-size:0.142133rem;
	color:#333;
	line-height: 0.218667rem;
	box-sizing: border-box;
	padding-left:0.10933rem;
	margin-bottom:0.10933rem;
}
.posbage>span{
	float:left;
	font-size:0.16rem;
	background:rgb(255, 88, 144);;
	color:#fff;
	line-height: 0.21rem;
	box-sizing: border-box;
	margin-right:0.10933rem;

}
.posbagebottompadding{
	width:100%;
	height:0.082rem;
	background:#f6f6f6;
}
.commcart{
	width:100%;
	height:0.5464rem;
	background:#000;
	position: fixed;
	bottom:0;
	left:0;
	opacity:0.7;
	padding-top:0.1px;
}
.commcart>a>div:nth-of-type(1){
	float:left;
	width:0.3006rem;
	height:0.3389rem;
	background:url(../images/cart.png)no-repeat;
    background-size:0.3006rem;
    margin:0.10933rem;
	
}
.commcart>div{
	width:1.0933rem;
	height:0.5464rem;
	float:right;
	background:#ff0056;
	font-size:0.142133rem;
	color:#fff;
	line-height:0.5464rem;
	text-align:center; 
}
ul{
	display:none;

}
</style>