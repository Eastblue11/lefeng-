import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const state={
	totalPrice:0,
	cartList:[],
	isshow:true,
	isshow2:true
}

const mutations={
	addCart:function(state,item){
		/*console.log(item.goods.brandId);*/
		// 检查数组中有没有此商品
		var _item=state.cartList.find(d => d.goods.gid === item.goods.gid)
		console.log(_item)
		if (_item) {
			/*console.log('--- yes ---');*/
			_item.goods.number++
		}else{
			/*console.log('----- no ----');*/
			item.goods["number"]=1;
			state.cartList.push(item)
		}
		console.log(item.goods.number);
		 /*console.log(state.cartList);*/
	},
	minus:function(state,item){
        //根据id查找索引
        var index = state.cartList.findIndex( d => d.goods.gid === item.goods.gid)       
        if(state.cartList[index].goods.number>=1){
            state.cartList[index].goods.number --
        }
        if(state.cartList[index].goods.number==0){
            state.cartList.splice(index,1);
        }
    },
    del:function(state,item){
    	// 点击删除按钮
    	 var index = state.cartList.findIndex( d => d.goods.gid === item.goods.gid)
    	 state.cartList.splice(index,1);
    },
    isshow:function(state,isshow){
    	state.isshow=isshow;
    },
    isshow2:function(state,isshow){
    	state.isshow2=isshow;
    }
}
const actions={
	// 调用mutations中的方法
	addCart:function({commit},item){
		commit("addCart",item)
	},
	minus:function({commit},item){
		commit("minus",item)
	},
	del:function({commit},item){
		commit("del",item)
	},
	isshow:function({commit}, isshow){
		commit('isshow', isshow)
	},
	isshow:function({commit}, isshow){
		commit('isshow', isshow)
	},
	isshow2:function({commit}, isshow){
		commit('isshow2', isshow)
	}
	
}
const getters={
	getList:function(){
		return state.cartList
		/*console.log(state.cartList)*/
	},
    getisshow:function(){
    	return state.isshow;
    },
    getisshow2:function(){
    	return state.isshow2;
    }
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})














