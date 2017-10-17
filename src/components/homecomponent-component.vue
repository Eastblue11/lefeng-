<template v-on:click="clickme">
	<div>
		<button id="btn"></button>
		<div >
			<div v-for="(item,index) in lists" class="commodity">
			<div class="commoditymap"  @click="clickmy(item.goods.gid)"  >
				<img v-lazy="item.goods && item.goods.image" @click="abcshow1(false)">
			</div>
			<div class="commodityprice"  @click="clickmy(item.goods.gid)" >
				<!-- 商品信息与图片之间的填充 -->
				<div class="commpadding"></div>
				<div class="comm-name" @click="abcshow1(false)">
					<span>{{item.goods&&item.goods.brandStoreName}}</span>
					<label>{{item.goods&&item.goods.productName}}</label>
				</div>
				<div class="comm-price" @click="abcshow1(false)">
					<span><label>¥</label>&nbsp;{{item.goods&&item.goods.vipshopPrice}}</span>
					<del>¥&nbsp;{{item.goods&&item.goods.marketPrice}}</del>
				</div>
			</div>
			<!-- 购物车背景图 -->
			<div class="comm-cart" @click="addCart(item)"></div>
		</div>
		</div>
		
	</div>
</template>
<script>
export default{
	 props:{message:Number},
	data:function(){
		return{lists:[],listss:[],min:''}
	},
	methods:{
		abcshow1:function(isshow){
      this.$store.dispatch('isshow2', isshow);
    },
		// 添加商品
		 addCart:function(item){
		 	this.somedata+=1;
            this.$store.dispatch('addCart',item);
            // console.log(item)
            // 选中当前商品数量
            this.coun+=1;
        },
		// 向详情页传送当前商品的id
		clickmy:function(id){
			this.$router.push({path: '/Modadetial',query:{id:id}});
		},
        clickme:function(){
        	this.min='asc'
        	
        		this.$http.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start='+this.message
        			+'&sort=vipshopPrice:'+this.min).then(function(res){
        			this.lists=res.data.data
        	})
        	
        	
        },
        getData:function(){
        		this.$http.get('http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start='+this.message
        			+'&sort=vipshopPrice:'+this.min).then(function(res){
        		this.lists=res.data.data
        	})
        }
	},
	created(){
		this.getData()
	}
}
</script>
<style>
.cartbutton{
	width:0.328rem;
	height:0.328rem;
	background:red;
}
</style>


<!-- 
http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=2&sort=%7B%22vipshopPrice%22%3A%22asc%22%7D
{"vipshopPrice":"asc"}


http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=1&sort=%7B%22vipshopPrice%22%3A%22desc%2
{"vipshopPrice":"desc"}



http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=1 -->

<!-- http://w.lefeng.com/api/neptune/goods/list_with_stock/v1?brandId=755041475&start=2&sort={"vipshopPrice":"asc"} -->