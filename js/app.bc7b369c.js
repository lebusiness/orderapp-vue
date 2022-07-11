(function(){"use strict";var e={2291:function(e,t,n){var r=n(9242),o=n(3396);function s(e,t,n,r,s,i){const a=(0,o.up)("Header"),l=(0,o.up)("Main"),c=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(l),(0,o.Wm)(c)],64)}const i={class:"header"},a=(0,o._)("h1",{class:"header__topic"}," Панель администратора заказов ",-1),l={class:"switcher"},c={class:"switcher-relative"},d=(0,o._)("span",null,"on",-1),p=(0,o._)("span",null,"off",-1);function m(e,t,n,r,s,m){return(0,o.wg)(),(0,o.iD)("header",i,[a,(0,o._)("div",l,[(0,o._)("div",c,[d,p,(0,o._)("div",{class:"switcher-circle",onClick:t[0]||(t[0]=(...e)=>m.toggleSwitch&&m.toggleSwitch(...e))})])])])}var u={name:"Header",data(){return{}},methods:{toggleSwitch(e){e.target.classList.toggle("switcher-circle--active"),console.log(e.target.classList);const t=e.target.classList.contains("switcher-circle--active")?"dark":"";document.documentElement.setAttribute("theme",t)}}},h=n(89);const _=(0,h.Z)(u,[["render",m]]);var v=_;const w={class:"main"};function f(e,t,n,r,s,i){const a=(0,o.up)("Modal"),l=(0,o.up)("OrderItem"),c=(0,o.up)("Orders"),d=(0,o.up)("ShipmentItem"),p=(0,o.up)("Shipments");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s.isOpenModal?((0,o.wg)(),(0,o.j4)(a,{key:0,onClose:t[0]||(t[0]=e=>s.isOpenModal=!1),modalOrder:s.modalOrder,onToShipmentMain:i.toShipmentMain,onCancelMain:i.cancelMain},null,8,["modalOrder","onToShipmentMain","onCancelMain"])):(0,o.kq)("",!0),(0,o._)("main",w,[(0,o.Wm)(c,{onOrdersReload:i.getOrdersData},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.orders,(e=>((0,o.wg)(),(0,o.j4)(l,{order:e,key:e,onGetMoreMain:i.getMoreMain,onToShipmentMain:i.toShipmentMain,onCancelMain:i.cancelMain},null,8,["order","onGetMoreMain","onToShipmentMain","onCancelMain"])))),128))])),_:1},8,["onOrdersReload"]),(0,o.Wm)(p,{onShipmentsReload:i.getShipmentsData},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.shipments,(e=>((0,o.wg)(),(0,o.j4)(d,{shipment:e,key:e,onCancelShipmentMain:i.cancelShipmentMain},null,8,["shipment","onCancelShipmentMain"])))),128))])),_:1},8,["onShipmentsReload"])])],64)}const b={class:"orders"},g=(0,o._)("svg",{width:"27px",height:"30px",viewBox:"0 0 520 420",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("title",null,"ionicons-v5-b"),(0,o._)("path",{d:"M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320",style:{fill:"none","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32px"}}),(0,o._)("path",{d:"M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z"})],-1),M=[g],O=(0,o._)("h2",{class:"orders__title"},"Заказы",-1),S={class:"orders__list"};function k(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)("section",b,[(0,o._)("button",{class:"orders__reload",onClick:t[0]||(t[0]=t=>e.$emit("ordersReload"))},M),O,(0,o._)("div",S,[(0,o.WI)(e.$slots,"default")])])}var C={name:"Orders",data(){return{}}};const D=(0,h.Z)(C,[["render",k]]);var $=D,y=n(7139);const x={class:"orders__item"},T={class:"orders__item-order"},Z={class:"orders__item-price"};function j(e,t,n,r,s,i){const a=(0,o.up)("SelectBtnOrder");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("span",T," Заказ #"+(0,y.zw)(n.order.id),1),(0,o._)("span",Z,(0,y.zw)(n.order.total)+" руб. ",1),(0,o.Wm)(a,{onGetMore:t[0]||(t[0]=t=>e.$emit("getMoreMain",n.order)),onToShipment:t[1]||(t[1]=t=>e.$emit("toShipmentMain",n.order)),onCancel:t[2]||(t[2]=t=>e.$emit("cancelMain",n.order))})])}const I={class:"btn-wrapper"},z={key:0,class:"btn-wrapper__list"};function H(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)("div",I,[(0,o._)("button",{class:"btn-wrapper__btn",onClick:t[0]||(t[0]=e=>s.isOpen=!s.isOpen)}," ... "),s.isOpen?((0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("button",{class:"btn-wrapper__sub-btn",onClick:t[1]||(t[1]=t=>e.$emit("getMore"))},"Подробнее"),(0,o._)("button",{class:"btn-wrapper__sub-btn btn-wrapper__sub-btn--green",onClick:t[2]||(t[2]=t=>e.$emit("toShipment"))},"К отгрузке"),(0,o._)("button",{class:"btn-wrapper__sub-btn btn-wrapper__sub-btn--red",onClick:t[3]||(t[3]=t=>e.$emit("cancel"))},"Отменить")])):(0,o.kq)("",!0)])}var F={name:"SelectBtnOrder",data(){return{isOpen:!1}},methods:{}};const W=(0,h.Z)(F,[["render",H]]);var B=W,E={name:"OrderItem",data(){return{}},props:["order"],components:{SelectBtnOrder:B}};const L=(0,h.Z)(E,[["render",j]]);var A=L;const R={class:"shipments"},Y=(0,o._)("svg",{width:"27px",height:"30px",viewBox:"0 0 520 420",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("title",null,"ionicons-v5-b"),(0,o._)("path",{d:"M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320",style:{fill:"none","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32px"}}),(0,o._)("path",{d:"M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z"})],-1),q=[Y],G=(0,o._)("h2",{class:"shipments__title"},"Отгрузки",-1),K={class:"shipments__list"};function P(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)("section",R,[(0,o._)("button",{class:"shipments__reload",onClick:t[0]||(t[0]=t=>e.$emit("shipmentsReload"))},q),G,(0,o._)("div",K,[(0,o.WI)(e.$slots,"default")])])}var V={name:"Shipments",data(){return{}}};const J=(0,h.Z)(V,[["render",P]]);var N=J;const Q={class:"shipments__item"},U={class:"shipments__item-shipment"},X={class:"shipments__item-order"},ee={class:"shipments__item-date"};function te(e,t,n,r,s,i){const a=(0,o.up)("SelectBtnShipment");return(0,o.wg)(),(0,o.iD)("div",Q,[(0,o._)("span",U," Отгрузка #"+(0,y.zw)(n.shipment.id),1),(0,o._)("span",X," Заказ #"+(0,y.zw)(n.shipment.order_id),1),(0,o._)("span",ee,(0,y.zw)(n.shipment.delivery_date),1),(0,o.Wm)(a,{onCancelShipment:t[0]||(t[0]=t=>e.$emit("cancelShipmentMain",n.shipment))})])}const ne={class:"btn-wrapper"},re={key:0,class:"btn-wrapper__list"};function oe(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)("div",ne,[(0,o._)("button",{class:"btn-wrapper__btn",onClick:t[0]||(t[0]=e=>s.isOpen=!s.isOpen)}," ... "),s.isOpen?((0,o.wg)(),(0,o.iD)("div",re,[(0,o._)("button",{class:"btn-wrapper__sub-btn btn-wrapper__sub-btn--red",onClick:t[1]||(t[1]=t=>e.$emit("cancelShipment"))},"Отменить")])):(0,o.kq)("",!0)])}var se={name:"SelectBtnShipment",data(){return{isOpen:!1}},methods:{}};const ie=(0,h.Z)(se,[["render",oe]]);var ae=ie,le={name:"ShipmentItem",data(){return{}},props:["shipment"],components:{SelectBtnShipment:ae}};const ce=(0,h.Z)(le,[["render",te]]);var de=ce;const pe={class:"modal__number"},me=(0,o._)("p",{class:"modal__title"},"Корзина",-1),ue={class:"modal__list"},he={class:"modal__total"},_e={class:"modal__btn-wrapper"};function ve(e,t,n,s,i,a){const l=(0,o.up)("ModalItem");return(0,o.wg)(),(0,o.iD)("div",{class:"modal",onClick:t[4]||(t[4]=t=>e.$emit("close"))},[(0,o._)("div",{class:"modal__inner",onClick:t[3]||(t[3]=(0,r.iM)((()=>{}),["stop"]))},[(0,o._)("button",{class:"modal__close",onClick:t[0]||(t[0]=t=>e.$emit("close"))},"x"),(0,o._)("p",pe,"Заказ #"+(0,y.zw)(n.modalOrder.id),1),me,(0,o._)("div",ue,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.modalOrder.basket_items,(e=>((0,o.wg)(),(0,o.j4)(l,{key:"item",name:e.name,count:e.quantity,price:e.price},null,8,["name","count","price"])))),128))]),(0,o._)("span",he," Итого: "+(0,y.zw)(n.modalOrder.total)+" руб. ",1),(0,o._)("div",_e,[(0,o._)("button",{class:"modal__btn modal__btn--green",onClick:t[1]||(t[1]=t=>(e.$emit("toShipmentMain",n.modalOrder),e.$emit("close")))}," К отгрузке "),(0,o._)("button",{class:"modal__btn modal__btn--red",onClick:t[2]||(t[2]=t=>(e.$emit("cancelMain",n.modalOrder),e.$emit("close")))}," Отменить ")])])])}const we={class:"modal__item"},fe={class:"modal__item-count"},be={class:"modal__item-price"};function ge(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)("div",we,[(0,o._)("span",null,(0,y.zw)(n.name),1),(0,o._)("span",fe,(0,y.zw)(n.count)+" шт.",1),(0,o._)("span",be,(0,y.zw)(n.price)+" руб.",1)])}var Me={name:"ModalItem",data(){return{}},props:["name","count","price"]};const Oe=(0,h.Z)(Me,[["render",ge]]);var Se=Oe,ke={name:"Modal",data(){return{}},props:["modalOrder"],components:{ModalItem:Se},beforeMount(){window.onkeydown=e=>{27==e.keyCode&&this.$emit("close")}}};const Ce=(0,h.Z)(ke,[["render",ve]]);var De=Ce,$e={name:"Main",data(){return{student:"2021-0625",orders:null,shipments:null,isOpenModal:!1,modalOrder:null}},methods:{getMoreMain(e){this.isOpenModal=!0,this.modalOrder=e},toShipmentMain(e){fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/orders/${e.id}/delivery`,{method:"POST"}).then((()=>{this.getFetchData()}))},cancelMain(e){fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/orders/${e.id}`,{method:"DELETE"}).then((()=>{this.getFetchData()}))},cancelShipmentMain(e){fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/deliveries/${e.id}`,{method:"DELETE"}).then((()=>{this.getFetchData()}))},getOrdersData(){fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/orders`).then((e=>e.json())).then((e=>this.orders=e))},getShipmentsData(){fetch(`https://demo-api.vsdev.space/api/orders_admin/${this.student}/deliveries`).then((e=>e.json())).then((e=>this.shipments=e))},getFetchData(){this.getOrdersData(),this.getShipmentsData()}},beforeMount(){this.getFetchData()},updated(){console.log("updated")},components:{Orders:$,Shipments:N,OrderItem:A,ShipmentItem:de,Modal:De}};const ye=(0,h.Z)($e,[["render",f]]);var xe=ye;const Te={class:"footer"},Ze=(0,o._)("span",{class:"footer__name"}," Футер ",-1),je={class:"footer__scroll-wrap"},Ie=(0,o._)("span",null,"Scroll to top",-1);function ze(e,t,n,r,s,i){return(0,o.wg)(),(0,o.iD)("footer",Te,[Ze,(0,o._)("div",je,[Ie,(0,o._)("button",{class:"footer__scroll",onClick:t[0]||(t[0]=(...e)=>i.toTop&&i.toTop(...e))},"↑")])])}var He={name:"Footer",data(){return{}},methods:{toTop(){window.scrollTo({top:0,behavior:"smooth"})}}};const Fe=(0,h.Z)(He,[["render",ze]]);var We=Fe,Be={name:"App",components:{Header:v,Main:xe,Footer:We}};const Ee=(0,h.Z)(Be,[["render",s]]);var Le=Ee;(0,r.ri)(Le).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],s=e[d][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self["webpackChunkvueorder"]=self["webpackChunkvueorder"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2291)}));r=n.O(r)})();
//# sourceMappingURL=app.bc7b369c.js.map