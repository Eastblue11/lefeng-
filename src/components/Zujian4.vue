<template>
<div>
	 <div class="lazyload-img-wraper loaded" v-for="(item,index) in list1">		
		<img v-lazy="item.brandImage" width="100%" height="200">
		 <p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p> 		
	</div> 
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list2">		
		<img v-lazy="item.brandImage" width="100%" height="200">
		 <p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p> 		
	</div> 
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list3">		
		<img v-lazy="item.brandImage" width="100%" height="200">
		 <p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p> 		
	</div> 
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list4">		
		<img v-lazy="item.brandImage" width="100%" height="200">
		 <p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p> 		
	</div>
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list5">		
		<img v-lazy="item.brandImage" width="100%" height="200">
		 <p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p> 		
	</div>
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list6">		
		<img v-lazy="item.brandImage" width="100%" height="200">
		 <p>{{item.pms}}</p>
		<p>
		<span>{{item.agio}}</span>
		{{item.name}}
		</p> 		
	</div>
	<div class="lazyload-img-wraper loaded" v-for="(item,index) in list7">		
		<img v-lazy="item.brandImage" >
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
   	  list1:[],
   	  list2:[],
   	  list3:[],
   	  list4:[],
   	  list5:[],
   	  list6:[],
   	  list7:[]
    }
  },
  methods:{
		getDate:function(){
		var me=this
	this.$http.get("../../static/home3.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list1=res.data.data

	});
	this.$http.get("../../static/home4.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list2=res.data.data

	});
	this.$http.get("../../static/home5.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list3=res.data.data

	});
	this.$http.get("../../static/home6.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list4=res.data.data

	});
	this.$http.get("../../static/home7.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list5=res.data.data

	});
	this.$http.get("../../static/home8.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list6=res.data.data

	});
	this.$http.get("../../static/home9.json").then(function(res){
		/*console.log(res)*/
		/*console.log(res.data.data);*/
		me.list7=res.data.data

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