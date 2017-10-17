<template>
	<div>
		
		<homecomponentComponent  :message='parentMsg'></homecomponentComponent>
		
	</div>
</template>
<script >
	// 引入组件
	import homecomponentComponent from '../components/homecomponent-component'
	
	export default{
		
		data:function(){
			return{
				parentMsg:7
			
			}
		},
		methods:{
			
		},
		components:{
			homecomponentComponent
		},

	}
</script>
<style>
.cartbutton{
	width:0.328rem;
	height:0.328rem;
	background:red;
}
</style>
