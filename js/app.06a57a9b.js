(function(e){function t(t){for(var o,n,s=t[0],c=t[1],l=t[2],f=0,u=[];f<s.length;f++)n=s[f],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},a={app:0},i=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/siloah-food-order-tappay/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var m=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],n=r("2877"),s={},c=Object(n["a"])(s,a,i,!1,null,null,null),l=c.exports,m=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-container",[r("Header"),r("div",[e.show?r("b-form",{attrs:{method:"post"},on:{submit:e.checkForm}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1",description:""}},[r("b-form-input",{ref:"email",attrs:{id:"email",name:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"訂購人姓名:","label-for":"input-2"}},[r("b-form-input",{ref:"name",attrs:{id:"name",name:"name",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-container",{staticClass:"forInline"},[r("b-row",[r("b-col",{attrs:{col:"",sm:"12"}},[r("b-form-group",{attrs:{id:"input-group-3",label:"連絡電話:","label-for":"input-3"}},[r("b-form-input",{ref:"phone",attrs:{id:"phone",name:"phone",placeholder:"Enter phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),r("b-col",{attrs:{col:"",sm:"12"}},[r("b-form-group",{attrs:{id:"input-group-4",label:"行動電話:","label-for":"input-4"}},[r("b-form-input",{ref:"mobile",attrs:{id:"mobile",name:"mobile",required:"",placeholder:"Enter mobile"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1)],1)],1),r("b-form-group",{attrs:{label:"地址:"}},[r("b-form-row",{staticClass:"mb-2"},[r("b-col",[r("b-form-select",{attrs:{options:e.cityCountyOpt,name:"cityCounty",required:""},on:{change:function(t){return e.onChangeCityCounty(e.form.cityCounty)}},model:{value:e.form.cityCounty,callback:function(t){e.$set(e.form,"cityCounty",t)},expression:"form.cityCounty"}})],1),r("b-col",[r("b-form-select",{attrs:{options:e.districtOpt,name:"district",required:""},model:{value:e.form.district,callback:function(t){e.$set(e.form,"district",t)},expression:"form.district"}})],1)],1),r("b-form-input",{attrs:{id:"address",name:"address",required:"",placeholder:"Enter Address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"訂購數量:","label-for":"input-6",description:""}},[r("b-form-select",{attrs:{id:"NoOfItem",name:"NoOfItem",options:e.NoOfItemOpt,required:""},on:{change:function(t){return e.onChangeNoOfItem(e.form.NoOfItem)}},model:{value:e.form.NoOfItem,callback:function(t){e.$set(e.form,"NoOfItem",t)},expression:"form.NoOfItem"}})],1),r("b-row",[r("b-col",{attrs:{col:"",sm:"6"}},[r("b-form-group",{attrs:{id:"input-group-7",label:"收餐日期:","label-for":"input-7",description:""}},[r("b-form-datepicker",{ref:"receiveDate",attrs:{"date-disabled-fn":e.dateDisabled,placeholder:"選日期",locale:"zh","hide-header":!0,id:"receiveDate",name:"receiveDate"},model:{value:e.form.receiveDate,callback:function(t){e.$set(e.form,"receiveDate",t)},expression:"form.receiveDate"}})],1)],1),r("b-col",{attrs:{col:"",sm:"6"}},[r("b-form-group",{attrs:{id:"input-group-8",label:"收件時間:"}},[r("b-form-select",{ref:"receiveTime",attrs:{id:"receiveTime",name:"receiveTime",options:e.receiveTimeOpt,required:""},model:{value:e.form.receiveTime,callback:function(t){e.$set(e.form,"receiveTime",t)},expression:"form.receiveTime"}})],1)],1)],1),r("div",[r("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase","active-tab-class":"font-weight-bold text-success","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"商品明細",active:""}},[r("b-table",{attrs:{items:e.items,fields:e.fields,"caption-top":""}})],1)],1)],1),r("div",[r("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase","active-tab-class":"font-weight-bold","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"統一發票",active:""}},[r("div",[r("b-form-group",{attrs:{label:""}},[r("b-form-row",[r("b-col",[r("b-form-radio",{attrs:{name:"receiptSelected",value:"個人",required:""},model:{value:e.form.receiptSelected,callback:function(t){e.$set(e.form,"receiptSelected",t)},expression:"form.receiptSelected"}},[e._v("個人")])],1),r("b-col",[r("b-form-radio",{attrs:{name:"receiptSelected",value:"公司",required:""},model:{value:e.form.receiptSelected,callback:function(t){e.$set(e.form,"receiptSelected",t)},expression:"form.receiptSelected"}},[e._v("公司")])],1),r("b-col"),r("b-col")],1)],1),r("b-form-group",{attrs:{label:""}},[r("b-form-row",[r("b-col",[r("b-form-input",{ref:"companyTitle",attrs:{id:"companyTitle",name:"companyTitle",placeholder:"公司抬頭"},model:{value:e.form.companyTitle,callback:function(t){e.$set(e.form,"companyTitle",t)},expression:"form.companyTitle"}})],1),r("b-col",[r("b-form-input",{ref:"taxId",attrs:{id:"taxId",name:"taxId",placeholder:"統編"},model:{value:e.form.taxId,callback:function(t){e.$set(e.form,"taxId",t)},expression:"form.taxId"}})],1),r("b-form-input",{attrs:{name:"amt",hidden:""},model:{value:e.form.amt,callback:function(t){e.$set(e.form,"amt",t)},expression:"form.amt"}}),r("b-form-input",{attrs:{name:"productCode",hidden:""},model:{value:e.form.productCode,callback:function(t){e.$set(e.form,"productCode",t)},expression:"form.productCode"}}),r("b-form-input",{attrs:{name:"productName",hidden:""},model:{value:e.form.productName,callback:function(t){e.$set(e.form,"productName",t)},expression:"form.productName"}})],1)],1)],1)])],1)],1),r("div",{staticClass:"mb-5"},[r("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-uppercase","active-tab-class":"font-weight-bold text-success","content-class":"mt-3"}},[r("b-tab",{attrs:{title:"付款方式",active:""}},[r("b-row",[r("b-col",{staticClass:"center",attrs:{col:"",sm:"6"}},[r("b-button",{attrs:{size:"lg",type:"submit",variant:"info btn-block",formaction:"http://localhost/tappaytest/payment/credit.php"}},[e._v("信用卡付款")])],1),r("b-col",{staticClass:"center",attrs:{col:"",sm:"6"}},[r("b-button",{attrs:{size:"lg",type:"submit",variant:"info btn-block",formaction:"https://www.taiwanviptravel.com/order/payment/atm.php"}},[e._v("ATM轉帳付款")])],1)],1)],1)],1)],1)],1):e._e()],1)],1)],1)},u=[],d=(r("a15b"),r("b0c0"),r("ac1f"),r("5319"),r("1276"),r("96cf"),r("1da1")),p=r("5530"),b=r("2f62"),E=r("bc3a"),T=r.n(E),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("b-img",{staticClass:"logo mt-2",attrs:{src:r("cf05"),fluid:"",alt:""}}),o("hr",{staticClass:"my-4"})],1)},v=[],_={},I=_,D=(r("8baf"),Object(n["a"])(I,h,v,!1,null,null,null)),y=D.exports,O={components:{Header:y},data:function(){return{itemPrice:0,fields:["商品","數量","小計"],items:[{"商品":"","數量":0,"小計":0},{"商品":"總額","數量":"","小計":0,_cellVariants:{"小計":"important"}}],form:{productCode:"",productName:"",email:"",name:"",phone:"",mobile:"",cityCounty:"臺北市",district:"",address:"",NoOfItem:0,amt:0,receiveDate:"",context:null,receiveTime:"",receiptSelected:"個人",companyTitle:"",taxId:""},NoOfItemOpt:[],receiveTimeOpt:[],cityCountyOpt:[],districtOpt:[],show:!0}},computed:Object(p["a"])(Object(p["a"])({},Object(b["b"])(["GET_ITEMNAME","GET_PRICE","GET_MINORDER","GET_MINMULTIPLE","GET_AVAILABLEORDER","GET_DELIVERYSTARTDATE","GET_DELIVERYENDDATE","GET_CITYCOUNTY","GET_DISTRICT"])),Object(b["c"])(["SET_ITEMNAME","SET_PRICE","SET_MINORDER","SET_MINMULTIPLE","SET_AVAILABLEORDER","SET_DELIVERYSTARTDATE","SET_DELIVERYENDDATE"])),methods:{loadData:function(e){var t=this,r=new Date,o=function(){var o=Object(d["a"])(regeneratorRuntime.mark((function o(){var a,i,n,s,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:for(t.$store.commit("SET_ITEMNAME",e.fieldData.name),t.$store.commit("SET_PRICE",e.fieldData.price_sales),t.$store.commit("SET_MINORDER",e.fieldData.min_per_order),t.$store.commit("SET_MINMULTIPLE",e.fieldData.min_multiple),t.$store.commit("SET_AVAILABLEORDER",e.fieldData.max_per_lunch),r.getHours()<12?(t.$store.commit("SET_DELIVERYSTARTDATE",e.fieldData.API_RESTAURANT_deliverable_date_start-1),t.$store.commit("SET_DELIVERYENDDATE",e.fieldData.API_RESTAURANT_deliverable_date_end+e.fieldData.API_RESTAURANT_deliverable_date_start-1)):(t.$store.commit("SET_DELIVERYSTARTDATE",e.fieldData.API_RESTAURANT_deliverable_date_start),t.$store.commit("SET_DELIVERYENDDATE",e.fieldData.API_RESTAURANT_deliverable_date_end+e.fieldData.API_RESTAURANT_deliverable_date_start)),a=t.GET_MINORDER,i=t.GET_AVAILABLEORDER,n=t.GET_MINMULTIPLE,s=a;s<i;s+=n)t.NoOfItemOpt.push({value:s,text:s});t.form.NoOfItem=a,t.items[0].商品=t.GET_ITEMNAME,t.items[0].數量=a,t.form.amt=t.GET_PRICE*a,t.cityCountyOpt=t.GET_CITYCOUNTY,t.districtOpt=t.GET_DISTRICT.臺北市,t.form.district=t.GET_DISTRICT.臺北市[0],c=JSON.parse(e.fieldData.deliverable_time_json),t.receiveTimeOpt=c.receiveTime,t.form.productCode=t.$route.query.code,t.form.productName=t.GET_ITEMNAME;case 21:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();o(e).then(this.items[0].小計=this.GET_PRICE).then(this.itemPrice=this.GET_PRICE).then(this.items[1].小計=this.itemPrice*this.form.NoOfItem)},dateDisabled:function(e,t){var r=new Date,o=t.getDay(),a=t.getMonth(),i=t.getDate(),n=new Date(r.getFullYear(),r.getMonth(),0).getDate(),s=r.getDate()+parseInt(this.GET_DELIVERYSTARTDATE),c=r.getDate()+parseInt(this.GET_DELIVERYENDDATE);if(c<=n&&a==r.getMonth())return 0===o||6===o||i<s||i>c;if(c<=n&&a<r.getMonth())return i>0;if(c<=n&&a>r.getMonth())return i>0;if(c>n&&a<r.getMonth())return i>0;if(c>n&&a==r.getMonth())return 0===o||6===o||i<s;if(c>n&&a==r.getMonth()+1){var l=c-n;return 0===o||6===o||i>l}if(c>n&&a>r.getMonth()+1){return i>0}},onChangeCityCounty:function(e){this.districtOpt=this.GET_DISTRICT[e],this.form.district=this.GET_DISTRICT[e][0]},onChangeNoOfItem:function(e){this.items[0].數量=e,this.form.amt=this.GET_PRICE*e,this.items[1].小計=this.form.amt},checkForm:function(e){var t=!1;""==this.form.email?(alert("please insert Email"),this.$refs.email.focus(),t=!0):""==this.form.name?(alert("please insert name"),this.$refs.name.focus(),t=!0):""==this.form.mobile?(alert("please insert mobile"),this.$refs.mobile.focus(),t=!0):""==this.form.address?(alert("please insert address"),this.$refs.address.focus(),t=!0):this.form.receiveDate?""==this.form.receiveTime?(alert("please insert receive Time"),this.$refs.receiveTime.focus(),t=!0):"公司"==this.form.receiptSelected&&""==this.form.companyTitle?(alert("please insert 公司抬頭"),this.$refs.companyTitle.focus(),t=!0):"公司"==this.form.receiptSelected&&""==this.form.taxId&&(alert("please insert 統編"),this.$refs.taxId.focus(),t=!0):(alert("please insert receive date"),this.$refs.receiveDate.focus(),t=!0),t&&e.preventDefault()}},mounted:function(){var e=this;void 0==this.$route.query.code&&window.location.replace("https://www.taiwanviptravel.com");var t={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/zonepo/sessions",headers:{Authorization:"Basic QVBJQUNDRVNTOkxmalk4ZF1lR1dyOUg=","Content-Type":"application/json"},data:{}};T()(t).then((function(e){return r(e.data.response.token)}));var r=function(t){var r=JSON.stringify({query:[{product_code:e.$route.query.code}],sort:[{fieldName:"product_code",sortOrder:"ascend"}]}),a={method:"POST",url:"https://ofc.taiwanviptravel.com/fmi/data/v1/databases/zonepo/layouts/API_CUISINE/_find",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},data:r};T()(a).then((function(t){return e.loadData(o(t.data.response.data[0]))}))},o=function(e){var t=JSON.stringify(e),r=t.split("::").join("_"),o=r.replace("\rt","");return JSON.parse(o)}}},R=O,g=(r("cccb"),Object(n["a"])(R,f,u,!1,null,null,null)),A=g.exports;o["default"].use(m["a"]);var S=[{path:"/",name:"Home",component:A}],N=new m["a"]({mode:"history",base:"/siloah-food-order-tappay/",routes:S}),C=N;o["default"].use(b["a"]);var M=new b["a"].Store({state:{itemName:"",itemPrice:0,minOrder:0,minMultiple:0,availableOrder:0,deliveryStartDate:0,deliveryEndDate:0,cityCounty:["臺北市"],district:{"臺北市":["中正區","萬華區","南港區","大同區","信義區","文山區","中山區","士林區","松山區","北投區","大安區","內湖區"],"新臺北":["板橋區","中和區"]}},mutations:{SET_ITEMNAME:function(e,t){e.itemName=t},SET_PRICE:function(e,t){e.itemPrice=t},SET_MINORDER:function(e,t){e.minOrder=t},SET_MINMULTIPLE:function(e,t){e.minMultiple=t},SET_AVAILABLEORDER:function(e,t){e.availableOrder=t},SET_DELIVERYSTARTDATE:function(e,t){e.deliveryStartDate=t},SET_DELIVERYENDDATE:function(e,t){e.deliveryEndDate=t}},getters:{GET_ITEMNAME:function(e){return e.itemName},GET_PRICE:function(e){return e.itemPrice},GET_MINORDER:function(e){return e.minOrder},GET_MINMULTIPLE:function(e){return e.minMultiple},GET_AVAILABLEORDER:function(e){return e.availableOrder},GET_DELIVERYSTARTDATE:function(e){return e.deliveryStartDate},GET_DELIVERYENDDATE:function(e){return e.deliveryEndDate},GET_CITYCOUNTY:function(e){return e.cityCounty},GET_DISTRICT:function(e){return e.district}},actions:{},modules:{}}),w=r("5f5b"),x=r("b1e0"),$=r("a7fe"),L=r.n($);r("f9e3"),r("2dd8");o["default"].use(L.a,T.a),o["default"].use(w["a"]),o["default"].use(x["a"]),o["default"].config.productionTip=!1,new o["default"]({router:C,store:M,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,r){},6860:function(e,t,r){},"8baf":function(e,t,r){"use strict";var o=r("6860"),a=r.n(o);a.a},cccb:function(e,t,r){"use strict";var o=r("5ced"),a=r.n(o);a.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.4f2ab403.png"}});
//# sourceMappingURL=app.06a57a9b.js.map