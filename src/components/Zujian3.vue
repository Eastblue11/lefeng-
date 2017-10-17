<template>
<div>
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list1">		
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
   	  list1:[]
    }
  },
  methods:{
		getDate:function(){
		var me=this
	this.$http.get("../../static/home2.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list1=res.data.data

	})
	}
  },
  created(){
		this.getDate();
		}
}
</script>
<style >

</style>