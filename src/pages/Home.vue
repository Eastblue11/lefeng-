<template>
	<div>
		<div id="header" :class="{scroll:flag}" @click="abcshow(false)">
			<span></span>
			<input type="text" name="" placeholder="防晒隔离" @click="sousuo_detial()" >
			<span  @click="abcshow(false)" ><li @click='admin()'></li></span>
		</div>
		<lunbo :class="{lun:flag}"></lunbo>
		<zujian6></zujian6>
		<zujian5></zujian5>
		<zujian1></zujian1>

		<zujian3></zujian3>
		<zujian2></zujian2>
		<zujian4></zujian4>	 
		
		
	</div>
</template>
<script >
	import zujian1 from "../components/Zujian1";
	import zujian2 from "../components/Zujian2";
	import zujian3 from "../components/Zujian3";
	import zujian4 from "../components/Zujian4";
	import zujian5 from "../components/Zujian5";
	import zujian6 from "../components/Zujian6";
	import lunbo   from "../components/Lunbo";

	export default{
		data(){
			return {
				flag:''
			}
		},
		methods:{
			abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow);
				this.abcshow2()
			},
			abcshow2:function(isshow){
				
				this.$store.dispatch("isshow2",isshow);
			},
			sousuo_detial:function(){
				this.$router.push({name:"Sousuo",prams:{}})
			},
			menu:function(){
				this.scroll=document.body.scrollTop
				if(this.scroll>400){
					this.flag=true					
				}
			},
			admin:function(){
					this.$router.push({path:'/admin',query:{}})
			}
		},	
		components:{
			zujian1,
			zujian2,
			zujian3,
			zujian4,
			zujian5,
			zujian6,
			lunbo
		}		
			// ajax请求数据 $http=axios
/*			getDate:function(){
				var me=this
			this.$http.get("../../static/home1.json").then(function(res){
				
				me.lists=res.data.data

			});
			this.$http.get("../../static/lunbo.json").then(function(res){
				
				console.log(res.data.data);
				me.list1=res.data.data;
				me.list2=res.data.data[693];
				// 轮播图
				me.list3=res.data.data[724];

			})
		}*/	
		,
		mounted(){
			window.addEventListener("scroll",this.menu)
		}				
	}
</script>
<style >
	*{
	padding:0;
	margin:0;
	box-sizing: border-box;
	}
	
	#header{

		background: #fc1158;
		width: 100%;
		height:0.479rem;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #d21e17;
		z-index: 100;
	}
	.scroll{
		position: fixed;
		top:0;

	}
	.lun{
		margin-top: 0.48rem
	}
	#header>span:nth-of-type(1){
		display: block;
		width: 0.6231rem;
		height: 0.2842rem;
		margin-left: 0.1rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAA0CAYAAABW3GwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDZBMDczRUY0QzgxMTFFNTkxOUZGNENCMDQ4Q0E5QUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDZBMDczRjA0QzgxMTFFNTkxOUZGNENCMDQ4Q0E5QUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENkEwNzNFRDRDODExMUU1OTE5RkY0Q0IwNDhDQTlBQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENkEwNzNFRTRDODExMUU1OTE5RkY0Q0IwNDhDQTlBQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PixnZMwAAAxSSURBVHja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);
	vertical-align: middle;
    background-size: cover;
    background-position: 50%
	}
	#header>input{
		width: 2.7189rem;
		height: 0.328rem;
		margin-left: 0.1rem;
		background:rgba(0,0,0,.2);
		border: none;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTE5MTJGOEFBNzlCMTFFNUIxMjlDQTY4OEFDRTdCOEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTE5MTJGOEJBNzlCMTFFNUIxMjlDQTY4OEFDRTdCOEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTkxMkY4OEE3OUIxMUU1QjEyOUNBNjg4QUNFN0I4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MTkxMkY4OUE3OUIxMUU1QjEyOUNBNjg4QUNFN0I4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk50i1MAAALzSURBVHjavJhdSBRRFMd3ditMY1NhoZAsCVeqhxSKPnxQi6APegkiKiiJoLSg8MEg8tGX3gqz6DmCIHqJil76oKAEE9FW+zCzWIIKiaLMdjen/4EzcLjszsydudOBH8ydYc78uffMvf97Ldu2Yz4iBTaAFrAerFGevwCD4AFff4+ZChLoQgqcAG9B3vaOHBgGB0ClR25fuD3cA0ZdxPxlSsUj0BZWoFVkiJPgLDij3P8BBsAImAI5vl8O6kAj2ATmi3d+gR7QB/ImhpiG5ZrSEzS0l8EWkPQoh13gepHePA8WmBjiC0riV2AnSGgkrQCHwBeRZw6cCivwMCiIpCOgIUT9NINPIt8saA0qsBYMimT016YN/IUkclrkvcs9rCUwDrqUmtttYopgOpWy2a4rsJLnLidusGhTAunHeiry39cVuFHpvVaD4hyOiG/MgGV+343z8uXEEBiPmQ+aP9/z9ULlm65BAtNKoq8RCJwEGdFOBxU4AeYiEPgbZIMKtJWlKaqYDfJSXFk7KyIUWCauCzoC34j2SpCISFyNs/yDdzoCX4p2E6iOQCC5nXohcEhH4IBob+ZkpmMtaODrHFs23wLHwGtu0/B28n1TsRgcBRa3n4s50ZfAadAv7h0E2wwK3Ae2ijb9lG26hrUGTIjlKMMOJ+wStw5kixjYn+ASqNPxg8eUJE/A8hDimsC4xyYrw07K8iOQLPlVJcFwgI0PfWwvmBJ5voHJEpssMsmPeUvhafnJGt1REpD7uALqwSIPW9UIbipb1AIPZzloBx9L9OYfcBEs8dp2VoN+xf47cRt0s6FtYWh72sPbzGK1dk7JT/XepzhtGVm2Z0mvffFJHzXkFlTD+13y7wD3XN6/BZZ61dMq0Ks4bq94yIWf8lGvZeA4GCuRq9vyeTazAqzm8xk6l6kFVbxskX/8wBMwTfqj4LPmXEkeoAN0iQmd4rRfgU5YfJJAi/88vpdnKzUTckJP8MFUL2gGz0C7rsD/Hv8EGAB6Mph+imHG+AAAAABJRU5ErkJggg==);
	background-repeat: no-repeat;
    background-position: 35%;
    background-size: 10%;
    padding-left: 1.2rem;
    border-radius: 5px;
    background-color: rgba(0,0,0,.2);
    outline: none;
    font-size:0.16rem;
	}
	::-webkit-input-placeholder{
		color: hsla(0,0%,100%,.7);
	}
	#header>span:nth-of-type(2){
		
		position: absolute;
		right: 0;
		/*background:yellow;*/
		width: 0.4809rem;
		height: 0.4809rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	#header>span:nth-of-type(2)>li{
		background:url("../images/tu1.png");
		background-repeat: no-repeat;
		background-size:0.27rem 0.24rem;
		background-position:0.0rem 0.045rem;
		position: absolute;
		display: inline-block;
		width: 0.2733rem;
		height: 0.28rem;	
	}
	

</style>