<template>
	<div >
		<div class="top_bar">
			<a @click="abcshow1(true)" > 
				<router-link to="/">
					<span @click="abcshow(true)"></span>
				</router-link>	
			</a>	
			购物车
		</div>
		<!-- 下填充 -->
		<div class="navigationcartbotpad"></div>
		<div class="biao_ti">
			乐峰
		</div >				
			<li class="main" v-for="(item,index) in cartList">
				<div class="main_first">
				满减
				</div>
				<div class="main_second">
					<div >
					    <img v-lazy="item.goods.image">
				    </div>
				    <div>
				    	<div class="car_name">
						    <span>{{item.goods.productName}}</span>
						</div>
						<div class="car_price">
							<span>￥{{item.goods.vipshopPrice}}</span>							
						</div>
						<div class="car_number">
							<span @click="minus(item)">-</span>
							<input type="text" :value=item.goods.number>
							<span @click="addCart(item)">+</span>
							<span @click="del_shangpin(item)">×</span>
						</div>
			
				    </div>
					
				</div>
				
			</li>
		<div class="footer">
			待支付：￥{{total}}
			<span @click="myclic">结算</span>
		</div>	
	</div>
</template>
<script >
	export default{

		data(){
			return{
			total:0
		}			
		},
		computed:{
			cartList:function(){
				return this.$store.getters.getList;				
			}					
		},
		created () {
       		this.getTotal();
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
				this.$router.push({path:'/jiesuan',query:{}})
			},
			total:function(){
				return this.$store.getters.getTotal;
			},
			/* getTotal:function(item){
           this.total=item.goods.number*item.goods.vipshopPrice
        },*/

    		getTotal:function(){	
	            this.total = 0;
	            this.cartList.forEach(d=>{               
	                    this.total += d.goods.vipshopPrice * d.goods.number;
	               
	            });
	            this.total = this.total.toFixed(2);
        	},
			abcshow:function(isshow){
				this.$store.dispatch("isshow",isshow)
			},
			abcshow1:function(isshow){
				this.$store.dispatch("isshow2",isshow)
			},
		 	mixData:function(desc,src){
            var obj = {};
            var arr = [];
            for(var i in src){
                var n = src[i];
                obj[n.id] = n;
            }
            for(var j in desc){
                var m = desc[j];
                if(obj[m.id]){
                    arr.push(obj[m.id]);
                }else{
                    m.number = 0;
                    arr.push(m);
                }
            }
            return arr;
        	},
        	// 增加商品
			addCart:function(item){
	            var cartData = this.$store.state.cartList;
	            this.$store.dispatch('addCart',item);
	           	/*this.mixData(this.list5,cartData);*/
	           	this.getTotal(item);
        	},
        	// 减少商品
        	minus:function(item){
	           var cartData = this.$store.state.cartList;
	            this.$store.dispatch('minus',item);
	            /*this.mixData(this.list5,cartData);*/
	            this.getTotal(item);
	            
        	},
        	// 删除商品
        	del_shangpin:function(item){
        		this.$store.dispatch("del",item)
        		this.getTotal(item);
        	}
		}

	}
</script>
<style >
	.top_bar{
		width:100%;
		height:0.4809rem;
    	background:url(../images/rep.gif)repeat-x;
    	background-size:100% 0.4809rem;
    	font-size:0.1968rem;
		font-size:0.164rem;
		text-align:center;
		line-height:0.4709rem;
		color:#333;
		font-weight: inherit;
   		font-style: inherit;
   		border-bottom:1px solid #e0d8d8;
	}
	.top_bar>a>a>span{
		float:left;
		width:0.4809rem;
		height:0.4809rem;
		font-size:0.1968rem;
		background:url(../images/left.gif)no-repeat;
		background-position: center;
		background-size:0.12rem 0.19rem;
	}
	.navigationcartbotpad{
		width:100%;
		height:0.11rem;
		background:#f6f6f6;
	}
	.biao_ti{
		width:3.8686rem;
		height:0.32rem;
		font-size:0.142133rem;
		margin-left:0.13667rem;
		line-height:0.32rem;
		color:#333;
		text-align: left;
		border-bottom: 1px solid #dcdcdc;
	}

	.main{
		list-style: none;
		padding: 0.1rem;
		border-bottom: 1px dashed #9e9595;
	}
	.footer{
		width: 100%;
		position:fixed;
		bottom: 0;
		height: 0.4rem;
		font-size: 0.24rem;
		background: #fff;
		color: #e5125a;
		text-indent: 
	}
	.footer>span{
		position: absolute;
		right: 0;
		width: 0.9rem;
		height: 100%;
		text-align: center;
		background:#e5125a;
		color: #fff; 
	}
	.main_first{
		width: 100%;height: 0.5rem;
		font-size: 0.2rem;
	}
	.main_second{
		width: 100%;
		display: flex;
		flex: 1
	}
	.main_second>div:nth-of-type(1){
		width: 1rem;
		height: 1.2rem;
		padding:  0.1rem;
	}
	.main_second>div:nth-of-type(1)>img{
		display: block;
		width: 100%;
		height:100%;
	}
	.main_second>div:nth-of-type(2){
		margin-left: 0.1rem;
		flex: 1;
	}
	.car_name{
		height: 0.4rem;
		font-size: 0.16rem;
		line-height: 0.4rem;
		white-space: pre-wrap;
		overflow: hidden;
		text-overflow: ellipsis;	
	}
	.car_price{
		height: 0.4rem;
		font-size: 0.16rem;
		line-height: 0.4rem;
		color: #9e9595;
	}
	.car_number{
		height: 0.4rem;
		line-height: 0.4rem;
		display: flex;
		font-size: 0.2rem;
		align-items: center;

	}
	.car_number>span{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		font-size: 0.24rem;
		text-align: center;
		line-height: 0.25rem;
		border:1px solid lightgray;

	}
	.car_number>input{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		font-size: 0.24rem;
		text-align: center;
		line-height: 0.25rem;
		border:1px solid lightgray;

	}
	.car_number>span:last-of-type{
		position: absolute;
		right: 0.1rem;
	}
</style>