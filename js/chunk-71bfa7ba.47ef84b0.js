(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71bfa7ba"],{"05d0":function(e,t,i){e.exports=i.p+"img/gallery_6.0703efa6.jpg"},"0675":function(e,t,i){e.exports=i.p+"img/gallery_3.c483e437.jpg"},"0a8a":function(e,t,i){e.exports=i.p+"img/gallery_4.bd144e4b.jpg"},"0ef4":function(e,t,i){e.exports=i.p+"img/gallery_5.460c7325.jpg"},"13a7":function(e,t,i){e.exports=i.p+"img/gallery_1.cb3c313c.jpg"},1975:function(e,t,i){e.exports=i.p+"img/ural.14e73b38.jpg"},"197c":function(e,t,i){e.exports=i.p+"img/photosession.ac7f38c9.jpg"},"1ebc":function(e,t,i){"use strict";t["a"]={data(){return{sliding:0,slider:null}},methods:{updateTrigger(e){setTimeout(()=>{this.sliding=e})},touchStart(e){let t=e.touches[0];this.x1=t.clientX},touchEnd(e){let t=e.changedTouches[0].clientX;t<this.x1&&(this.sliding=this.sliding+1),t>this.x1&&(this.sliding=this.sliding-1)}},mounted(){let e=document.querySelectorAll(".wrapper-slider")[this.sliderNumber];e.ontouchstart=e=>{this.touchStart(e)},e.ontouchend=e=>{this.touchEnd(e)},this.slider=e},unmounted(){this.slider.ontouchstart=null,this.slider.ontouchend=null}}},"1ffa":function(e,t,i){e.exports=i.p+"img/gallery_1.69b9a943.jpg"},"2acd":function(e,t,i){e.exports=i.p+"img/gallery_4.f3c9e78e.jpg"},"2cff":function(e,t,i){},"35ea":function(e,t,i){e.exports=i.p+"img/gallery_2.b9a5a776.jpg"},"371f":function(e,t,i){e.exports=i.p+"img/tracking.1ce33ecb.jpg"},"3b12":function(e,t,i){e.exports=i.p+"img/main_image.6365d802.jpg"},"3b73":function(e,t,i){"use strict";i("2cff")},4204:function(e,t,i){e.exports=i.p+"img/crimea.c8433518.jpg"},"42b9":function(e,t,i){e.exports=i.p+"img/gallery_4.f959ab8e.jpg"},"468c":function(e,t,i){e.exports=i.p+"img/gallery_5.30ca1fe1.jpg"},"46f3":function(e,t,i){e.exports=i.p+"img/about_me.c8aea47f.jpg"},4848:function(e,t,i){e.exports=i.p+"img/gallery_1.1e83f9c0.jpg"},"49d0":function(e,t,i){e.exports=i.p+"img/gallery_5.06c91e84.jpg"},"4dea":function(e,t,i){"use strict";var n=i("7a23");const r={class:"wrapper-slider"},l={class:"slider-footer"},a={class:"dots-group"},c=["onClick"];function o(e,t,i,o,s,g){const p=Object(n["resolveComponent"])("image-group");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(p,{data:i.data,current_index:s.current_index,onToggleSlide:g.toggleSlide,onOnMoveLeft:g.nextSlide,onOnMoveRight:g.prevSlide},null,8,["data","current_index","onToggleSlide","onOnMoveLeft","onOnMoveRight"]),Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",a,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(i.data,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.id,class:Object(n["normalizeClass"])(["slider-footer-dot",{"selected-slide":e.id===s.current_index+1}]),onClick:t=>g.selectSlide(e.id)},null,10,c))),128))])]),Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=(...e)=>g.prevSlide&&g.prevSlide(...e)),class:"btn-slider btn-slider-prev"}),Object(n["createElementVNode"])("button",{onClick:t[1]||(t[1]=(...e)=>g.nextSlide&&g.nextSlide(...e)),class:"btn-slider btn-slider-next"})])}const s=["src"];function g(e,t,r,l,a,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{style:Object(n["normalizeStyle"])({"margin-left":`-${c.getSlideMargin()}%`,width:r.data.length+"00%"}),class:"slider-group",onClick:t[0]||(t[0]=(...e)=>c.toggleSlide&&c.toggleSlide(...e))},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(r.data,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.id,class:"slide"},[Object(n["createElementVNode"])("img",{src:i("810b")("./"+e.img),alt:"Slide picture"},null,8,s)]))),128))],4)}var p={name:"ImageGroup",props:["data","current_index"],methods:{getSlideMargin(){return 100*this.current_index},toggleSlide(){this.$emit("toggleSlide")}}},d=(i("585a"),i("6b0d")),u=i.n(d);const b=u()(p,[["render",g],["__scopeId","data-v-702c1ca0"]]);var f=b,j={name:"AppSlider",props:["data","isAutoSlider","sliding"],watch:{sliding(e,t){t>e&&(this.prevSlide(),this.$emit("updateTrigger",e)),t<e&&(this.nextSlide(),this.$emit("updateTrigger",e))}},components:{ImageGroup:f},data(){return{interval:null,isPaused:!1,current_index:0,x1:null,xDiff:null}},methods:{selectSlide(e){this.current_index=e-1},prevSlide(){this.current_index>=1&&(this.current_index=this.current_index-1)},nextSlide(){this.current_index>=this.data.length-1?this.current_index=0:this.current_index=this.current_index+1},toggleSlide(){this.isPaused=!this.isPaused,!this.isPaused&&this.isAutoSlider?this.startSlide():this.stopSlide()},startSlide(){this.interval=setInterval(()=>{this.nextSlide()},3500)},stopSlide(){clearInterval(this.interval)}},created(){this.isAutoSlider&&this.startSlide()},beforeUnmount(){this.stopSlide()}};i("3b73");const m=u()(j,[["render",o],["__scopeId","data-v-48184564"]]);t["a"]=m},"585a":function(e,t,i){"use strict";i("9b4a")},"764b":function(e,t,i){e.exports=i.p+"img/gallery_3.a80fc7b3.jpg"},"7b26":function(e,t,i){e.exports=i.p+"img/gallery_4.6ab745df.jpg"},8032:function(e,t,i){e.exports=i.p+"img/gallery_2.cd85842f.jpg"},"810b":function(e,t,i){var n={"./about_me.jpg":"46f3","./bg_image.jpg":"bbb8","./crimea/gallery_1.jpg":"a348","./crimea/gallery_2.jpg":"8032","./crimea/gallery_3.jpg":"f860","./crimea/gallery_4.jpg":"7b26","./excursions/gallery_1.jpg":"1ffa","./excursions/gallery_2.jpg":"ab95","./excursions/gallery_3.jpg":"94e8","./excursions/gallery_4.jpg":"2acd","./excursions/gallery_5.jpg":"e84b","./home/crimea.jpg":"4204","./home/excursions.jpg":"db23","./home/photosession.jpg":"197c","./home/tracking.jpg":"371f","./home/ural.jpg":"1975","./main_image.jpg":"3b12","./photosession/gallery_1.jpg":"13a7","./photosession/gallery_2.jpg":"35ea","./photosession/gallery_3.jpg":"923b","./photosession/gallery_4.jpg":"ab86","./photosession/gallery_5.jpg":"468c","./photosession/gallery_6.jpg":"05d0","./tracking/gallery_1.jpg":"4848","./tracking/gallery_2.jpg":"bbbd","./tracking/gallery_3.jpg":"0675","./tracking/gallery_4.jpg":"0a8a","./tracking/gallery_5.jpg":"0ef4","./ural/gallery_1.jpg":"dfc8","./ural/gallery_2.jpg":"c5a7","./ural/gallery_3.jpg":"764b","./ural/gallery_4.jpg":"42b9","./ural/gallery_5.jpg":"49d0","./ural/gallery_6.jpg":"ae79"};function r(e){var t=l(e);return i(t)}function l(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id="810b"},"862b":function(e,t,i){"use strict";i.r(t);var n=i("7a23");const r=e=>(Object(n["pushScopeId"])("data-v-72fbe6bc"),e=e(),Object(n["popScopeId"])(),e),l={class:"app-page"},a=r(()=>Object(n["createElementVNode"])("h1",null,"Походы",-1)),c={class:"slider-wrap"},o=Object(n["createStaticVNode"])('<p data-v-72fbe6bc>💠 Скрипинские Кучуры - эта местность, буквально завалина монолитными глыбами кварцевого песчаника, их будто там раскидал огромный великан.</p><p data-v-72fbe6bc>Именно так, выглядела наша земля в период палеогена. Под воздействием ветра воды, солнца и холода за миллионы лет, каменные глыбы приобрели причудливые формы и с хорошей фантазией в них можно рассмотреть и того же самого великана, и его трон, и черепаху, и свинью и огромное кофейное зерно 👀</p><p data-v-72fbe6bc>А ещё главной особенностью Скрипинского урочища является неповторимый ландшафт и открывающиеся взору чумовой вид 🤗<br data-v-72fbe6bc>В этом месте таится особая энергетика, там люди заряжаются жизненной энергией на долгое время 😌</p><h3 data-v-72fbe6bc>️️Программа похода:</h3><ul class="point-list" data-v-72fbe6bc><li data-v-72fbe6bc>- Выезд в 9.30 от речпорта (кольцо).</li><li data-v-72fbe6bc>- Дорога 2 часа</li><li data-v-72fbe6bc>- Пеший поход около 8 километров</li><li data-v-72fbe6bc>- Перекус на середине маршрута</li><li data-v-72fbe6bc>- В конце маршрута горячий обед</li></ul>',5);function s(e,t,i,r,s,g){const p=Object(n["resolveComponent"])("app-slider");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[a,Object(n["createElementVNode"])("div",c,[Object(n["createVNode"])(p,{data:e.$store.getters.tracking,isAutoSlider:!1,sliding:e.sliding,onUpdateTrigger:e.updateTrigger,class:"slider"},null,8,["data","sliding","onUpdateTrigger"])]),o])}var g=i("4dea"),p=i("1ebc"),d={name:"ExcursionPage",mixins:[p["a"]],components:{AppSlider:g["a"]},data(){return{sliderNumber:0}}},u=(i("e7a1"),i("6b0d")),b=i.n(u);const f=b()(d,[["render",s],["__scopeId","data-v-72fbe6bc"]]);t["default"]=f},"923b":function(e,t,i){e.exports=i.p+"img/gallery_3.54fcbac9.jpg"},"94e8":function(e,t,i){e.exports=i.p+"img/gallery_3.a5203b91.jpg"},"9b4a":function(e,t,i){},a348:function(e,t,i){e.exports=i.p+"img/gallery_1.45afc3c1.jpg"},ab86:function(e,t,i){e.exports=i.p+"img/gallery_4.551da403.jpg"},ab95:function(e,t,i){e.exports=i.p+"img/gallery_2.125c018b.jpg"},ae79:function(e,t,i){e.exports=i.p+"img/gallery_6.302f97ff.jpg"},b487:function(e,t,i){},bbb8:function(e,t,i){e.exports=i.p+"img/bg_image.e40894eb.jpg"},bbbd:function(e,t,i){e.exports=i.p+"img/gallery_2.86b4036d.jpg"},c5a7:function(e,t,i){e.exports=i.p+"img/gallery_2.8604b655.jpg"},db23:function(e,t,i){e.exports=i.p+"img/excursions.94618b04.jpg"},dfc8:function(e,t,i){e.exports=i.p+"img/gallery_1.b69374a8.jpg"},e7a1:function(e,t,i){"use strict";i("b487")},e84b:function(e,t,i){e.exports=i.p+"img/gallery_5.cf6ac81e.jpg"},f860:function(e,t,i){e.exports=i.p+"img/gallery_3.cc5e6d40.jpg"}}]);
//# sourceMappingURL=chunk-71bfa7ba.47ef84b0.js.map