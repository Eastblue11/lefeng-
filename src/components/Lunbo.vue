<template>
	<div>
		<swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides">
                <img :src="slide.filename">
        	</swiper-slide>
        	<div class="swiper-pagination" slot="pagination"></div>
   </swiper>	
	</div>    
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

  data () {
    return {
   	 		swiperOption:{
              autoplay: 3500,
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
  	 getData:function(){
            this.$http.get('http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=414x736&appName=lefeng_android&version=4.1.1').then(function(res){
                // console.log(res.data);
                this.swiperSlides = res.data.data[478]
                // console.log(this.swiperSlides)
                
            })
        }
  },
   created () {
        this.getData();
    },
  components:{
        swiper,
        swiperSlide
    }
}
</script>
<style >
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
}
</style>