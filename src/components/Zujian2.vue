<template>
<div>
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in lists">		
		<img v-lazy="item.brandImage" width="100%" height="182">
		<p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p>		
	</div>
</div>
    
</template>

<script>
export default {
  data () {
    return {
   	  lists:[]
    }
  },
  methods:{
		getDate:function(){
		var me=this
	this.$http.get("../../static/home1.json").then(function(res){
		/*console.log(res)
		console.log(res.data.data);*/
		me.lists=res.data.data

	})
	}
  },
  created(){
		this.getDate();
		}
}
</script>
<style >
.lazyload-img-wraper{
		width: 100%;
		position: relative;		
	}
	.lazyload-img-wraper>img{
		display: block;
		width: 100%;
		height: 1.82rem;
	}
	.lazyload-img-wraper>p:nth-of-type(1){
		width: 100%;height:0.22rem;font-size: 0.14rem;color: #fff;line-height: 0.22rem;background-color: rgba(0,0,0,.6);position: absolute;bottom: 0.3rem;padding-left: 0.1rem;font-weight: 700;
	}
	.lazyload-img-wraper>p:nth-of-type(2){
		color: #4c4c4c;height: 0.31rem;font-size: 0.13rem;display: flex;align-items: center;
	}
	.lazyload-img-wraper>p:nth-of-type(2)>span{
		display: block;height: 0.16rem;color: #fb4f89;font-size: 0.14rem;line-height: 0.16rem;padding-left: 0.1rem;padding-right: 0.1rem;
	}
</style>