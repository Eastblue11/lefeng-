<template>
 <div class='data2'>
    
     <!--顶部菜单-->
		<div class="data2-header">
			<router-link to='/mami' @click="abcshow(false)">
				<span>
					<
				</span>
			</router-link>
			<em >{{list.goods&&list.goods.productName}}</em>
			<router-link to='/'>
				<i  @click="abcshow(true)"><img src="../images/p-1.png">	</i>
			</router-link>
		</div>

            <div>
            
            </div>

 	
<swiper :options="swiperOption">
            <swiper-slide v-for="(slide,index) in swiperSlides.largeImage" key="index">
                <img :src="slide">
        	</swiper-slide>
        	<div class="swiper-pagination" slot="pagination"></div>
 </swiper>		


 	<div class="buy">该用户还买了</div>


	 <buyToo></buyToo>

     
 </div>
</template>
<script>
import buyToo from '../components/buyToo'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	 components:{
		 	buyToo
		 },
    data:function(){
        return{
            id:'',
            list:{},
				swiperOption:{
              autoplay: 1000,
              setWrapperSize :true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              mousewheelControl : true,
              observeParents:true,
			},
			swiperSlides: []   
        }
    },
    methods:{
    	abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow)
			},
		
        getdata:function(){
            var $this = this;
			$this.$http.get('http://w.lefeng.com/api/neptune/goods/detail_with_stock/v1?needBrandInfo=true&gid='+this.id+'&brandId=800028767').then(function(res) {
			$this.list=res.data.data
			$this.swiperSlides=res.data.data.goods
             console.log($this.swiperSlides)
            })  
        }
       
    },
    created(){
        this.id = this.$route.query.id
    
        this.getdata()



    }
}
</script>
<style>
.swiper-container{
  height: 1.64rem;
}
.swiper-container img{
	display: block;
	width: 100%;
	height: 100%;
  -webkit-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  margin: 0 auto
}







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
	
	.data2-header {
        border-bottom:0.01rem solid #ccc;
		text-align: center;
		height: 0.4709rem;
		width: 100%;
		background-color: #FFFFFF;
		font-size: 0;
		line-height: 0.4709rem;
	}
	.data2-header span {
		vertical-align: top;
		display: inline-block;
		height: 0.4709rem;
		font-size: 0.3rem;
		width: 15%;
	}
	.data2-header i {
		display: inline-block;
		width: 15%;
		vertical-align: top;
	}
	.data2-header img {
		height: 0.25rem;
		width: 0.25rem;
		vertical-align: middle;
	}
	.data2-header em {
        display:inline-block;
        height:0.4708rem;
        overflow:hidden;
		font-size: 0.15rem;
		display: inline-block;
		width: 70%;
	}





.buy{
	height:0.5rem;
	background-color:#f6f6f6;
	font-size:0.15rem;
	font-weight:bold;
	line-height:0.5rem;
	padding-left:0.2rem
}











</style>


