(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c41feb1a"],{3136:function(e,t,s){"use strict";s("84ec")},"61e9":function(e,t,s){"use strict";s.r(t);var r=s("7a23");const c=e=>(Object(r["x"])("data-v-8c83a892"),e=e(),Object(r["v"])(),e),i={class:"signup-page"},a={class:"form"},n=c(()=>Object(r["g"])("h1",null,"Register",-1)),u={key:0,class:"error"},o={class:"input"},l={class:"input"},d={key:2,class:"disabled"};function p(e,t,s,c,p,b){return Object(r["u"])(),Object(r["f"])("div",i,[Object(r["g"])("div",a,[n,b.error?(Object(r["u"])(),Object(r["f"])("div",u,Object(r["D"])(b.error),1)):Object(r["e"])("",!0),Object(r["g"])("div",o,[Object(r["I"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.email=e),type:"text",placeholder:"email",required:""},null,512),[[r["F"],p.email]])]),Object(r["g"])("div",l,[Object(r["I"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>p.password=e),type:"text",placeholder:"password",required:""},null,512),[[r["F"],p.password]])]),b.processing?(Object(r["u"])(),Object(r["f"])("button",d," Сохранить ")):(Object(r["u"])(),Object(r["f"])("button",{key:1,type:"submit",onClick:t[2]||(t[2]=Object(r["J"])((...e)=>b.signup&&b.signup(...e),["prevent"]))}," Сохранить "))])])}var b={data(){return{email:null,password:null}},computed:{error(){return this.$store.getters.getError},processing(){return this.$store.getters.getProcessing},isUserAuthenticated(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated(e){!0===e&&this.$router.push("/")}},methods:{signup(){this.email&&this.password?this.$store.dispatch("signUp",{email:this.email,password:this.password}):alert("fill all fields please...")}}},g=(s("3136"),s("6b0d")),h=s.n(g);const j=h()(b,[["render",p],["__scopeId","data-v-8c83a892"]]);t["default"]=j},"84ec":function(e,t,s){}}]);
//# sourceMappingURL=chunk-c41feb1a.92bfe0cc.js.map