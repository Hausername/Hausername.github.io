(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-061f08b6","chunk-5241b4d2"],{"051e":function(e,t,a){},2387:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"1rem"}},[a("div",{staticClass:"filter"},[a("div",[e._v("\n      手机号  \n      "),a("el-input",{staticClass:"input1",attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.Search,callback:function(t){e.Search=t},expression:"Search"}})],1),e._v(" "),a("div",[e._v("\n      开始时间  \n      "),a("el-date-picker",{staticClass:"input1",attrs:{size:"small",format:"yyyy-MM-dd 00:00:00",type:"date",placeholder:"选择日期"},model:{value:e.Start,callback:function(t){e.Start=t},expression:"Start"}})],1),e._v(" "),a("div",[e._v("\n      结束时间  \n      "),a("el-date-picker",{staticClass:"input1",attrs:{size:"small",format:"yyyy-MM-dd 23:59:59",type:"date",placeholder:"选择日期"},model:{value:e.End,callback:function(t){e.End=t},expression:"End"}})],1),e._v(" "),a("div",[e._v("\n      状态  \n      "),a("el-select",{staticClass:"input1",attrs:{size:"small",placeholder:"请选择"},model:{value:e.Status,callback:function(t){e.Status=t},expression:"Status"}},[a("el-option",{key:"",attrs:{label:"全部",value:""}}),e._v(" "),e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],2)],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:function(t){return e.getList()}}},[e._v("查询")])],1)]),e._v(" "),a("div",[e.checkedAll?a("el-button",{staticClass:"el-icon-edit",attrs:{size:"small",type:"danger"},on:{click:function(t){return e.hexiao()}}},[e._v("批量核销")]):e._e(),e._v(" "),e.checkedAll?a("el-button",{staticClass:"el-icon-edit",attrs:{size:"small",type:"warning"},on:{click:function(t){return e.shenhe()}}},[e._v("批量审核")]):e._e()],1),e._v(" "),a("div",{staticStyle:{"margin-top":"1rem"}},[a("div",{staticClass:"mine"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"small",border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"Name",label:"积分商品"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"Money",label:"商品面额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Phone",label:"兑换人手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Tel",label:"申报人手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Nickname",label:"上报人名称"}}),e._v(" "),a("el-table-column",{attrs:{width:"55",prop:"Fid",label:"一级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Ordernumber",label:"订单编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Disone",label:"一级返佣"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Distwo",label:"二级返佣"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Discountone",label:"一级折扣%"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Discounttwo",label:"二级折扣%"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"StatusName",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Timeline",label:"创建时间"}}),e._v(" "),a("el-table-column",{staticClass:"make",attrs:{align:"center",prop:"handle",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"审核",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-zoom-in",circle:""},on:{click:function(a){return e.check(t.row)}}})],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"核销",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-info",circle:""},on:{click:function(a){return e.hx(t.row)}}})],1)]}}])})],1)],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}})],1),e._v(" "),a("div",{staticClass:"show"},[a("el-dialog",{attrs:{width:"40%","close-on-click-modal":!1,title:e.diaTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeDialog}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules1,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"申报号码",prop:"sbnumbe"}},["新增申报信息"===e.diaTitle?a("el-input",{attrs:{placeholder:"请输入申报号码"},model:{value:e.ruleForm.sbnumbe,callback:function(t){e.$set(e.ruleForm,"sbnumbe",t)},expression:"ruleForm.sbnumbe"}}):e._e(),e._v(" "),"编辑申报信息"===e.diaTitle?a("el-input",{attrs:{disabled:"",placeholder:"请输入申报号码"},model:{value:e.ruleForm.sbnumbe,callback:function(t){e.$set(e.ruleForm,"sbnumbe",t)},expression:"ruleForm.sbnumbe"}}):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"兑换号码",prop:"dhnumbe"}},[a("el-input",{attrs:{placeholder:"请输入兑换号码"},model:{value:e.ruleForm.dhnumbe,callback:function(t){e.$set(e.ruleForm,"dhnumbe",t)},expression:"ruleForm.dhnumbe"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"积分名称",prop:"gid"}},[a("el-select",{attrs:{placeholder:"请选择积分档"},model:{value:e.ruleForm.gid,callback:function(t){e.$set(e.ruleForm,"gid",t)},expression:"ruleForm.gid"}},e._l(e.coreLevel,(function(e){return a("el-option",{key:e.id,attrs:{label:e.gname,value:e.gid}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"套餐名称",prop:"sid"}},[a("el-select",{attrs:{placeholder:"请选择套餐名称"},model:{value:e.ruleForm.sid,callback:function(t){e.$set(e.ruleForm,"sid",t)},expression:"ruleForm.sid"}},e._l(e.packages,(function(e){return a("el-option",{key:e.id,attrs:{label:e.sname,value:e.sid}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否提交",prop:"sflag"}},[a("el-radio",{attrs:{label:1},model:{value:e.ruleForm.sflag,callback:function(t){e.$set(e.ruleForm,"sflag",t)},expression:"ruleForm.sflag"}},[e._v("申报")]),e._v(" "),a("el-radio",{attrs:{label:2},model:{value:e.ruleForm.sflag,callback:function(t){e.$set(e.ruleForm,"sflag",t)},expression:"ruleForm.sflag"}},[e._v("申报中")]),e._v(" "),a("el-radio",{attrs:{label:3},model:{value:e.ruleForm.sflag,callback:function(t){e.$set(e.ruleForm,"sflag",t)},expression:"ruleForm.sflag"}},[e._v("申报失败")]),e._v(" "),a("el-radio",{attrs:{label:4},model:{value:e.ruleForm.sflag,callback:function(t){e.$set(e.ruleForm,"sflag",t)},expression:"ruleForm.sflag"}},[e._v("申报成功")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeDialog()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1)],1)])},i=[],s=(a("ac6a"),a("d815")),n=a("333d"),o=a("c1df"),r=a.n(o),u={data:function(){var e=function(e,t,a){console.log("验证触发了吗",t);var l=/^1[3456789]\d{9}$/;""===t?a(new Error("号码不能为空")):l.test(t)?a():a(new Error("请输入正确的手机号码                                                                   "))};return{checkedAll:!1,input:"",diaTitle:"",tableData:[],coreLevel:[],packages:[],multipleSelection:[],currentPage4:4,total:0,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},dialogFormVisible:!1,ruleForm:{dhnumbe:"",sbnumbe:"",gid:"",sid:"",sflag:""},rules1:{dhnumbe:[{required:!0,message:"兑换号码不能为空"},{validator:e,trigger:"blur"}],sbnumbe:[{required:!0,message:"申报号码不能为空"},{validator:e,trigger:"blur"}],gid:[{required:!0,message:"积分名称不能为空"}],sid:[{required:!0,message:"套餐名称不能为空"}],sflag:[{required:!0,message:"提交状态不能为空"}]},Start:"",End:"",Search:"",Status:"",options:[{value:"1",label:"核销中"},{value:"2",label:"核销通过"},{value:"3",label:"核销失败"},{value:"4",label:"审核通过"}]}},mounted:function(){this.init()},methods:{init:function(){var e=new Date;this.Start=r()(e).format("YYYY-MM-DD 00:00:00"),this.End=r()(e).format("YYYY-MM-DD 23:59:59")},getCoreLevel:function(){var e=this;this.$axios.post(s["a"].declInfo.queryCoreLevel).then((function(t){200===t.status&&(e.coreLevel=t.data)}))},getPackageName:function(){var e=this;this.$axios.post(s["a"].declInfo.queryPackageClass).then((function(t){e.packages=t.data}))},getList:function(){var e=this;null!==this.Start&&""!==this.Start&&void 0!==this.Start&&(this.Start=r()(this.Start).format("YYYY-MM-DD 00:00:00")),null==this.Start&&(this.Start=""),null==this.End&&(this.End=""),null!==this.End&&""!==this.End&&void 0!==this.End&&(this.End=r()(this.End).format("YYYY-MM-DD 23:59:59"));var t=new FormData;t.append("Search",this.Search),t.append("Start",this.Start),t.append("End",this.End),t.append("Status",this.Status),t.append("Page",this.listQuery.page),t.append("Num",this.listQuery.limit),this.$axios.post(s["a"].orderList.getList,t).then((function(t){if(200===t.data.Code){e.tableData=t.data.Data.data,e.total=t.data.Data.total,e.tableData.map((function(e){1===e.Status?e.StatusName="核销中":2===e.Status?e.StatusName="核销通过":3===e.Status?e.StatusName="核销失败":4===e.Status&&(e.StatusName="审核通过")}));var a=e.tableData.length;0===a&&e.listQuery.page>1&&(e.listQuery.page-=1,e.getList())}}))},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){e.length>0?this.checkedAll=!0:this.checkedAll=!1,this.multipleSelection=e},addMessage:function(){this.diaTitle="新增申报信息",this.dialogFormVisible=!0},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;"新增申报信息"===t.diaTitle?t.$axios.post(s["a"].declInfo.declInfoAdd,t.ruleForm).then((function(e){200===e.data.code?(t.$message({type:"success",message:e.data.msg,duration:1e3}),t.getList(),t.dialogFormVisible=!1):t.$message({type:"error",message:e.data.msg,duration:1e3})})):"编辑申报信息"===t.diaTitle&&t.$axios.post(s["a"].declInfo.declIOnfoEdit,t.ruleForm).then((function(e){200===e.data.code?(t.$message({type:"success",message:e.data.msg,duration:1e3}),t.getList(),t.dialogFormVisible=!1):t.$message({type:"error",message:e.data.msg,duration:1e3})}))}))},edit:function(e){this.diaTitle="编辑申报信息",this.ruleForm={did:e.did,dhnumbe:e.dhnumbe,sbnumbe:e.sbnumbe,gid:e.gid,sid:e.sid,sflag:e.sflag},this.dialogFormVisible=!0},closeDialog:function(){this.ruleForm={did:"",dhnumbe:"",sbnumbe:"",gid:"",sid:"",sflag:""},this.resetForm("ruleForm"),this.dialogFormVisible=!1},resetForm:function(e){void 0!==this.$refs[e]&&this.$refs[e].resetFields()},hexiao:function(){var e=this;console.log(this.multipleSelection);var t="",a=this.multipleSelection.length;this.multipleSelection.map((function(e,l){a==l+1?t+=e.Id:t=t+e.Id+","}));var l=new FormData;l.append("Oid",t),this.$axios.post(s["a"].orderList.audit,l).then((function(t){200===t.data.Code?(e.$message({type:"success",message:t.data.Msg,duration:1e3}),e.getList()):e.$message({type:"error",message:t.data.Msg,duration:1e3})}))},shenhe:function(){var e=this;console.log(this.multipleSelection);var t="",a=this.multipleSelection.length;this.multipleSelection.map((function(e,l){a==l+1?t+=e.Id:t=t+e.Id+","}));var l=new FormData;l.append("Oid",t),this.$axios.post(s["a"].orderList.write,l).then((function(t){200===t.data.Code?(e.$message({type:"success",message:t.data.Msg,duration:1e3}),e.getList()):e.$message({type:"error",message:t.data.Msg,duration:1e3})}))},check:function(e){var t=this,a=new FormData;a.append("Oid",e.Id),this.$axios.post(s["a"].orderList.write,a).then((function(e){200===e.data.Code?(t.$message({type:"success",message:e.data.Msg,duration:1e3}),t.getList()):t.$message({type:"error",message:e.data.Msg,duration:1e3})}))},hx:function(e){var t=this,a=new FormData;a.append("Oid",e.Id),this.$axios.post(s["a"].orderList.audit,a).then((function(e){200===e.data.Code?(t.$message({type:"success",message:e.data.Msg,duration:1e3}),t.getList()):t.$message({type:"error",message:e.data.Msg,duration:1e3})}))}},components:{Pagination:n["default"]}},c=u,d=(a("6ac0"),a("2877")),m=Object(d["a"])(c,l,i,!1,null,"2d8a08f3",null);t["default"]=m.exports},"333d":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,l){return e/=l/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,a){var l=o(),i=e-l,r=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=r;var o=Math.easeInOutQuad(u,l,i,t);n(o),u<t?s(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&r(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},c=u,d=(a("dfcf"),a("2877")),m=Object(d["a"])(c,l,i,!1,null,"ef53c196",null);t["default"]=m.exports},"6ac0":function(e,t,a){"use strict";var l=a("051e"),i=a.n(l);i.a},cd86:function(e,t,a){},dfcf:function(e,t,a){"use strict";var l=a("cd86"),i=a.n(l);i.a}}]);