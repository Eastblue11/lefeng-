import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/store"


import VueLazyload from 'vue-lazyload'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource';//vue-resource使用$http.get
Vue.use(VueResource)//使用VueResource插件


Vue.use(VueLazyload)//使用Vuelazyload插件
// 配置懒加载环境
Vue.use(VueLazyload,{
	error:'static/error.png',//请求失败后现实的图片
	loading:'static/loading.gif',//加载的过渡效果
	try:10,//加载的图片数量
	// listenEvents: [ 'scroll' ]
})

Vue.use(VueAwesomeSwiper)//使用轮播图
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
