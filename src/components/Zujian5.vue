<template>
<div>
	<div class="jing_xuan">				
			<li v-for="(item,index) in list2" >
				<div @click="clickme2(false)">
					<div class="jing_image" @click="clickme1(item)">
						<img v-lazy="item.goods.image">
					</div>
					<div class="jing_name" @click="clickme1(item)">
						<span>{{item.goods.brandStoreName}}</span><span>{{item.goods.productName}}</span>
					</div>
				</div>
				
				<div class="jing_price">
					<span>￥{{item.goods.vipshopPrice}}</span><span>￥{{item.goods.marketPrice}}</span><span @click="addCart(item)"><img src="../images/tu2.png"></span>
				</div>
			</li>
				
	</div>
	<div class="jing_xuan">				
			<li v-for="(item,index) in list3" >
				<div @click="clickme2(false)">
					<div class="jing_image" @click="clickme1(item,false)">
						<img v-lazy="item.goods.image">
					</div>
					<div class="jing_name" @click="clickme1(item,false)">
						<span>{{item.goods.brandStoreName}}</span><span>{{item.goods.productName}}</span>
					</div>
				</div>
				
				<div class="jing_price">
					<span>￥{{item.goods.vipshopPrice}}</span><span>￥{{item.goods.marketPrice}}</span><span @click="addCart(item)"><img src="../images/tu2.png"></span>
				</div>
			</li>
				
	</div>
	<div class="jing_xuan">				
			<li v-for="(item,index) in list4" >
				<div @click="clickme2(false)">
					<div class="jing_image" @click="clickme1(item,false)">
						<img v-lazy="item.goods.image">
					</div>
					<div class="jing_name" @click="clickme1(item,false)">
						<span>{{item.goods.brandStoreName}}</span><span>{{item.goods.productName}}</span>
					</div>	
				</div>
				
				<div class="jing_price">
					<span>￥{{item.goods.vipshopPrice}}</span><span>￥{{item.goods.marketPrice}}</span><span @click="addCart(item)"><img src="../images/tu2.png"></span>
				</div>
			</li>
				
	</div>
	<div class="jing_xuan">				
			<li v-for="(item,index) in list5" >
			<div @click="clickme2(false)">
				<div class="jing_image" @click="clickme1(item,false)">
					<img v-lazy="item.goods.image">
				</div>
				<div class="jing_name" @click="clickme1(item,false)">
					<span>{{item.goods.brandStoreName}}</span><span>{{item.goods.productName}}</span>
				</div>
			</div>
				
				<div class="jing_price">
					<span>￥{{item.goods.vipshopPrice}}</span><span>￥{{item.goods.marketPrice}}</span><span @click="addCart(item)"><img src="../images/tu2.png"></span>
				</div>
			</li>
				
	</div>
</div>
    
</template>

<script>
export default {
  data () {
    return {
   	  list1:[],
   	  list2:[],
   	  list3:[],
   	  list4:[],
   	  list5:[]
    }
  },
  methods:{ 
	    abcshow1:function(isshow){
	      this.$store.dispatch('isshow2', isshow);
	    },
  	// 跳转详情页传本数据反回的item到下一页，因item带有数据信息不用再下一页在发送ajax请求
  		clickme1:function(item,isshow){
  			this.$router.push({ name: 'Jingxuan_detial', params: { item: item }})
  			/*console.log(item)*/
  			/*this.$store.dispatch("isshow",isshow)
  			this.$store.dispatch("isshow2",isshow)*/ 			 			
  		},
  		clickme2:function(isshow){
  			/*console.log(12);
  			console.log(isshow);*/
  			this.$store.dispatch("isshow",isshow)
  			this.$store.dispatch("isshow2",isshow)	 			
  		},
  		addCart:function(item){
  			/* var cartData = this.$store.state.cartList; */			
  			this.$store.dispatch('addCart',item);  			
  			/*this.mixData(this.list5,cartData);*/
  		},
		getDate:function(){
		var me=this
/*	this.$http.get("../../static/home10.json").then(function(res){
		console.log(res)
		console.log(res.data.data);
		me.list1=res.data.data

	});*/
	this.$http.get("../../static/home11.json").then(function(res){
		/*console.log(res)
		console.log(res.data.data);*/
		me.list2=res.data.data
	});
	this.$http.get("../../static/home12.json").then(function(res){
		/*console.log(res)
		console.log(res.data.data);*/
		me.list3=res.data.data
	});
	this.$http.get("../../static/home13.json").then(function(res){
		/*console.log(res)
		console.log(res.data.data);*/
		me.list4=res.data.data
	});
	this.$http.get("../../static/home14.json").then(function(res){
		/*console.log(res)
		console.log(res.data.data);*/
		me.list5=res.data.data
		/*console.log(me.list5);*/
		/*console.log(me.list5)*/
	})

	}
  },
  created(){
		this.getDate();
		}
}
</script>
<style >
.jing_xuan{
	width: 100%;
	height: auto;
}

.jing_xuan>li{
	
	float: left;
	width: 2.07rem;
	height: 3.03rem;
	padding: 0.10933rem;
	list-style: none;
	overflow: hidden;
	border-right: 1px solid rgba(0,0,0,.12);
	border-bottom: 1px solid rgba(0,0,0,.12);
}
.jing_xuan>li:nth-of-type(1),.jing_xuan>li:nth-of-type(2){
	border-top: 1px solid rgba(0,0,0,.12);
}
.jing_image{
	width: 1.6945rem;
	height: 2.0336rem;
	margin: 0 auto; 
}
.jing_image>img{

	display: block;
	width: 100%;
	height: 100%;
}
.jing_name{
	width: 1.8416rem;
	height: 0.27rem;
	display: flex;	
	align-items: center;
}
.jing_name>span:nth-of-type(1){
	display: block;
	height: 0.14rem;
	font-size: 0.12rem;
	font-weight: 700;
	white-space: nowrap;
    text-overflow: ellipsis;
    color:  #333;
    line-height: 0.14rem;
}
.jing_name>span:nth-of-type(2){
	display: block;
	height: 0.14rem;
	font-size: 0.12rem;
	white-space: nowrap;
	overflow: hidden;
    color: #4d4d4d;
    line-height: 0.14rem;
    margin-left: 0.05rem;
}
.jing_price{
	width: 1.8416rem;
	height: 0.27rem;
	display: flex;
	position: relative;
}
.jing_price>span:nth-of-type(1){
	display: block;
	height: 0.31rem;
	font-size: 0.2rem;
	font-weight: 300;
	text-align: center;
	line-height: 0.31rem;
	color: #393939;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.jing_price>span:nth-of-type(2){
	display: block;
	width: 0.47988rem;
	height: 0.31rem;
	font-size: 0.13rem;
	text-align: center;
	line-height: 0.31rem;
	text-decoration: line-through;
	color: #999;
}
.jing_price>span:nth-of-type(3){
	display: block;
	height: 0.328rem;
	width: 0.328rem;
	position: absolute;
	right: 0;
}
.jing_price>span:nth-of-type(3)>img{
	display: block;
	width: 100%;height: 100%;

}
</style>