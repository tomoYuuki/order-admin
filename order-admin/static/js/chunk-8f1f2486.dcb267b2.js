(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f1f2486"],{"01cc":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("el-card",{staticStyle:{margin:"20px"}},[n("t-simple-form",{ref:"form",attrs:{"form-data":e.formData,"field-list":e.fieldList,"operator-list":e.operatorList,rules:e.rules}})],1)],1)},o=[],i=n("5530"),r=(n("caad"),n("2532"),n("d81d"),n("b0c0"),n("86a6")),s=n("e05b"),l={name:"FormCu",components:{TSimpleForm:r["a"]},props:{},data:function(){var e=this;return{formData:{},fieldList:[{type:"input",key:"order_no",label:"订单编号",props:{clearable:!0},disabled:!0},{type:"select",key:"order_receive_status",label:"接单状态",props:{clearable:!0},typeData:function(){return[{value:!0,label:"已接单"},{value:!1,label:"未接单"}]},disabled:!0},{type:"select",key:"order_payment_status",label:"支付状态",props:{clearable:!0},typeData:function(){return[{value:!0,label:"已支付"},{value:!1,label:"未支付"}]},disabled:!0},{type:"input",key:"table_no",label:"桌号",props:{clearable:!0},disabled:!0},{type:"input",key:"order_time",label:"下单时间",props:{clearable:!0},disabled:!0},{type:"descriptionLists",key:"order_info",label:"订单信息",props:{border:!0,column:2,direction:"vertical"},disabled:!0}],operatorList:[{type:"",label:"返 回",func:function(){e.$router.push({name:"orderList"})}}],rules:{}}},computed:{formComp:function(){return this.$refs["form"].$refs["form"]}},watch:{},created:function(){},mounted:function(){this.$route.path.includes("edit")&&this.queryOrderDetail()},beforeDestroy:function(){},methods:{queryOrderDetail:function(){var e=this;s["a"].queryDetail({id:this.$route.query.id}).then((function(a){e.formData=a.data.data[0],e.formData.order_info=e.formData.order_info.map((function(e){var a=e.product_list.map((function(e){return{name:e.name,count:e.user_select_count}}));return Object(i["a"])(Object(i["a"])({},e),{},{product_list:a})}))}))},submitForm:function(){var e=this;this.formComp.validate((function(a){a&&(e.$route.path.includes("edit")?e.updateOrder():e.addOrder())}))},addOrder:function(){var e=this;s["a"].append(this.formData).then((function(a){200===a.status&&e.$router.push({name:"OrderList"})}))},updateOrder:function(){var e=this;s["a"].updateData(this.formData).then((function(a){200===a.status&&e.$router.push({name:"OrderList"})}))},resetFields:function(){return this.formComp.resetFields()},clearValidate:function(){return this.formComp.clearValidate()}}},p=l,d=n("2877"),u=Object(d["a"])(p,t,o,!1,null,"35f7c496",null);a["default"]=u.exports},"862d":function(e,a,n){"use strict";(function(a,n){e.exports=n()})(0,(function(){function e(e){var t=[];return e.AMapUI&&t.push(a(e.AMapUI)),e.Loca&&t.push(n(e.Loca)),Promise.all(t)}function a(e){return new Promise((function(a,n){var s=[];if(e.plugins)for(var l=0;l<e.plugins.length;l+=1)-1==o.AMapUI.plugins.indexOf(e.plugins[l])&&s.push(e.plugins[l]);if(i.AMapUI===t.failed)n("前次请求 AMapUI 失败");else if(i.AMapUI===t.notload){i.AMapUI=t.loading,o.AMapUI.version=e.version||o.AMapUI.version,l=o.AMapUI.version;var p=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+l+"/main.js",d.onerror=function(e){i.AMapUI=t.failed,n("请求 AMapUI 失败")},d.onload=function(){if(i.AMapUI=t.loaded,s.length)window.AMapUI.loadUI(s,(function(){for(var e=0,n=s.length;e<n;e++){var t=s[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()}));else for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},p.appendChild(d)}else i.AMapUI===t.loaded?e.version&&e.version!==o.AMapUI.version?n("不允许多个版本 AMapUI 混用"):s.length?window.AMapUI.loadUI(s,(function(){for(var e=0,n=s.length;e<n;e++){var t=s[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}a()})):a():e.version&&e.version!==o.AMapUI.version?n("不允许多个版本 AMapUI 混用"):r.AMapUI.push((function(e){e?n(e):s.length?window.AMapUI.loadUI(s,(function(){for(var e=0,n=s.length;e<n;e++){var t=s[e].split("/").slice(-1)[0];window.AMapUI[t]=arguments[e]}a()})):a()}))}))}function n(e){return new Promise((function(a,n){if(i.Loca===t.failed)n("前次请求 Loca 失败");else if(i.Loca===t.notload){i.Loca=t.loading,o.Loca.version=e.version||o.Loca.version;var s=o.Loca.version,l=o.AMap.version.startsWith("2"),p=s.startsWith("2");if(l&&!p||!l&&p)n("JSAPI 与 Loca 版本不对应！！");else{l=o.key,p=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+s+"&key="+l,d.onerror=function(e){i.Loca=t.failed,n("请求 AMapUI 失败")},d.onload=function(){for(i.Loca=t.loaded,a();r.Loca.length;)r.Loca.splice(0,1)[0]()},p.appendChild(d)}}else i.Loca===t.loaded?e.version&&e.version!==o.Loca.version?n("不允许多个版本 Loca 混用"):a():e.version&&e.version!==o.Loca.version?n("不允许多个版本 Loca 混用"):r.Loca.push((function(e){e?n(e):n()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var t;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(t||(t={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:t.notload,AMapUI:t.notload,Loca:t.notload},r={AMap:[],AMapUI:[],Loca:[]},s=[],l=function(e){"function"==typeof e&&(i.AMap===t.loaded?e(window.AMap):s.push(e))};return{load:function(a){return new Promise((function(n,r){if(i.AMap==t.failed)r("");else if(i.AMap==t.notload){var p=a.key,d=a.version,u=a.plugins;p?(window.AMap&&"lbs.amap.com"!==location.host&&r("禁止多种API加载方式混用"),o.key=p,o.AMap.version=d||o.AMap.version,o.AMap.plugins=u||o.AMap.plugins,i.AMap=t.loading,d=document.body||document.head,window.___onAPILoaded=function(o){if(delete window.___onAPILoaded,o)i.AMap=t.failed,r(o);else for(i.AMap=t.loaded,e(a).then((function(){n(window.AMap)}))["catch"](r);s.length;)s.splice(0,1)[0]()},u=document.createElement("script"),u.type="text/javascript",u.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+p+"&plugin="+o.AMap.plugins.join(","),u.onerror=function(e){i.AMap=t.failed,r(e)},d.appendChild(u)):r("请填写key")}else if(i.AMap==t.loaded)if(a.key&&a.key!==o.key)r("多个不一致的 key");else if(a.version&&a.version!==o.AMap.version)r("不允许多个版本 JSAPI 混用");else{if(p=[],a.plugins)for(d=0;d<a.plugins.length;d+=1)-1==o.AMap.plugins.indexOf(a.plugins[d])&&p.push(a.plugins[d]);p.length?window.AMap.plugin(p,(function(){e(a).then((function(){n(window.AMap)}))["catch"](r)})):e(a).then((function(){n(window.AMap)}))["catch"](r)}else if(a.key&&a.key!==o.key)r("多个不一致的 key");else if(a.version&&a.version!==o.AMap.version)r("不允许多个版本 JSAPI 混用");else{var c=[];if(a.plugins)for(d=0;d<a.plugins.length;d+=1)-1==o.AMap.plugins.indexOf(a.plugins[d])&&c.push(a.plugins[d]);l((function(){c.length?window.AMap.plugin(c,(function(){e(a).then((function(){n(window.AMap)}))["catch"](r)})):e(a).then((function(){n(window.AMap)}))["catch"](r)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:t.notload,AMapUI:t.notload,Loca:t.notload},r={AMap:[],AMapUI:[],Loca:[]}}}}))},e05b:function(e,a,n){"use strict";var t=n("b775");function o(e){return Object(t["a"])({url:"/order/queryList",method:"get",params:e})}function i(e){return Object(t["a"])({url:"/order/add",method:"post",data:e})}function r(e){return Object(t["a"])({url:"/order/detail",method:"post",data:e})}function s(e){return Object(t["a"])({url:"/order/update",method:"post",data:e})}function l(e){return Object(t["a"])({url:"/order/delete",method:"post",data:e})}function p(e){return Object(t["a"])({url:"/order/status",method:"post",data:e})}a["a"]={queryList:o,append:i,queryDetail:r,updateData:s,deleteData:l,status:p}}}]);