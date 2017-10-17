<template>
	<div>
		<!-- 顶部导航 -->
		<div class="navigation" @click="abcshow(true)">
			<router-link  tag="div" to='/' > <span ></span></router-link>膜么哒<span @click="clickmm"></span>
		</div>
		<!-- navlogo -->
		<div class="navlogo">
			<img src="http://b.appsimg.com/2016/12/30/4594/1483091044656.jpg">
		</div>
		<!-- 工具栏 -->
		
		<div class="button" @click="abcshow(false)">
			<div><i></i>价格</div>
			<div><i></i>销量</div>
			<div><i></i>筛选</div>
		
		</div>
		
		<!-- 组件 -->
		<homecomponent  v-on:child-say="listenToMyBoy"></homecomponent>
		<homecomponent1  v-on:child-say="listenToMyBoy"></homecomponent1>
		<homecomponent2 v-on:child-say="listenToMyBoy"></homecomponent2>
		<homecomponent3 v-on:child-say="listenToMyBoy"></homecomponent3>
		<homecomponent4 v-on:child-say="listenToMyBoy"></homecomponent4>
		<homecomponent5 v-on:child-say="listenToMyBoy"></homecomponent5>
		<homecomponent6 v-on:child-say="listenToMyBoy"></homecomponent6>
		<homecomponent7 v-on:child-say="listenToMyBoy"></homecomponent7>
		<homecomponent8 v-on:child-say="listenToMyBoy"></homecomponent8>
		<homecomponent9 v-on:child-say="listenToMyBoy"></homecomponent9>
		<homecomponent10 v-on:child-say="listenToMyBoy"></homecomponent10>
		<homecomponent11 v-on:child-say="listenToMyBoy"></homecomponent11>
		<homecomponent12 v-on:child-say="listenToMyBoy"></homecomponent12>
		<!-- foot -->
		<div class="foot">
			<div class="foot-cart">
				<a>首页</a>
				<a>购物车</a>
				<a>客户端</a>
			</div>
			<div class="foot-sig">
				<a>登录</a>
				<a>注册</a>
			</div>
			<div class="foot-tel">
				联系客服<a href="">400-000-1818</a>
			</div>
			<div class="foot-date">Copyright © 2008-2017 Lefeng.com All Rights Reserved</div>
		</div>
	</div>
</template>
<script >
	// 引入组件
	import homecomponent from '../components/homecomponent'
	import homecomponent1 from '../components/homecomponent01'
	import homecomponent2 from '../components/homecomponent02'
	import homecomponent3 from '../components/homecomponent03'
	import homecomponent4 from '../components/homecomponent04'
	import homecomponent5 from '../components/homecomponent05'
	import homecomponent6 from '../components/homecomponent06'
	import homecomponent7 from '../components/homecomponent07'
	import homecomponent8 from '../components/homecomponent08'
	import homecomponent9 from '../components/homecomponent09'
	import homecomponent10 from '../components/homecomponent10'
	import homecomponent11 from '../components/homecomponent11'
	import homecomponent12 from '../components/homecomponent12'
	export default{
		
		data:function(){
			return{
				ste:"asd",childWords:0
			}
		},
		methods:{
			clickmm:function(){
				this.$router.push({path:'/',query:{}})
			},
			abcshow:function(isshow){
				
				this.$store.dispatch("isshow",isshow)
			},
			abcshow1:function(isshow){
				
				this.$store.dispatch("isshow2",isshow)
			},
			clickmycart:function(){
			
			this.$router.push({path: '/Cart',query:{}});
		},
		 listenToMyBoy: function (somedata){
              this.childWords=somedata
            }
		},
		components:{
			homecomponent,
			homecomponent1,
			homecomponent2,
			homecomponent3,
			homecomponent4,
			homecomponent5,
			homecomponent6,
			homecomponent7,
			homecomponent8,
			homecomponent9,
			homecomponent10,
			homecomponent11,
			homecomponent12
			
		},

	}
