(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95a6bfde","chunk-5241b4d2"],{"333d":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[i("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];i("c5f6");Math.easeInOutQuad=function(t,e,i,o){return t/=o/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,i){var o=l(),a=t-o,r=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=r;var l=Math.easeInOutQuad(c,o,a,e);s(l),c<e?n(t):i&&"function"===typeof i&&i()};d()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},d=c,u=(i("dfcf"),i("2877")),g=Object(u["a"])(d,o,a,!1,null,"ef53c196",null);e["default"]=g.exports},"372e":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"1rem"}},[i("div",[i("el-button",{attrs:{size:"mini",icon:"el-icon-plus",type:"primary"},on:{click:function(e){return t.addFun()}}},[t._v("添加")])],1),t._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"1rem"},attrs:{size:"small",border:"",data:t.tableData3,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{attrs:{label:"积分Id"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.Id))]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"Title",label:"积分标题"}}),t._v(" "),i("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{staticStyle:{height:"50px",width:"80px"},attrs:{onerror:t.defaultImg,src:e.row.PhotoUrl},on:{click:function(i){return t.scal(e.row.PhotoUrl)}}})]}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),i("div",[i("el-dialog",{attrs:{"close-on-click-modal":!1,width:"40%",title:t.diaTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:function(e){return t.close()}}},[i("el-form",{ref:"coreEntity",attrs:{rules:t.rules,model:t.coreEntity}},[i("el-form-item",{attrs:{label:"积分标题",prop:"Title","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.coreEntity.Title,callback:function(e){t.$set(t.coreEntity,"Title",e)},expression:"coreEntity.Title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"图片",prop:"iid","label-width":t.formLabelWidth}},[i("el-upload",{ref:"upload",class:{hide:t.hideUpload},attrs:{action:"http://192.168.0.102/commity/getadd","http-request":t.upLoadFile,"list-type":"picture-card","file-list":t.ad_url_list,limit:1,data:t.imgData,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"on-change":t.handleImgChange}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.close()}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.confirm()}}},[t._v("确 定")])],1)],1)],1),t._v(" "),i("div",[i("el-dialog",{attrs:{center:"",title:"详细图片",visible:t.imgVisible,width:"40%"},on:{"update:visible":function(e){t.imgVisible=e}}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"500px"},attrs:{src:t.thisGoodsImg}})]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.imgVisible=!1}}},[t._v("确 定")])],1)])],1),t._v(" "),i("div",[i("el-dialog",{attrs:{center:"",title:"编辑器",visible:t.wangVisible,width:"40%"},on:{"update:visible":function(e){t.wangVisible=e}}},[i("div",{staticStyle:{"text-align":"center"}},[i("div",{attrs:{id:"wangedit"}})]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.imgVisible=!1}}},[t._v("确 定")])],1)])],1)],1)},a=[],n=(i("ac6a"),i("333d")),s=i("d815"),l=i("1a0b"),r=i.n(l),c={components:{Pagination:n["default"]},data:function(){return{formData:{},tableData3:[],iid:"",iids:[],diaTitle:"",defaultImg:'this.src="'+i("a102")+'"',coupons:[],coreEntity:{Title:"",cname:"",Photo:""},rules:{},imgVisible:!1,thisGoodsImg:"",total:0,imgData:{},listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},imgInfo:{uuid:"",iid:""},multipleSelection:[],checkedAll:!1,dialogFormVisible:!1,formLabelWidth:"100px",dialogImageUrl:"",dialogVisible:!1,ad_url_list:[],limitCount:1,hideUpload:!1,wangVisible:!1}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$axios.post(s["a"].integralChannel.getList).then((function(e){200===e.data.Code?(t.tableData3=e.data.Data,t.tableData3.map((function(t){t.PhotoUrl=s["a"].picUrl+t.Photo}))):t.$message({type:"error",message:e.data.Msg,duration:1e3})}))},toggleSelection:function(t){var e=this;t?t.forEach((function(t){e.$refs.multipleTable.toggleRowSelection(t)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){t.length>0?this.checkedAll=!0:this.checkedAll=!1,this.multipleSelection=t},addFun:function(){this.diaTitle="新增商品",this.dialogFormVisible=!0,this.formData=new FormData},delAll:function(){var t=this;this.$confirm("此操作将永久删除所有商品记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"删除成功!",duration:1e3})})).catch((function(){t.$message({type:"info",message:"已取消删除",duration:1e3})}))},edit:function(t){this.diaTitle="修改商品";var e=t.goodsType;1===e?this.coupons=this.coupons1:2===e&&(this.coupons=this.coupons2),this.goodsEntity={cid:t.cid,cflag:t.cflag,cname:t.cname,flag:t.flag,iid:t.iid,goodsType:t.goodsType,goodsTypeCoupon:t.goodsTypeCoupon},this.imgInfo.iid=t.iid,this.ad_url_list=[];var i={};i.name=t.cname+".jpg",i.url=t.iimg,this.ad_url_list.push(i),this.dialogFormVisible=!0,this.hideUpload=!0},del:function(t){var e=this;this.$confirm("此操作将永久删除该商品记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$axios.post(s["a"].goodsInfo.delGoodsInfo,{cid:t.cid}).then((function(t){console.log(t),200===t.data.code?(e.$message({type:"success",message:t.data.msg,duration:1e3}),e.getList()):e.$message({type:"error",message:t.data.msg,duration:1e3})}))})).catch((function(){e.$message({type:"info",message:"已取消删除",duration:1e3})}))},close:function(){this.dialogFormVisible=!1,this.$refs.upload.clearFiles(),this.hideUpload=!1,this.goodsEntity={cname:"",cflag:"",iid:"",goodsType:"",goodsTypeCoupon:""},this.resetForm("goodsEntity")},scal:function(t){this.imgVisible=!0,this.thisGoodsImg=t},handleRemove:function(t,e){},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleImgChange:function(t,e){this.hideUpload=e.length>=this.limitCount},upLoadFile:function(t){this.formData.append("Photo",t.file),console.log(t)},change:function(t){1===t?(this.coupons=this.coupons1,this.goodsEntity.goodsTypeCoupon=this.coupons1[0].value):2===t&&(this.coupons=this.coupons2,this.goodsEntity.goodsTypeCoupon=this.coupons2[0].value)},wang:function(){this.wangVisible=!1,this.editor=new r.a("#wangedit"),this.editor.change=function(){console.log(this.txt.html())},this.editor.create(),this.editor.txt.html("<p>输入内容...</p>")},confirm:function(){var t=this;console.log(this.formData),"新增商品"===this.diaTitle?(this.formData.append("Title",this.coreEntity.Title),this.$axios.post(s["a"].integralChannel.add,this.formData).then((function(e){200===e.data.Code?(t.$message({type:"success",message:e.data.msg,duration:1e3}),t.dialogFormVisible=!1,t.getList()):t.$message({type:"error",message:e.data.msg,duration:1e3}),t.formData={}}))):"修改商品"===this.diaTitle&&(this.goodsEntity.iid=this.imgInfo.iid,this.$axios.post(s["a"].goodsInfo.editGoodsInfo,this.goodsEntity).then((function(e){200===e.data.code?(t.$message({type:"success",message:e.data.msg,duration:1e3}),t.dialogFormVisible=!1,t.getList()):t.$message({type:"error",message:e.data.msg,duration:1e3})})))},resetForm:function(t){void 0!==this.$refs[t]&&this.$refs[t].resetFields()}}},d=c,u=(i("be56"),i("2877")),g=Object(u["a"])(d,o,a,!1,null,null,null);e["default"]=g.exports},"64c4":function(t,e,i){},a102:function(t,e,i){t.exports=i.p+"static/img/null.66f62a69.png"},be56:function(t,e,i){"use strict";var o=i("64c4"),a=i.n(o);a.a},cd86:function(t,e,i){},dfcf:function(t,e,i){"use strict";var o=i("cd86"),a=i.n(o);a.a}}]);