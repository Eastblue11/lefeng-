<template>
<div>
	<!-- <div>
		<img v-lazy="list2[0]&&list2[0].sfilename" width="100%"> 
	</div> -->
	<!-- <div v-for="(item,index) in list3">
		<img v-lazy="item.sfilename" width="100%"> 
	</div> -->
	<div class="haitao" >
		<li v-for="(item,index) in list4">
		<img v-lazy="item.sfilename" width="100%">	
		</li>		 
	</div>
	<div class="feng_gou" v-for="(item,index) in list5">
		<div>
			<span>- {{item.pictitle}}-</span>
		</div>		
		<img v-lazy="item.filename">
	</div>
	<!-- 轮播图 -->


</div>

</template>

<script>
export default {
  data () {
    return {
   		list2:[],
		list3:[],
		list4:[],
		list5:[],
		list6:[]
    }
  },
  methods:{
	getDate:function(){
	var me=this
 this.$http.get("../../static/lunbo.json").then(function(res){
	
	/*console.log(res.data.data);*/
	me.list1=res.data.data;
	me.list2=res.data.data[693];
	// 轮播图
	me.list3=res.data.data[724];
	me.list4=res.data.data[725];
	me.list5=res.data.data[727];
	me.list6=res.data.data[728];
	me.list7=res.data.data[943];
	/*console.log(me.list4);*/


  })
   }
  },
  created(){
		this.getDate();
		}
}
</script>
<style >
.haitao>li{
	list-style: none;
}
.haitao>li>img{
	display: block;
	height: 100%;
}
.haitao>li:nth-of-type(2){
	margin-top: 0.1rem;
}
.haitao{
	padding:0.10993rem;
	border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
}

.feng_gou>div{
	background:#f1f1f1;
	width: 100%;
	height:0.3566rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.feng_gou>div>span{
	display: block;
	width: 0.7973rem;
	height: 0.16rem;
	color: #888;
	font-size: 0.14rem;
	text-align: center;
	line-height: 0.16rem;
}
.feng_gou>img{
	display: block;
	width: 100%;
	height: 1.0066rem;
}
</style>