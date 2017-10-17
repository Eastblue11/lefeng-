<template>
    <div>
            <div class="d-buy" v-for='(item,index) in list' >
                <div><img :src='item.goods.image' style="height:1.69rem;width:2.03rem"/></div>
                <div class='d-buy-2'><span>{{item.goods&&item.goods.brandStoreName}}</span><span>{{item.goods&&item.goods.name}}</span></div>
            </div>
             <div class="d-buy" v-for='(item,index) in list1' >
                <div><img :src='item.goods.image' style="height:1.69rem;width:2.03rem"/></div>
                <div class='d-buy-2'><span>{{item.goods&&item.goods.brandStoreName}}</span><span>{{item.goods&&item.goods.name}}</span></div>
            </div>







    </div>


</template>
<script>
export default {
        data(){
            return{
                    list:[],
                    list1:[]
            }
        },
        methods:{
            getData:function(){
                        var $this=this;
                    $this.$http.get('http://w.lefeng.com/api/neptune/handpick_list/v1?stochastic=1&start=1').then(function(res){
                        console.log(res.data.data)
                        $this.list=res.data.data
                    })
             },
              getData1:function(){
                        var $this=this;
                    $this.$http.get('http://w.lefeng.com/api/neptune/handpick_list/v1?stochastic=1&start=2').then(function(res1){
                        console.log(res1.data.data)
                        $this.list1=res1.data.data
                    })
             }
        },
        created(){
            this.getData(),
               this.getData1()
        }
           
}
</script>
<style>
   .d-buy{
       width:2.07rem;
       height:2.54rem;
       float:left;
       border-right:0.01rem solid #ccc;
        border-top:0.01rem solid #ccc;
        box-sizing:border-box;
   }     
   .d-buy img{
       margin-left:0.02rem;
       margin-bottom:0.3rem;
   }
   .d-buy-2{display:inline-block;
       height:0.2rem;
       width:1.90rem;
       margin-left:0.08rem;
    line-height:0.2rem
   }
   .d-buy-2 span{
       display:inline-block; height:0.16rem
   }
   .d-buy-2 span:last-of-type{
       display:inline-block;
       width:1.3rem;
       overflow:hidden;
   }
    .d-buy-2 span:first-of-type{
        font-weight:bold;
        margin-right:0.1rem
    }


</style>


