(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd0ebb68"],{"27de":function(t,e,s){},5536:function(t,e,s){"use strict";s("cd84")},"5a4a":function(t,e,s){},"86e8":function(t,e,s){"use strict";s("27de")},a55b:function(t,e,s){"use strict";s.r(e);var c=s("7a23");const o=t=>(Object(c["x"])("data-v-a136309e"),t=t(),Object(c["v"])(),t),a={class:"profile-page"},n={class:"profile-header"},l=o(()=>Object(c["g"])("h1",null,"Панель администратора",-1)),r=o(()=>Object(c["g"])("hr",null,null,-1)),b={class:"profile-main"},i=o(()=>Object(c["g"])("h2",null,"Посты:",-1)),d={key:2,class:"post-list"},p={key:3};function O(t,e,s,o,O,u){const j=Object(c["B"])("create-event-form"),m=Object(c["B"])("post-item");return Object(c["u"])(),Object(c["f"])("div",a,[Object(c["g"])("header",n,[l,Object(c["g"])("p",null,"user-id: "+Object(c["D"])(u.userId),1),r]),Object(c["g"])("main",b,[O.isFormOpen?Object(c["e"])("",!0):(Object(c["u"])(),Object(c["f"])("button",{key:0,class:"btn-opener",onClick:e[0]||(e[0]=(...t)=>u.openForm&&u.openForm(...t))}," + Добавить пост ")),O.isFormOpen?(Object(c["u"])(),Object(c["d"])(j,{key:1,class:"form-block",onCloseForm:u.closeForm},null,8,["onCloseForm"])):Object(c["e"])("",!0),i,u.postList?(Object(c["u"])(),Object(c["f"])("ul",d,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(u.postList,t=>(Object(c["u"])(),Object(c["d"])(m,{key:t.id,post:t,class:"post-item-block"},null,8,["post"]))),128))])):(Object(c["u"])(),Object(c["f"])("p",p,"Список пуст.."))])])}const u=t=>(Object(c["x"])("data-v-021426e5"),t=t(),Object(c["v"])(),t),j={class:"background-wrapper"},m={class:"form"},g=u(()=>Object(c["g"])("h2",{class:"form-title"},"Создание нового поста",-1)),f={class:"form-item"},v={class:"form-item"},h={class:"form-item"},F={class:"form-item"},y={class:"btn-block"};function k(t,e,s,o,a,n){return Object(c["u"])(),Object(c["f"])("div",j,[Object(c["g"])("form",m,[g,Object(c["g"])("div",f,[Object(c["I"])(Object(c["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.data.postType=t),class:"title",placeholder:"тип поста.. (анонс, отчёт..)"},null,512),[[c["F"],a.data.postType]])]),Object(c["g"])("div",v,[Object(c["I"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.data.eventType=t),class:"title",placeholder:"тип события.. (экскурсия, поход, фотосессия..)"},null,512),[[c["F"],a.data.eventType]])]),Object(c["g"])("div",h,[Object(c["I"])(Object(c["g"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.data.title=t),class:"title",placeholder:"Название поста"},null,512),[[c["F"],a.data.title]])]),Object(c["g"])("div",F,[Object(c["I"])(Object(c["g"])("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>a.data.text=t),type:"text",class:"text",placeholder:"Введите текст..",cols:"30",rows:"10"},null,512),[[c["F"],a.data.text]])]),Object(c["g"])("div",y,[Object(c["g"])("button",{class:"btn",onClick:e[4]||(e[4]=Object(c["J"])((...t)=>n.closeForm&&n.closeForm(...t),["prevent"]))},"Закрыть"),Object(c["g"])("button",{class:"btn btn__green",onClick:e[5]||(e[5]=Object(c["J"])((...t)=>n.savePost&&n.savePost(...t),["prevent"]))},"Сохранить")])])])}var I={name:"CreateEventForm",data(){return{data:{postType:"",eventType:"",title:"",text:""}}},computed:{userId(){return this.$store.getters.userId}},methods:{async savePost(){await this.$store.dispatch("savePost",this.data),this.$emit("closeForm")},closeForm(){this.$emit("closeForm")}}},P=(s("86e8"),s("6b0d")),_=s.n(P);const w=_()(I,[["render",k],["__scopeId","data-v-021426e5"]]);var x=w;const C=t=>(Object(c["x"])("data-v-117fc1c9"),t=t(),Object(c["v"])(),t),$={class:"post-item"},T={class:"post-header"},D={class:"left"},L={class:"right"},J={class:"post-body"},U={class:"title"},V={class:"body"},A={class:"post-footer"},B=C(()=>Object(c["g"])("button",{class:"btn btn__blue"},"Редактировать",-1));function E(t,e,s,o,a,n){return Object(c["u"])(),Object(c["f"])("li",$,[Object(c["g"])("header",T,[Object(c["g"])("div",D,Object(c["D"])(s.post.postType),1),Object(c["g"])("div",L,Object(c["D"])(s.post.id),1)]),Object(c["g"])("main",J,[Object(c["g"])("h3",U,Object(c["D"])(s.post.title),1),Object(c["g"])("p",V,Object(c["D"])(s.post.text),1)]),Object(c["g"])("footer",A,[B,Object(c["g"])("button",{class:"btn btn__red",onClick:e[0]||(e[0]=(...t)=>n.deletePost&&n.deletePost(...t))}," Удалить ")])])}var q={name:"PostItem",props:["post"],methods:{deletePost(){this.$store.dispatch("removePost",this.post.id)}}};s("a97e");const z=_()(q,[["render",E],["__scopeId","data-v-117fc1c9"]]);var G=z,H={name:"AdminPage",components:{CreateEventForm:x,PostItem:G},data(){return{isFormOpen:!1,data:{}}},computed:{userId(){return this.$store.getters.userId},postList(){return this.$store.getters.postList}},methods:{openForm(){this.isFormOpen=!0},closeForm(){this.isFormOpen=!1}},async mounted(){await this.$store.dispatch("getPostList")}};s("5536");const K=_()(H,[["render",O],["__scopeId","data-v-a136309e"]]);e["default"]=K},a97e:function(t,e,s){"use strict";s("5a4a")},cd84:function(t,e,s){}}]);
//# sourceMappingURL=chunk-fd0ebb68.f7562d1f.js.map