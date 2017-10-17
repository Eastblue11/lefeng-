 <template>
<!-- id跳转 -->
	<!-- <div>
		<div class="jing_xuan"  >
			<div class="detail_name">
				&lt;{{list5.goods && list5.goods.name}}
			</div>				
			<div class="detail_image">
					<img v-lazy="list5.goods &&list5.goods.verticalImage">
			</div>
			<div class="detail_name1">
				{{list5.goods && list5.goods.name}}
			</div>
	    </div>
	</div> -->
<!-- item跳转 -->
	<div>
		<div class="jing_xuan"  >
			<div class="detail_name" @click="abcshow1(true)">
			
			<router-link to="/" >
			    <span @click="abcshow(true)">&lt;</span>	
			</router-link>
							
				{{item.goods&&item.goods.name}}
				<router-link to="/" >
					<span @click="abcshow(true)"></span>
				</router-link>				
			</div>				
			<div class="detail_image">
					<img v-lazy="item.goods&&item.goods.verticalImage">
			</div>
			<div class="detail_name1">
				{{item.goods&&item.goods.name}}
				<div class="detail_price">
					<span>￥</span>
					{{item.goods&&item.goods.vipshopPrice}}
					<span>￥{{item.goods&&item.goods.marketPrice}}</span>
					
				</div>
				<span></span>
			</div>
			<div class="detail_xinxi">
				<p><i>满减</i><span>满199减100上不封顶</span></p>
				<p><i>包邮</i><span>全场满99包邮</span></p>
			</div>
			<div class="detail_fotter">
				<router-link to="/cart">
				<i></i>	
				</router-link>				
				<span @click="addCart(item)">加入购物车</span>
			</div>

	    </div>
	</div>
	
</template>
<script >
	export default{
		data(){
			return {
				/*list5:[],*/
				item:[]
			}
		},
		methods:{
			   /* abcshow:function(isshow){
                this.$store.dispatch('isshow', isshow);
            },*/
            abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow)
			},
			abcshow1:function(isshow){
				
				this.$store.dispatch("isshow2",isshow)
			},

			addCart:function(item){
				this.$store.dispatch("addCart",item)
			}
		/*getDate:function(){
			var me =this;
			this.$http.get("http://w.lefeng.com/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid="+this.id).then(function(res){
			console.log(res)
			// console.log(res.data.data);
			me.list5=res.data.data
			//console.log(me.list5);
			//console.log(me.list5)
			})
			}*/
		},
		created(){
			this.item=this.$route.params.item;
			//this.getDate()
			// console.log(this.id)
		}
	}
</script>
<style >

	.detail_name{
		width: 100%;
		height: 0.4rem;
		font-size: 0.17rem;
		line-height: 0.4rem;
		text-align: center;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #333333;

	}
	.detail_name>a:nth-of-type(1)>span{
		position: absolute;
		left: 0;
		width: 0.3rem;
		height: 0.3rem;
		font-size: 0.3rem;
		text-align: center;
		line-height: 0.3rem;
		margin-top: 0.06rem;
	}
	.detail_name>a:nth-of-type(2)>span{
		position: absolute;
		right: 0.1rem;
		width: 0.2459rem;
		height: 0.2405rem;
		background-image: url("../images/tu4.png");
		background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	    margin-top: 0.08rem;
	}
	.detail_image{

		width: 100%;
		height: 2.46rem;
	}
	.detail_image>img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.detail_name1{
		padding: 0.11rem;
		font-size: 0.14rem;
		height: 0.9833rem;
		color: #929292;
		position: relative;
		border-bottom: 1px solid #f0f0f0;
	}
	.detail_price{
		position: absolute;
		bottom: 0.11rem;
		font-size: 0.24rem;
		color: #fc1159;
		display: flex;
		align-items:baseline;
	}
	.detail_price>span:nth-of-type(1){
		display: block;
		font-size: 0.13rem;
	}
	.detail_price>span:nth-of-type(2){
		display: block;
		font-size: 0.12rem;
		text-decoration: line-through;
		color:#929292; 
	}
	.detail_name1>span{
		position: absolute;
		text-indent: 0.11rem;
		top: 0.11rem;
		right: 0.11rem;
		width: 0.2733rem;
		height: 0.2733rem;
		background-image: url("../images/tu5.png");
		background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	}
	.detail_xinxi{
		padding: 0.11rem;
		height: 0.7577rem;

	}
	.detail_xinxi>p{
		height: 0.21rem;
		display: flex;
	}
	.detail_xinxi>p:nth-of-type(2){
		margin-top: 0.1rem;
	}
	.detail_xinxi>p>i{
		width: 0.4372rem;
		height: 0.21rem;
		background:#929292;
		color: #fff ;
		font-size: 0.13rem;
		border-radius: 0.02rem;
		font-style: normal;
		text-align: center;
		line-height: 0.21rem;
	}
	.detail_xinxi>p>span{
		display: block;
		height: 0.21rem;
		font-size: 0.12rem;
		margin-left: 0.1rem;
		color:#929292;
		line-height: 0.21rem;
	}
	.detail_fotter{
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 0.5464rem;
		display: flex;
		align-items: center;
		background: rgba(0,0,0,.7);
	}
	.detail_fotter>a>i{
		display: block;
		width: 0.3006rem;
		height: 0.3389rem;
		float: left;
		margin-left: 0.2rem;

		background-image: url("../images/tu3.png");
		background-repeat: no-repeat;
	    background-size: contain;
	    background-position: 50%;
	}


	.detail_fotter>span{
		position: absolute;
		right: 0;
		width: 1.0933rem;
		color:#fff;
		height:0.5464rem;
		text-align: center;
		line-height: 0.5464rem;
		background: #ff0056;
		font-size: 0.2rem;

	}

</style>
