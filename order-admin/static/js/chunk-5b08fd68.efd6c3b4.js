(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b08fd68"],{"17de":function(e,a,n){"use strict";var o=n("b775");function t(e){return Object(o["a"])({url:"/merchant/query",method:"get",params:e})}function i(e){return Object(o["a"])({url:"/merchant/add",method:"post",data:e})}function r(e){return Object(o["a"])({url:"/merchant/detail",method:"get",params:e})}function p(e){return Object(o["a"])({url:"/merchant/update",method:"post",data:e})}function s(e){return Object(o["a"])({url:"/api/merchant/delete",method:"post",data:e})}a["a"]={queryList:t,append:i,queryDetail:r,updateData:p,deleteData:s}},"862d":function(e,a,n){"use strict";(function(a,n){e.exports=n()})(0,(function(){function e(e){var o=[];return e.AMapUI&&o.push(a(e.AMapUI)),e.Loca&&o.push(n(e.Loca)),Promise.all(o)}function a(e){return new Promise((function(a,n){var p=[];if(e.plugins)for(var s=0;s<e.plugins.length;s+=1)-1==t.AMapUI.plugins.indexOf(e.plugins[s])&&p.push(e.plugins[s]);if(i.AMapUI===o.failed)n("前次请求 AMapUI 失败");else if(i.AMapUI===o.notload){i.AMapUI=o.loading,t.AMapUI.version=e.version||t.AMapUI.version,s=t.AMapUI.version;var l=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+s+"/main.js",c.onerror=function(e){i.AMapUI=o.failed,n("请求 AMapUI 失败")},c.onload=function(){if(i.AMapUI=o.loaded,p.length)window.AMapUI.loadUI(p,(function(){for(var e=0,n=p.length;e<n;e++){var o=p[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()}));else for(a();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},l.appendChild(c)}else i.AMapUI===o.loaded?e.version&&e.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):p.length?window.AMapUI.loadUI(p,(function(){for(var e=0,n=p.length;e<n;e++){var o=p[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}a()})):a():e.version&&e.version!==t.AMapUI.version?n("不允许多个版本 AMapUI 混用"):r.AMapUI.push((function(e){e?n(e):p.length?window.AMapUI.loadUI(p,(function(){for(var e=0,n=p.length;e<n;e++){var o=p[e].split("/").slice(-1)[0];window.AMapUI[o]=arguments[e]}a()})):a()}))}))}function n(e){return new Promise((function(a,n){if(i.Loca===o.failed)n("前次请求 Loca 失败");else if(i.Loca===o.notload){i.Loca=o.loading,t.Loca.version=e.version||t.Loca.version;var p=t.Loca.version,s=t.AMap.version.startsWith("2"),l=p.startsWith("2");if(s&&!l||!s&&l)n("JSAPI 与 Loca 版本不对应！！");else{s=t.key,l=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+p+"&key="+s,c.onerror=function(e){i.Loca=o.failed,n("请求 AMapUI 失败")},c.onload=function(){for(i.Loca=o.loaded,a();r.Loca.length;)r.Loca.splice(0,1)[0]()},l.appendChild(c)}}else i.Loca===o.loaded?e.version&&e.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):a():e.version&&e.version!==t.Loca.version?n("不允许多个版本 Loca 混用"):r.Loca.push((function(e){e?n(e):n()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(o||(o={}));var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},r={AMap:[],AMapUI:[],Loca:[]},p=[],s=function(e){"function"==typeof e&&(i.AMap===o.loaded?e(window.AMap):p.push(e))};return{load:function(a){return new Promise((function(n,r){if(i.AMap==o.failed)r("");else if(i.AMap==o.notload){var l=a.key,c=a.version,d=a.plugins;l?(window.AMap&&"lbs.amap.com"!==location.host&&r("禁止多种API加载方式混用"),t.key=l,t.AMap.version=c||t.AMap.version,t.AMap.plugins=d||t.AMap.plugins,i.AMap=o.loading,c=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)i.AMap=o.failed,r(t);else for(i.AMap=o.loaded,e(a).then((function(){n(window.AMap)}))["catch"](r);p.length;)p.splice(0,1)[0]()},d=document.createElement("script"),d.type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+l+"&plugin="+t.AMap.plugins.join(","),d.onerror=function(e){i.AMap=o.failed,r(e)},c.appendChild(d)):r("请填写key")}else if(i.AMap==o.loaded)if(a.key&&a.key!==t.key)r("多个不一致的 key");else if(a.version&&a.version!==t.AMap.version)r("不允许多个版本 JSAPI 混用");else{if(l=[],a.plugins)for(c=0;c<a.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(a.plugins[c])&&l.push(a.plugins[c]);l.length?window.AMap.plugin(l,(function(){e(a).then((function(){n(window.AMap)}))["catch"](r)})):e(a).then((function(){n(window.AMap)}))["catch"](r)}else if(a.key&&a.key!==t.key)r("多个不一致的 key");else if(a.version&&a.version!==t.AMap.version)r("不允许多个版本 JSAPI 混用");else{var u=[];if(a.plugins)for(c=0;c<a.plugins.length;c+=1)-1==t.AMap.plugins.indexOf(a.plugins[c])&&u.push(a.plugins[c]);s((function(){u.length?window.AMap.plugin(u,(function(){e(a).then((function(){n(window.AMap)}))["catch"](r)})):e(a).then((function(){n(window.AMap)}))["catch"](r)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},i={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},r={AMap:[],AMapUI:[],Loca:[]}}}}))},ad24:function(e,a,n){"use strict";n.r(a);var o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("el-card",{staticStyle:{margin:"20px"}},[n("t-simple-form",{ref:"form",attrs:{"form-data":e.formData,"field-list":e.fieldList,"operator-list":e.operatorList,rules:e.rules}})],1)],1)},t=[],i=n("5530"),r=(n("caad"),n("2532"),n("d81d"),n("86a6")),p=n("17de"),s={name:"FormCu",components:{TSimpleForm:r["a"]},props:{},data:function(){var e=this;return{formData:{},fieldList:[{type:"input",key:"name",label:"店铺名称",props:{clearable:!0}},{type:"input",key:"address",label:"店铺地址",props:{clearable:!0}},{type:"uploadPicture",label:"店铺图片",props:{},key:"logo"}],operatorList:[{type:"",label:"返 回",func:function(){e.$router.push({name:"Login"})},display:function(){return!e.$route.path.includes("edit")}},{type:"primary",label:"提 交",func:this.submitForm}],rules:{tenantId:[{required:!0,message:"请选择寺院",trigger:"change"}]}}},computed:{formComp:function(){return this.$refs["form"].$refs["form"]}},watch:{},created:function(){},mounted:function(){this.$route.path.includes("edit")&&this.queryMerchantDetail()},beforeDestroy:function(){},methods:{queryMerchantDetail:function(){var e=this;p["a"].queryDetail({}).then((function(a){e.formData=a.data.data[0]}))},submitForm:function(){var e=this;this.formComp.validate((function(a){a&&(e.$route.path.includes("edit")?e.updateMerchant():e.addMerchant())}))},addMerchant:function(){var e=this.formData.logo.map((function(e){return e.response?e.response.data:e})),a=Object(i["a"])(Object(i["a"])({},this.formData),{},{logo:e});p["a"].append(a).then((function(e){e.status}))},updateMerchant:function(){var e=this.formData.logo.map((function(e){return e.response?e.response.data:e})),a=Object(i["a"])(Object(i["a"])({},this.formData),{},{logo:e});p["a"].updateData(a).then((function(e){e.status}))},resetFields:function(){return this.formComp.resetFields()},clearValidate:function(){return this.formComp.clearValidate()}}},l=s,c=n("2877"),d=Object(c["a"])(l,o,t,!1,null,"5c6ea629",null);a["default"]=d.exports}}]);