</script>
<style >
	#app>div:nth-of-type(1)>.navigation{
		width:100%;
		height:0.4809rem;
		font-size:0.164rem;
		text-align:center;
		line-height:0.4709rem;
		color:#333;
		font-weight: inherit;
   		font-style: inherit;
    	/*font-family: inherit;*/
    	background:url(../images/rep.gif)repeat-x;
    	background-size:100% 0.4809rem;
	}
	#app>div:nth-of-type(1)>.navigation>.router-link-active>span{
		float:left;
		width:0.4809rem;
		height:0.4809rem;
		font-size:0.1968rem;
		background:url(../images/left.gif)no-repeat;
		background-position: center;
		background-size:0.12rem 0.19rem;
	}
	#app>div:nth-of-type(1)>.navigation>span{
		float:right;
		width:0.4863rem;
		height:0.4709rem;
		background:url(../images/right.png)no-repeat;
		background-position: center;
		background-size:0.2459rem;
	}
	/*左手势头标*/
	#app>div:nth-of-type(1)>.navigation>.router-link-exact-active:before {
   /* content: "\E601";*/
}
	/*navlogo样式*/
	.navlogo{
		width:100%;
		height:1.83rem;

	}
	.navlogo>img{
		width:100%;
		height:1.83rem;
	}

