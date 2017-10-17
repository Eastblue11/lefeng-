<template>
    <div class='admin'>
            	<!-- 顶部导航 -->
		<div class="navigation" @click="abcshow(true)">
			<router-link to='/' ></router-link>登录<span @click='ad()'></span>
		</div>

            <div class='admin-1'>
               &nbsp;&nbsp;用户名： <input type='text' v-model="name"/><br>
                 &nbsp;&nbsp;密<font color="#fff">米</font>码： <input type='text' v-model="pas"/>
            </div>

            <div class='admin-2' @click="jiaohu">
                登录
            </div>

            <div class='admin-3'>
                <a>立即注册</a>
                <a>忘记密码</a>
            </div>
    </div>
</template>
<script>
export default {
        data:function(){
            return{
                name:'',
                pas:""
            }
        },
        methods:{
            abcshow:function(isshow){
                
                this.$store.dispatch("isshow",isshow);
                this.abcshow1(true)
            },
            abcshow1:function(isshow){
                
                this.$store.dispatch("isshow2",isshow)
            },
			ad:function(){
               
					this.$router.push({path:'/',query:{}})
			},
            jiaohu:function(){
                var falg=false;
        		this.$http.get('../../static/logon.json').then(function(res){
        			const str = res.bodyText
                    // console.log(typeof str)
                    const mystr = JSON.parse( str).data
                    // console.log(mystr)
                    // console.log(this.name)
                
                for(var i=0;i<mystr.length;i++){
                    if(this.name==mystr[i].name&&this.pas==mystr[i].pas){
                       
                       falg=true
                    }
                }
                if(falg){
                    this.$router.push({path:'/',query:{}})
                }else{
                    alert('用户名或密码有误')
                    document.getElementsByTagName('input')[0].value=""
                     document.getElementsByTagName('input')[1].value=""
                }
                
        	})
                this.abcshow(true) 
        }  
           
		}
       
}
</script>
<style>

	* {
		padding: 0;
		margin: 0;
	}
    html {
		font-size: 100px;
	}
	
	body {
		/*background-color: #c5ddf9;*/
		font-size: 0.12rem;
	}
.admin .navigation{
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
	.admin .navigation>.router-link-active{
		float:left;
		width:0.4809rem;
		height:0.4809rem;
		font-size:0.1968rem;
		background:url(../images/left.gif)no-repeat;
		background-position: center;
		background-size:0.12rem 0.19rem;
	}
	.admin .navigation>span{
		float:right;
		width:0.4863rem;
		height:0.4709rem;
		background:url(../images/right.png)no-repeat;
		background-position: center;
		background-size:0.2459rem;
	}
	
	.admin .p-header em {
		font-size: 0.2rem;
		display: inline-block;
		width: 80%;
	}
   
	.admin-1{  
        height:0.8rem;
        width:100%;
        margin-top:0.5rem;
    }
    .admin-1 input{
        /*font-size:0.12rem;*/
        padding-left:0.1rem;
        height:0.4rem;
        width:60%;
        margin-left:0.1rem;
        border:0.01rem solid #ccc;
        margin-bottom:0.2rem
        
    }
    .admin-2{
        font-size:0.2rem;
        color:white;
        height:0.5rem;
        width:3.8rem;
        margin-left:0.1rem;
        background-color:#ff0056;
        line-height:0.5rem;
        text-align:center;
        margin-top:0.5rem;
        border-radius:0.05rem;
        font-weight:bold;
        
    }
    .admin-3{
        font-size:0.14rem;color:#3195cb;
        margin-top:0.2rem;text-align:right;
        margin-right:0.3rem
    }




  
</style>


