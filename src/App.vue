<template>
  <div id="app">
    <router-view></router-view>
      <ul class="tab" v-show="isshow">
        <a @click="abcshow(false)">     
            <router-link tag="li" to='/moda'>
              <img :src="list2[0] && list2[0].filename">
            </router-link>
        </a>
        <a @click="abcshow(false)">
            <router-link tag="li" to='/quangou'>
            <!-- <img :src="imglist[1]"> -->
              <img :src="list2[1] && list2[1].filename">
            </router-link>
        </a>
        <a @click="abcshow(false)">
            <router-link tag="li" to='/mami'>
              <img :src="list2[2] && list2[2].filename">
            </router-link>
        </a>
        <a @click="abcshow(false)">
            <router-link tag="li" to='/youli'>
              <img :src="list2[3] && list2[3].filename">
            </router-link>
        </a> 
      </ul>
       <a v-show="isshow2" @click="abcshow1(false)">
          <router-link to='/cart'>
            <div class="gouwuche">
              <span></span>
            </div>
          </router-link> 
      </a>
      <div class="to_dingbu" @click="dingbu" :class="{db:flag}">
        
      </div>
  </div>
</template>

<script>
//设置html的字体大小
    (function(window){
      //获取页面宽度
      var winW =document.documentElement.clientWidth ||document.body.clientWidth;
      //根据页面宽度设置html字体大小
      document.documentElement.style.fontSize =winW / 4.14 + "px";
      //当页面大小发生改变,重新修正rem为新窗口尺寸的3.75分之一
      window.onresize =function(){
        document.documentElement.style.fontSize =(document.documentElement.clientWidth ||document.body.clientWidth) /4.14 + "px";
          }
        })(window);
export default {
  data(){
    return {
      list2:[],
      imglist:[],
      flag:""
    }
  },
  methods:{
    menu:function(){
        this.scroll=document.body.scrollTop
        if(this.scroll>400){
          this.flag=true         
        }else if(this.scroll==0){
          this.flag=false
        }
      },
    abcshow:function(isshow){
      this.$store.dispatch('isshow', isshow);
    },
    abcshow1:function(isshow){
      this.$store.dispatch('isshow2', isshow);
      this.abcshow()
    },
    dingbu:function(){
        document.body.scrollTop = 0
      },
    getDate:function(){

      var me=this;
      this.$http.get("../../static/lunbo.json").then(function(res){
        /*console.log(res.data.data);
        console.log(res.data.data[496]);*/
        me.list2=res.data.data[496];

    /*    for(var n in me.list2){
           me.imglist.push(me.list2[n].filename)
        }   */    
         /*console.log(me.imglist);*/


      })
    }
    
  },
  computed:{
      isshow:function(){
        return this.$store.getters.getisshow;
      },
      isshow2:function(){
        return this.$store.getters.getisshow2;
      }
      
    },
  created(){
    this.getDate()
   window.addEventListener("scroll",this.menu)
  }
}
</script>

<style>
*{
  padding:0;
  margin:0
}
.tab{
  list-style: none;
  display: flex;
  align-items: center;
  position: absolute;
  line-height: 0.46rem;
  background-color: #ffffff;
  opacity: 1;
  top:2.1189rem;
  left:0;
  right:0;
}
.tab>a{width:25%;
  display: flex;
}
.tab>a>li{
  width: 100%;
  text-align: center;
  font-size: 0.16rem;
  border-bottom: 1px solid #dcdcdc;
}
.tab>a>li>img{
  display: block;
  width: 100%;
  height: 1.093rem;
}
.gouwuche{
  position: fixed;
  bottom: 0.5rem;
  left: 0.2rem;
  width: 0.5191rem;
  height: 0.4691rem;
  background-color: rgba(0,0,0,.9);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .06rem .1rem;
  border-radius: 0.03rem;
 
}
.gouwuche>span{
  display: block;
  width: 0.3006rem;
  height: 0.3389rem;
  background-image: url("../src/images/tu3.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}
.to_dingbu{
  position: fixed;
  bottom: 0.5rem;
  right: 0.2rem;
  width: 0.4919rem;
  height: 0.4919rem;
  border-radius: 50%;
  background-image: url("./images/tu6.png");
  background-color: #000;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  opacity: 0.6;
  display: none;
}
.db{
  display: block;
}
</style>
