(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0db6bca9"],{"13fa":function(e,t,c){"use strict";c("44fe")},"2b84":function(e,t,c){"use strict";c("5ccd")},"44fe":function(e,t,c){},"5ccd":function(e,t,c){},9094:function(e,t,c){"use strict";c.r(t);var o=c("7a23");const s={class:"post-list-page"},n={class:"content"},l={key:0,class:"loading"},a={key:1,class:"post-list"};function r(e,t,c,r,i,b){const d=Object(o["resolveComponent"])("post-item");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createElementVNode"])("div",n,[b.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",l,"Загрузка...")):Object(o["createCommentVNode"])("",!0),b.postList?(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",a,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(b.postList,e=>(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:e.id,post:e,class:"post-item-block"},null,8,["post"]))),128))])):Object(o["createCommentVNode"])("",!0)])])}const i={class:"post-item"},b={class:"post-header"},d={class:"left"},p={class:"right"},m={class:"post-body"},j={class:"title"},O={class:"image-list"},u={class:"img-block"},k=["src","alt"],g=["innerHTML"],E={class:"link"},h=Object(o["createTextVNode"])(" подробнее "),f={class:"post-footer"};function N(e,t,c,s,n,l){const a=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",i,[Object(o["createElementVNode"])("header",b,[Object(o["createElementVNode"])("div",d,Object(o["toDisplayString"])(c.post.eventType),1),Object(o["createElementVNode"])("div",p,Object(o["toDisplayString"])(l.getDate(c.post.id)),1)]),Object(o["createElementVNode"])("main",m,[Object(o["createElementVNode"])("h3",j,Object(o["toDisplayString"])(c.post.title),1),Object(o["createElementVNode"])("ul",O,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.post.imageList,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:"image-item mr-16",key:e},[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("img",{src:e,alt:e},null,8,k)])]))),128))]),Object(o["createElementVNode"])("p",{innerHTML:c.post.text},null,8,g),Object(o["createElementVNode"])("p",E,[Object(o["createVNode"])(a,{to:{name:"post-page",params:{id:c.post.id}}},{default:Object(o["withCtx"])(()=>[h]),_:1},8,["to"])])]),Object(o["createElementVNode"])("footer",f,[Object(o["createElementVNode"])("button",{class:"btn btn__blue",onClick:t[0]||(t[0]=(...e)=>l.think&&l.think(...e))}," Резерв "),Object(o["createElementVNode"])("button",{class:"btn btn__red",onClick:t[1]||(t[1]=(...e)=>l.book&&l.book(...e))}," Забронировать ")])])}var V=c("c1df"),B=c.n(V),v={name:"PostItem",props:["post"],methods:{book(){alert("Еще не готово! ))")},think(){alert("Тут подумть надо :/")},deletePost(){this.$store.dispatch("removePost",this.post.id)},getDate(e){return B.a.locale("ru"),B.a.unix(e/1e3).format("DD.MM.YYYY, HH:mm")}}},L=(c("2b84"),c("6b0d")),y=c.n(L);const _=y()(v,[["render",N],["__scopeId","data-v-06090144"]]);var w=_,P={name:"PostListPage",components:{PostItem:w},computed:{loading(){return this.$store.getters.getProcessing},userId(){return this.$store.getters.userId},postList(){return this.$store.getters.postList}},async mounted(){await this.$store.dispatch("getPostList")}};c("13fa");const C=y()(P,[["render",r],["__scopeId","data-v-3bb5989c"]]);t["default"]=C}}]);
//# sourceMappingURL=chunk-0db6bca9.a98b5a5a.js.map