(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6833d6"],{"05d0":function(e,t,i){e.exports=i.p+"img/gallery_6.0703efa6.jpg"},"0675":function(e,t,i){e.exports=i.p+"img/gallery_3.c483e437.jpg"},"0a8a":function(e,t,i){e.exports=i.p+"img/gallery_4.bd144e4b.jpg"},"0ef4":function(e,t,i){e.exports=i.p+"img/gallery_5.460c7325.jpg"},"13a7":function(e,t,i){e.exports=i.p+"img/gallery_1.cb3c313c.jpg"},1975:function(e,t,i){e.exports=i.p+"img/ural.14e73b38.jpg"},"197c":function(e,t,i){e.exports=i.p+"img/photosession.ac7f38c9.jpg"},"1c59":function(e,t,i){e.exports=i.p+"img/bg_image_mobile_3.a51a48c5.jpg"},"1ebc":function(e,t,i){"use strict";t["a"]={data(){return{sliding:0,slider:null}},methods:{updateTrigger(e){setTimeout(()=>{this.sliding=e})},touchStart(e){let t=e.touches[0];this.x1=t.clientX},touchEnd(e){let t=e.changedTouches[0].clientX;t<this.x1&&(this.sliding=this.sliding+1),t>this.x1&&(this.sliding=this.sliding-1)}},mounted(){let e=document.querySelectorAll(".wrapper-slider")[this.sliderNumber];e.ontouchstart=e=>{this.touchStart(e)},e.ontouchend=e=>{this.touchEnd(e)},this.slider=e},unmounted(){this.slider.ontouchstart=null,this.slider.ontouchend=null}}},"1ffa":function(e,t,i){e.exports=i.p+"img/gallery_1.69b9a943.jpg"},"25b0":function(e,t,i){e.exports=i.p+"img/bg_image_mobile_6.47e74264.jpg"},"2acd":function(e,t,i){e.exports=i.p+"img/gallery_4.f3c9e78e.jpg"},"2b3b":function(e,t,i){},"2cf8":function(e,t,i){"use strict";i("2b3b")},"2cff":function(e,t,i){},"35ea":function(e,t,i){e.exports=i.p+"img/gallery_2.b9a5a776.jpg"},"371f":function(e,t,i){e.exports=i.p+"img/tracking.1ce33ecb.jpg"},"3b73":function(e,t,i){"use strict";i("2cff")},4204:function(e,t,i){e.exports=i.p+"img/crimea.c8433518.jpg"},"42b9":function(e,t,i){e.exports=i.p+"img/gallery_4.f959ab8e.jpg"},"468c":function(e,t,i){e.exports=i.p+"img/gallery_5.30ca1fe1.jpg"},"46f3":function(e,t,i){e.exports=i.p+"img/about_me.c8aea47f.jpg"},4848:function(e,t,i){e.exports=i.p+"img/gallery_1.1e83f9c0.jpg"},"49d0":function(e,t,i){e.exports=i.p+"img/gallery_5.06c91e84.jpg"},"4dea":function(e,t,i){"use strict";var n=i("7a23");const l={class:"wrapper-slider"},r={class:"slider-footer"},o={class:"dots-group"},c=["onClick"];function a(e,t,i,a,g,s){const p=Object(n["resolveComponent"])("image-group");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createVNode"])(p,{data:i.data,current_index:g.current_index,onToggleSlide:s.toggleSlide,onOnMoveLeft:s.nextSlide,onOnMoveRight:s.prevSlide},null,8,["data","current_index","onToggleSlide","onOnMoveLeft","onOnMoveRight"]),Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",o,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(i.data,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.id,class:Object(n["normalizeClass"])(["slider-footer-dot",{"selected-slide":e.id===g.current_index+1}]),onClick:t=>s.selectSlide(e.id)},null,10,c))),128))])]),Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=(...e)=>s.prevSlide&&s.prevSlide(...e)),class:"btn-slider btn-slider-prev"}),Object(n["createElementVNode"])("button",{onClick:t[1]||(t[1]=(...e)=>s.nextSlide&&s.nextSlide(...e)),class:"btn-slider btn-slider-next"})])}const g=["src"];function s(e,t,l,r,o,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{style:Object(n["normalizeStyle"])({"margin-left":`-${c.getSlideMargin()}%`,width:l.data.length+"00%"}),class:"slider-group",onClick:t[0]||(t[0]=(...e)=>c.toggleSlide&&c.toggleSlide(...e))},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.data,e=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e.id,class:"slide"},[Object(n["createElementVNode"])("img",{src:i("810b")("./"+e.img),alt:"Slide picture"},null,8,g)]))),128))],4)}var p={name:"ImageGroup",props:["data","current_index"],methods:{getSlideMargin(){return 100*this.current_index},toggleSlide(){this.$emit("toggleSlide")}}},d=(i("585a"),i("6b0d")),u=i.n(d);const b=u()(p,[["render",s],["__scopeId","data-v-702c1ca0"]]);var m=b,j={name:"AppSlider",props:["data","isAutoSlider","sliding"],watch:{sliding(e,t){t>e&&(this.prevSlide(),this.$emit("updateTrigger",e)),t<e&&(this.nextSlide(),this.$emit("updateTrigger",e))}},components:{ImageGroup:m},data(){return{interval:null,isPaused:!1,current_index:0,x1:null,xDiff:null}},methods:{selectSlide(e){this.current_index=e-1},prevSlide(){this.current_index>=1&&(this.current_index=this.current_index-1)},nextSlide(){this.current_index>=this.data.length-1?this.current_index=0:this.current_index=this.current_index+1},toggleSlide(){this.isPaused=!this.isPaused,!this.isPaused&&this.isAutoSlider?this.startSlide():this.stopSlide()},startSlide(){this.interval=setInterval(()=>{this.nextSlide()},3500)},stopSlide(){clearInterval(this.interval)}},created(){this.isAutoSlider&&this.startSlide()},beforeUnmount(){this.stopSlide()}};i("3b73");const _=u()(j,[["render",a],["__scopeId","data-v-48184564"]]);t["a"]=_},"539d":function(e,t,i){e.exports=i.p+"img/bg_image_mobile.45507f4d.jpg"},"54e8":function(e,t,i){e.exports=i.p+"img/bg_image_mobile_2.920c1369.jpg"},"585a":function(e,t,i){"use strict";i("9b4a")},"764b":function(e,t,i){e.exports=i.p+"img/gallery_3.a80fc7b3.jpg"},"7b26":function(e,t,i){e.exports=i.p+"img/gallery_4.6ab745df.jpg"},8032:function(e,t,i){e.exports=i.p+"img/gallery_2.cd85842f.jpg"},"810b":function(e,t,i){var n={"./about_me.jpg":"46f3","./bg_image.jpg":"bbb8","./bg_image_mobile.jpg":"539d","./bg_image_mobile_2.jpg":"54e8","./bg_image_mobile_3.jpg":"1c59","./bg_image_mobile_4.jpg":"f437","./bg_image_mobile_5.jpg":"bb82","./bg_image_mobile_6.jpg":"25b0","./bg_image_mobile_7.jpg":"d455","./crimea/gallery_1.jpg":"a348","./crimea/gallery_2.jpg":"8032","./crimea/gallery_3.jpg":"f860","./crimea/gallery_4.jpg":"7b26","./excursions/gallery_1.jpg":"1ffa","./excursions/gallery_2.jpg":"ab95","./excursions/gallery_3.jpg":"94e8","./excursions/gallery_4.jpg":"2acd","./excursions/gallery_5.jpg":"e84b","./home/crimea.jpg":"4204","./home/excursions.jpg":"db23","./home/photosession.jpg":"197c","./home/tracking.jpg":"371f","./home/ural.jpg":"1975","./photosession/gallery_1.jpg":"13a7","./photosession/gallery_2.jpg":"35ea","./photosession/gallery_3.jpg":"923b","./photosession/gallery_4.jpg":"ab86","./photosession/gallery_5.jpg":"468c","./photosession/gallery_6.jpg":"05d0","./tracking/gallery_1.jpg":"4848","./tracking/gallery_2.jpg":"bbbd","./tracking/gallery_3.jpg":"0675","./tracking/gallery_4.jpg":"0a8a","./tracking/gallery_5.jpg":"0ef4","./ural/gallery_1.jpg":"dfc8","./ural/gallery_2.jpg":"c5a7","./ural/gallery_3.jpg":"764b","./ural/gallery_4.jpg":"42b9","./ural/gallery_5.jpg":"49d0","./ural/gallery_6.jpg":"ae79"};function l(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id="810b"},"923b":function(e,t,i){e.exports=i.p+"img/gallery_3.54fcbac9.jpg"},"94e8":function(e,t,i){e.exports=i.p+"img/gallery_3.a5203b91.jpg"},"9b4a":function(e,t,i){},a348:function(e,t,i){e.exports=i.p+"img/gallery_1.45afc3c1.jpg"},ab86:function(e,t,i){e.exports=i.p+"img/gallery_4.551da403.jpg"},ab95:function(e,t,i){e.exports=i.p+"img/gallery_2.125c018b.jpg"},ae79:function(e,t,i){e.exports=i.p+"img/gallery_6.302f97ff.jpg"},bb82:function(e,t,i){e.exports=i.p+"img/bg_image_mobile_5.57965f2e.jpg"},bbb8:function(e,t,i){e.exports=i.p+"img/bg_image.e40894eb.jpg"},bbbd:function(e,t,i){e.exports=i.p+"img/gallery_2.86b4036d.jpg"},c5a7:function(e,t,i){e.exports=i.p+"img/gallery_2.8604b655.jpg"},d455:function(e,t,i){e.exports=i.p+"img/bg_image_mobile_7.672b3f2a.jpg"},db23:function(e,t,i){e.exports=i.p+"img/excursions.94618b04.jpg"},dfc8:function(e,t,i){e.exports=i.p+"img/gallery_1.b69374a8.jpg"},e84b:function(e,t,i){e.exports=i.p+"img/gallery_5.cf6ac81e.jpg"},edcc:function(e,t,i){"use strict";i.r(t);var n=i("7a23");const l=e=>(Object(n["pushScopeId"])("data-v-da24c9ae"),e=e(),Object(n["popScopeId"])(),e),r={class:"crimea-page"},o={class:"content"},c=l(()=>Object(n["createElementVNode"])("p",null,"Маршрут Ласпи - Балаклава. Протяженность 18 км. Это часть Большой Севастопольской Тропы (её протяженность 130 км).",-1)),a={class:"slider-wrap"},g=l(()=>Object(n["createElementVNode"])("p",null,"Мы отправимся от Ласпинского перевала, набрав высоту в гору Куш-Кая покорим гору Аскети, где нам откроется сногсшибательная панорама мыса Айя и мыса Фиолент по другую сторону.",-1)),s=l(()=>Object(n["createElementVNode"])("p",null,"Закончится наш маршрут в руинах крепости Чембало в Балаклаве.",-1)),p=l(()=>Object(n["createElementVNode"])("p",null,"Тропа изобилует ландшафтам и просто дарит восхитительные пейзажи. Дубы и буки то и дело уступают можжевельникам и соснам, их хвойный аромат так и кружит голову и дарит небывалую лёгкость путникам. А вид моря вдохновляет вас на новые подвиги!",-1)),d=l(()=>Object(n["createElementVNode"])("p",null,"Хотите увидеть всё своими глазами? Летим с нами 16 мая, мы вам покажем, где в Крыму красиво 😁",-1)),u=l(()=>Object(n["createElementVNode"])("p",null,"Мы предлагаем вам, походы по Крыму с лёгким рюкзаком.",-1)),b=l(()=>Object(n["createElementVNode"])("p",null,"Подробнее о туре по телефону + 7 902 357 22 88 Елена (отвечаю в любом мессенджере)",-1));function m(e,t,i,l,m,j){const _=Object(n["resolveComponent"])("app-slider");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createElementVNode"])("div",o,[c,Object(n["createElementVNode"])("div",a,[Object(n["createVNode"])(_,{data:e.$store.getters.crimea,isAutoSlider:!1,sliding:e.sliding,onUpdateTrigger:e.updateTrigger,class:"slider"},null,8,["data","sliding","onUpdateTrigger"])]),g,s,p,d,u,b])])}var j=i("4dea"),_=i("1ebc"),f={name:"ExcursionPage",mixins:[_["a"]],components:{AppSlider:j["a"]},data(){return{sliderNumber:0}}},h=(i("2cf8"),i("6b0d")),x=i.n(h);const y=x()(f,[["render",m],["__scopeId","data-v-da24c9ae"]]);t["default"]=y},f437:function(e,t,i){e.exports=i.p+"img/bg_image_mobile_4.ef91907c.jpg"},f860:function(e,t,i){e.exports=i.p+"img/gallery_3.cc5e6d40.jpg"}}]);
//# sourceMappingURL=chunk-5a6833d6.4c668693.js.map