/*工具栏*/
.button{
	width:100%;
	height:0.4472rem;
	font-size:0;
}
.button>div{
	float:left;
	width:33.333%;
	height:0.4472rem;
	font-size:0.142133rem;
	color:#333;
	text-align: center;
	line-height:0.4472rem;
	box-sizing: border-box;
}
.button>div>i{
	display:inline-block;
	width:0.153rem;
	height:0.1202rem;
	vertical-align:middle;
	margin-right:0.04373rem;
}
.button>div:nth-of-type(2){
	border-left:1px solid #e4e4e4;
	border-right:1px solid #e4e4e4;
}
.button>div:nth-of-type(1)>i{
	background:url(data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAYAAAAUnx+bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRFNjFENDhCOURBODExRTU5NzBCRjRDQUU0RTgzQTZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRFNjFENDhDOURBODExRTU5NzBCRjRDQUU0RTgzQTZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEU2MUQ0ODk5REE4MTFFNTk3MEJGNENBRTRFODNBNkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEU2MUQ0OEE5REE4MTFFNTk3MEJGNENBRTRFODNBNkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KRZaNAAAD1klEQVR42uyaS2gTURSGz0yDi7pQEF34QAQXgrgQWhDRoEUFxfcjBVFBQVeKQq0LBUVBxFJEsUVw48IXiI9WWxVBhbhpbTcideVGqbpQhC5sRSzxnN4TncYkvUnm/jF1DvydaSa5/z1fJvfOmbleirbRGLGM1cCqZw2OvJK6NbJJJpPp96R068mfeDyetaHe3l6yiOWsA6ztrO/yQk1NTWYbo/yCx8P2Iy/xl186/2wRs4DZyapmffvdoLuQ5DrUb6gS/XxLmIgIJlexfn4eszTMQXByFe3nW5itBSe3rpL9YhYwnwOTq3g/P4IZbvgRzPCBZhtTXCZXB4YJ9ROgBzNgPnM8KTQCYcL9fK0Q2kEwJbawHoNgwv1i+s1tJFyI3+rx6hfLV5dqHVtwBGr8rFFirV/U57LV+8X65ePig764Fax7wLJyKautHH4xEMx2Te4GYHiR5B6xJrJusjYg/XwgTBnLzgGTE79WtJ8PhCkTQxKY3CbWE7SfP05gxsEwc/r54wTmQzDMnH5hA135P8N0AbQNCJPAMK38wgaKhElgmFZ+YQNFwiQwTCu/sIEiYRIYppVfWJWSR9j4Z/1i5NXbtDO6Qf1MvIAe9bw8/Ge/p6egBCzen78xz4N9QV6KEtN5e4XMnW1Xtf1PMvdadytYmB/rY21tLexUloQus1YBfMTjmg7sSL865Nggk9IS3Z+tp74LzVGPRWXwIzTQLt2/4GiwlzabdL+rDH5woPtZX8jcpzzlwOMIS5b4DZBZ5Yb2gwN9S2apogzkx1iJENuXB3+nWcOsHTwh9SH9WH3lAEo6Ix7Sn4vMwAtDaHs+6yqrSsAxzI7AMed+ZJ7FU7mASrTqjC/1+H3WtBLanaI3SiaxrrPOZnkP2g8OlHTMkdJxJpmHahOKaFPOEHmUOpfVzdqX571oPzjQH6ytrHesxaxLRbR5Xq/9+rWtfOsv0X5woBKfdXCXju3Rsc429uosPqTJ9Vt8Bu0HByrxmrWTzGL9ZjJ34scKKe1bAol2F9APtB8cqMRd1smMMSpXSNVzW8fAJp0YCg20Hxwo6YX3HdZk1gOdRTOjWo9N1UuVoyX0B+0HByo/wV2sV6x5ZFZ+VGWUeXLtt4D1Ri+mh0voD9oPDpR0slivk8ca1pnAsROszayvZJa8DITQJ7QfHKjEezLrLCUaA68f121CS8qwAu0HByrxIsedHYmnDvqG9oMDjSICGgGNgEYRAXUahT7G/cCaQWaFSHrG/eSwf2g/+BnarFtZhdap+y5v5qL94GfoRdYsMgsIfP2/xWH/0H4lxy8BBgASCm5zCX5t4gAAAABJRU5ErkJggg==) no-repeat;
		background-size:0.4592rem 0.251467rem;
		background-position-x:-0.153067rem;
		background-position-y:0px;
}
.button>div:nth-of-type(2)>i{
		background:url(data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAYAAAAUnx+bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRFNjFENDhCOURBODExRTU5NzBCRjRDQUU0RTgzQTZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRFNjFENDhDOURBODExRTU5NzBCRjRDQUU0RTgzQTZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEU2MUQ0ODk5REE4MTFFNTk3MEJGNENBRTRFODNBNkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEU2MUQ0OEE5REE4MTFFNTk3MEJGNENBRTRFODNBNkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KRZaNAAAD1klEQVR42uyaS2gTURSGz0yDi7pQEF34QAQXgrgQWhDRoEUFxfcjBVFBQVeKQq0LBUVBxFJEsUVw48IXiI9WWxVBhbhpbTcideVGqbpQhC5sRSzxnN4TncYkvUnm/jF1DvydaSa5/z1fJvfOmbleirbRGLGM1cCqZw2OvJK6NbJJJpPp96R068mfeDyetaHe3l6yiOWsA6ztrO/yQk1NTWYbo/yCx8P2Iy/xl186/2wRs4DZyapmffvdoLuQ5DrUb6gS/XxLmIgIJlexfn4eszTMQXByFe3nW5itBSe3rpL9YhYwnwOTq3g/P4IZbvgRzPCBZhtTXCZXB4YJ9ROgBzNgPnM8KTQCYcL9fK0Q2kEwJbawHoNgwv1i+s1tJFyI3+rx6hfLV5dqHVtwBGr8rFFirV/U57LV+8X65ePig764Fax7wLJyKautHH4xEMx2Te4GYHiR5B6xJrJusjYg/XwgTBnLzgGTE79WtJ8PhCkTQxKY3CbWE7SfP05gxsEwc/r54wTmQzDMnH5hA135P8N0AbQNCJPAMK38wgaKhElgmFZ+YQNFwiQwTCu/sIEiYRIYppVfWJWSR9j4Z/1i5NXbtDO6Qf1MvIAe9bw8/Ge/p6egBCzen78xz4N9QV6KEtN5e4XMnW1Xtf1PMvdadytYmB/rY21tLexUloQus1YBfMTjmg7sSL865Nggk9IS3Z+tp74LzVGPRWXwIzTQLt2/4GiwlzabdL+rDH5woPtZX8jcpzzlwOMIS5b4DZBZ5Yb2gwN9S2apogzkx1iJENuXB3+nWcOsHTwh9SH9WH3lAEo6Ix7Sn4vMwAtDaHs+6yqrSsAxzI7AMed+ZJ7FU7mASrTqjC/1+H3WtBLanaI3SiaxrrPOZnkP2g8OlHTMkdJxJpmHahOKaFPOEHmUOpfVzdqX571oPzjQH6ytrHesxaxLRbR5Xq/9+rWtfOsv0X5woBKfdXCXju3Rsc429uosPqTJ9Vt8Bu0HByrxmrWTzGL9ZjJ34scKKe1bAol2F9APtB8cqMRd1smMMSpXSNVzW8fAJp0YCg20Hxwo6YX3HdZk1gOdRTOjWo9N1UuVoyX0B+0HByo/wV2sV6x5ZFZ+VGWUeXLtt4D1Ri+mh0voD9oPDpR0slivk8ca1pnAsROszayvZJa8DITQJ7QfHKjEezLrLCUaA68f121CS8qwAu0HByrxIsedHYmnDvqG9oMDjSICGgGNgEYRAXUahT7G/cCaQWaFSHrG/eSwf2g/+BnarFtZhdap+y5v5qL94GfoRdYsMgsIfP2/xWH/0H4lxy8BBgASCm5zCX5t4gAAAABJRU5ErkJggg==) no-repeat;
			background-size:0.4592rem 0.251467rem;
			background-position-x:-0.153067rem;
			background-position-y:0px;
}
.button>div:nth-of-type(3)>i{
		background:url(data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAA0CAYAAAAUnx+bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRFNjFENDhCOURBODExRTU5NzBCRjRDQUU0RTgzQTZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRFNjFENDhDOURBODExRTU5NzBCRjRDQUU0RTgzQTZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEU2MUQ0ODk5REE4MTFFNTk3MEJGNENBRTRFODNBNkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEU2MUQ0OEE5REE4MTFFNTk3MEJGNENBRTRFODNBNkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KRZaNAAAD1klEQVR42uyaS2gTURSGz0yDi7pQEF34QAQXgrgQWhDRoEUFxfcjBVFBQVeKQq0LBUVBxFJEsUVw48IXiI9WWxVBhbhpbTcideVGqbpQhC5sRSzxnN4TncYkvUnm/jF1DvydaSa5/z1fJvfOmbleirbRGLGM1cCqZw2OvJK6NbJJJpPp96R068mfeDyetaHe3l6yiOWsA6ztrO/yQk1NTWYbo/yCx8P2Iy/xl186/2wRs4DZyapmffvdoLuQ5DrUb6gS/XxLmIgIJlexfn4eszTMQXByFe3nW5itBSe3rpL9YhYwnwOTq3g/P4IZbvgRzPCBZhtTXCZXB4YJ9ROgBzNgPnM8KTQCYcL9fK0Q2kEwJbawHoNgwv1i+s1tJFyI3+rx6hfLV5dqHVtwBGr8rFFirV/U57LV+8X65ePig764Fax7wLJyKautHH4xEMx2Te4GYHiR5B6xJrJusjYg/XwgTBnLzgGTE79WtJ8PhCkTQxKY3CbWE7SfP05gxsEwc/r54wTmQzDMnH5hA135P8N0AbQNCJPAMK38wgaKhElgmFZ+YQNFwiQwTCu/sIEiYRIYppVfWJWSR9j4Z/1i5NXbtDO6Qf1MvIAe9bw8/Ge/p6egBCzen78xz4N9QV6KEtN5e4XMnW1Xtf1PMvdadytYmB/rY21tLexUloQus1YBfMTjmg7sSL865Nggk9IS3Z+tp74LzVGPRWXwIzTQLt2/4GiwlzabdL+rDH5woPtZX8jcpzzlwOMIS5b4DZBZ5Yb2gwN9S2apogzkx1iJENuXB3+nWcOsHTwh9SH9WH3lAEo6Ix7Sn4vMwAtDaHs+6yqrSsAxzI7AMed+ZJ7FU7mASrTqjC/1+H3WtBLanaI3SiaxrrPOZnkP2g8OlHTMkdJxJpmHahOKaFPOEHmUOpfVzdqX571oPzjQH6ytrHesxaxLRbR5Xq/9+rWtfOsv0X5woBKfdXCXju3Rsc429uosPqTJ9Vt8Bu0HByrxmrWTzGL9ZjJ34scKKe1bAol2F9APtB8cqMRd1smMMSpXSNVzW8fAJp0YCg20Hxwo6YX3HdZk1gOdRTOjWo9N1UuVoyX0B+0HByo/wV2sV6x5ZFZ+VGWUeXLtt4D1Ri+mh0voD9oPDpR0slivk8ca1pnAsROszayvZJa8DITQJ7QfHKjEezLrLCUaA68f121CS8qwAu0HByrxIsedHYmnDvqG9oMDjSICGgGNgEYRAXUahT7G/cCaQWaFSHrG/eSwf2g/+BnarFtZhdap+y5v5qL94GfoRdYsMgsIfP2/xWH/0H4lxy8BBgASCm5zCX5t4gAAAABJRU5ErkJggg==) no-repeat;
			background-size:0.4592rem 0.251467rem;
			background-position-x:-0.15833rem;
			background-position-y:-0.120267rem;
}


	/*组件*/
		.commodity{
		width:50%;
		height:3.0305rem;
		padding:0.10933rem;
		box-sizing: border-box;
		float:left;
		font-size:0;
		border: 1px solid rgba(0,0,0,.12);
	}
	.commoditymap{
		width:1.6945rem;
		height:2.0336rem;
		margin:0 0.07344rem;
	}
	.commoditymap>img{
		width:1.6945rem;
		height:2.0336rem;
	}
	.commodityprice{
		width:1.8416rem;
		height:0.7039rem;
		padding-top:0.1px;
	}
	.commpadding{
		width:1005;
		height:0.1639rem;
		margin-top:0.05467rem;
	}
	.comm-name,.comm-price{
		width:100%;
		height:0.27rem;
		line-height: 0.27rem;
		color:#4d4d4d;
		font-size: 0.12rem;
		overflow: hidden;
	}
	.comm-name>span{
		color:rgb(51, 51, 51);
		font-size:0.12rem;
		font-weight:bold;
		margin-right:0.0164rem;
	}
	.comm-price>span{
		color:rgb(51, 51, 51);
		font-size:0.27rem;
		margin-right:0.10933rem;
	}
	.comm-price>span>label{
		color:rgb(51, 51, 51);
		font-size:0.16rem;
		
	}
	.comm-price>del{
		font-size:0.142133rem;
		color:#999;
	}
	.comm-cart{
		width:0.328rem;
		height:0.328rem;
		float:right;
		background:url(data:images/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAyVBMVEUAAAD/gar/hKr/hKz/gar/////hKz/gav/gKr/h63/m7b/gKv/gKv/gar/gav/jK//gKr/gKr/gqv/gqv/gKr/gKv/gav/gav/gqz/gqv/hKz/g63/hKz/i63/gar/gKr/gKv/gKv/gKv/gav/gqv/g6z/g6v/haz/hqz/trb/gqz/gar/gav/hLD/gqv/gKr/8/f/0uH/tc7/gqv/4+3/w9b/scv/ocD/mrv/kLT/ydv/6/L/6vH/3Of/2OT/vNL/qMX/krb/jLJiP+PHAAAAL3RSTlMASzY09gEm+/IZB4PTy2kO5N3Xwbezd29jWD8vHxTprZ2YkX5RRDoqIwPupoodX4kG7iAAAAInSURBVFjD7djZbuJAFATQMmCMbcK+DTthT0I6xIEEkln//6NGFwdpEFiuRj0vMz7PraLdt9QYkEgk/lN2NytWHsxx8yoU9AePRZhxq/6Q83swYahO9KcwoJM7TQ3GMKA3+SJa41omjPVhUnEc7roAoxY3EprJwqjiIbUKs3olSU3BLEtC72GYHEDOhlkF2WoaZs0ltJEipLseSEtH5q84FX8BSkUWK5bjU9utK6XuFK/mkZehozTcs+Pfrwn7519KtBFrKuvWT5T3V1lcR6yurNs8kd7kBoo/VVvu1S0bupctdLhOvbKh3yR0xnVqx4auydAH+apiQ79LaI/s1IvGoEow26kXtv0rjU5tZa0FmOzUV8ks2SDk2U597CS0CcaA7NT7m2Tml2A8yFpiSD9lnTMDpUV1ahMo0QKnHd+pj81O883LVTKp50jbH4fDpId07BSnb4GXpyKDYREaBkRkZpTFEd+pTKRcuXprneyS7hS9EZ1OPcKsoiMvCX/jfdJJg8YfasmFUV5ZUsuW4VEFSlT9iRWjA15TsYY6qQ6bugAvlSdDV9BgTwY5ItOHJtvtpGO4+GfNG6NmxGx7hdF4his0pFWZAi6w+jKj0RK6JuogaONM97MWjauuKlGL/I9I/5ex56jQHc5U1ae5bkePzS/jTO0Yqt3SevSN0Tj7PFY2Ez79hd14lXCGU2hLy5Vyc/HYXHmMkoUr2Fmriwiu1VkikUic+A0oSSO0LAB34wAAAABJRU5ErkJggg==);
		    background-size: contain;
		    background-repeat: no-repeat;
		    margin-top:-0.27rem;

	}

	/*foot*/
	.foot{
		float:left;
		width:100%;
		height:0.9438rem;
		font-size:0;
		margin-top:0.13667rem;
		box-sizing: border-box;
		padding:0.082rem  0.12027rem;
	}
	.foot-cart{
		display:inline-block;
		width:2.3397rem;
		height:0.26rem;
		text-align: center;
	}
	.foot-cart>a{
		font-size:0.142133rem;
		margin:0 0.05467rem;
	}
	.foot-sig{
		display:inline-block;
		width:1.5598rem;
		height:0.26rem;
		text-align: center;
	}
	.foot-sig>a{
		font-size:0.142133rem;
		margin:0 0.05467rem;
	}
	.foot-tel{
		width:3.89969rem;
		height:0.26rem;
		font-size:0.142133rem;
		text-align: center;
		line-height: 0.26rem;
		color:#e4e4e4;
	}
	.foot-tel>a{
		text-decoration: none;
		margin-left:0.082rem;
		color:#fc1159;
	}
	.foot-date{
		width:3.89969rem;
		height:0.26rem;
		font-size:0.12027rem;
		text-align: center;
		line-height: 0.26rem;
		color:#e4e4e4;
	}



	/*button定位*/
	button{
		width:33.333%;
		height:0.4472rem;
		position: fixed;
		top:2.31rem;
		left:0;
		opacity:0;


	}
.commcartbuttom{
	position: fixed;
	z-index:9;
	top:6.17rem;
	left:0.12rem;
	width:0.3389rem;
	height:0.3389rem;
	background:url(../images/cart.png)no-repeat #000;
	opacity:0.7;
    background-size:0.3006rem;
}
.commnumber{
	position:fixed;
	z-index:9;
	top:6.17rem;
	left:0.3rem;
	width:0.1745rem;
	height:0.1745rem;
	font-size:0.12067rem;
	background:#ff0056;
	border-radius:50%;
	line-height:0.1745rem;
	text-align: center;
	color:#fff; 

}

</style>