(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28726b30"],{"3b2b":function(e,t,i){var o=i("7726"),a=i("5dbc"),n=i("86cc").f,l=i("9093").f,s=i("aae3"),r=i("0bfb"),d=o.RegExp,c=d,u=d.prototype,g=/a/g,m=/a/g,h=new d(g)!==g;if(i("9e1e")&&(!h||i("79e5")((function(){return m[i("2b4c")("match")]=!1,d(g)!=g||d(m)==m||"/a/i"!=d(g,"i")})))){d=function(e,t){var i=this instanceof d,o=s(e),n=void 0===t;return!i&&o&&e.constructor===d&&n?e:a(h?new c(o&&!n?e.source:e,t):c((o=e instanceof d)?e.source:e,o&&n?r.call(e):t),i?this:u,d)};for(var f=function(e){e in d||n(d,e,{configurable:!0,get:function(){return c[e]},set:function(t){c[e]=t}})},p=l(c),b=0;p.length>b;)f(p[b++]);u.constructor=d,d.prototype=u,i("2aba")(o,"RegExp",d)}i("7a56")("RegExp")},4661:function(e,t,i){},5217:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{padding:"1rem"}},[i("div",[i("el-button",{attrs:{size:"mini",icon:"el-icon-plus",type:"primary"},on:{click:function(t){return e.addFun()}}},[e._v("添加")]),e._v(" "),e.checkedAll?i("el-button",{staticClass:"el-icon-delete",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.delAll()}}},[e._v("批量删除")]):e._e()],1),e._v(" "),i("el-table",{ref:"multipleTable",staticClass:"orderList_goods",staticStyle:{width:"100%","margin-top":"1rem"},attrs:{size:"small",border:"",data:e.list,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"平台名称",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{prop:"xgoodsType",label:"平台图片地址",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{label:"商品图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("img",{staticStyle:{height:"50px",width:"80px"},attrs:{onerror:e.defaultImg,src:t.row.img},on:{click:function(i){return e.scal(t.row.img)}}})]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),i("el-table-column",{attrs:{prop:"updateTime",label:"修改时间"}}),e._v(" "),i("el-table-column",{attrs:{align:"center","min-width":"120",label:"操作","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(i){return e.edit(t.row)}}}),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(i){return e.del(t.$index,t.row)}}})]}}])})],1),e._v(" "),i("el-row",{staticStyle:{"margin-bottom":"2rem"}},[i("el-col",{staticClass:"toolbar",attrs:{span:12}},[i("el-pagination",{attrs:{"page-sizes":[10,20,50,100],"page-size":e.size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),i("div",[i("el-dialog",{attrs:{"close-on-click-modal":!1,width:"40%",title:e.diaTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:function(t){return e.close()}}},[i("el-form",{ref:"goodsForm",attrs:{rules:e.rules,model:e.goodsForm}},[i("el-form-item",{attrs:{label:"平台名称",prop:"name","label-width":e.formLabelWidth}},[i("el-input",{model:{value:e.goodsForm.name,callback:function(t){e.$set(e.goodsForm,"name",t)},expression:"goodsForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"平台Logo",prop:"file","label-width":e.formLabelWidth}},[i("el-upload",{ref:"upload",class:{hide:e.hideUpload},attrs:{action:"http://192.168.0.120/commity/getadd","http-request":e.upLoadFile,"list-type":"picture-card","file-list":e.ad_url_list,limit:1,data:e.imgData,"on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"on-change":e.handleImgChange}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirm()}}},[e._v("确 定")])],1)],1)],1),e._v(" "),i("div",[i("el-dialog",{attrs:{center:"",title:"详细图片",visible:e.imgVisible,width:"40%"},on:{"update:visible":function(t){e.imgVisible=t}}},[i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticStyle:{width:"500px"},attrs:{src:e.thisGoodsImg}})]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.imgVisible=!1}}},[e._v("确 定")])],1)])],1),e._v(" "),i("div",[i("el-dialog",{attrs:{center:"",title:"编辑器",visible:e.wangVisible,width:"40%"},on:{"update:visible":function(t){e.wangVisible=t}}},[i("div",{staticStyle:{"text-align":"center"}},[i("div",{attrs:{id:"wangedit"}})]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.imgVisible=!1}}},[e._v("确 定")])],1)])],1)],1)},a=[],n=(i("7f7f"),i("da29")),l=i("ed08"),s={data:function(){return{list:[],files:[],diaTitle:"",defaultImg:'this.src="'+i("a102")+'"',goodsForm:{name:"",file:"",id:""},rules:{name:[{required:!0,message:"平台名称不能为空",trigger:"blur"}]},imgVisible:!1,thisGoodsImg:"",imgData:{},imgInfo:{file:""},total:0,size:10,pageNo:1,multipleSelection:[],checkedAll:!1,dialogFormVisible:!1,formLabelWidth:"100px",dialogImageUrl:"",dialogVisible:!1,ad_url_list:[],limitCount:1,hideUpload:!1,wangVisible:!1}},mounted:function(){this.getList()},methods:{search:function(){this.pageNo=1,this.getList()},getList:function(){var e=this,t={currPage:this.pageNo,pageSize:this.size};Object(n["E"])(t).then((function(t){0===t.data.code?(e.list=t.data.data.records,e.size=t.data.data.size,e.total=t.data.data.total,e.list.map((function(e){var t=new Date(e.createTime),i=new Date(e.updateTime);e.createTime=Object(l["b"])(t),e.updateTime=Object(l["b"])(i),e.img=n["imgIp"]+e.img}))):(e.total=0,e.list=[],e.$message({type:"error",message:t.data.msg,duration:1e3}))}))},handleSelectionChange:function(e){e.length>0?this.checkedAll=!0:this.checkedAll=!1,this.multipleSelection=e},addFun:function(){this.diaTitle="新增商品",this.dialogFormVisible=!0},delAll:function(){var e=this;this.$confirm("此操作将永久删除当前选中积分专区, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=[];e.multipleSelection.map((function(e){t.push(e.id)}));var i=t;Object(n["v"])(i).then((function(t){0===t.data.code?(e.$message({type:"success",message:t.data.msg,duration:1e3}),e.getList()):e.$message({type:"error",message:t.data.msg,duration:1e3})}))}))},del:function(e,t){var i=this;this.$confirm("此操作将永久删除当前选中积分专区, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=[];e.push(t.id);var o=e;Object(n["v"])(o).then((function(e){0===e.data.code?i.$message({type:"success",message:"删除成功!",duration:100}):i.$message({type:"error",message:e.data.msg,duration:1e3}),i.getList()}))})).catch((function(){i.$message({type:"info",message:"已取消删除"})}))},edit:function(e){if(this.diaTitle="修改商品",this.goodsForm={name:e.name,file:e.file,id:e.id},this.dialogFormVisible=!0,null==e.img)this.hideUpload=!0;else{this.imgInfo.file=e.file,this.ad_url_list=[];var t={};t.name=e.name+".jpg",t.url=e.img,this.ad_url_list.push(t),this.hideUpload=!0}},close:function(){this.dialogFormVisible=!1,this.$refs.upload.clearFiles(),this.hideUpload=!1,this.goodsForm={name:"",file:""},this.resetForm("goodsForm")},scal:function(e){console.log(e,33333),this.imgVisible=!0,this.thisGoodsImg=e},handleRemove:function(e,t){this.hideUpload=t.length>=this.limitCount},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleImgChange:function(e,t){this.hideUpload=t.length>=this.limitCount},upLoadFile:function(e){console.log(e,2121);var t=e.file.size/1048576;if(t>9)return this.$message({type:"error",message:"上传图片过大",duration:2e3}),this.ad_url_list=[],void(this.hideUpload=!1);this.goodsForm.file=e.file},confirm:function(){var e=this;this.$refs["goodsForm"].validate((function(t){if(!t)return!1;if("新增商品"===e.diaTitle){var i=new FormData;i.append("name",e.goodsForm.name),i.append("file",e.goodsForm.file),console.log(i),Object(n["e"])(i).then((function(t){0===t.data.code?(e.$message({type:"success",message:t.data.msg,duration:1e3}),e.dialogFormVisible=!1):e.$message({type:"error",message:t.data.msg,duration:1e3}),e.getList()}))}else if("修改商品"===e.diaTitle){var o=new FormData;o.append("name",e.goodsForm.name),o.append("file",e.goodsForm.file),o.append("id",e.goodsForm.id),Object(n["Eb"])(o).then((function(t){0===t.data.code?(e.dialogFormVisible=!1,e.getList()):e.$message({type:"error",message:t.data.msg,duration:1e3})}))}}))},resetForm:function(e){void 0!==this.$refs[e]&&this.$refs[e].resetFields()},handleCurrentChange:function(e){this.pageNo=e,this.getList()},handleSizeChange:function(e){this.size=e,this.getList()}}},r=s,d=(i("d44b"),i("2877")),c=Object(d["a"])(r,o,a,!1,null,null,null);t["default"]=c.exports},a102:function(e,t,i){e.exports=i.p+"static/img/null.66f62a69.png"},d44b:function(e,t,i){"use strict";var o=i("4661"),a=i.n(o);a.a},ed08:function(e,t,i){"use strict";i("3b2b"),i("28a5"),i("a481"),i("6b54");function o(e,t){e=void 0===e?new Date:e,e="number"===typeof e?new Date(e):e,t=t||"yyyy-MM-dd HH:mm:ss";var i={y:e.getFullYear(),M:e.getMonth()+1,d:e.getDate(),q:Math.floor((e.getMonth()+3)/3),w:e.getDay(),H:e.getHours(),h:e.getHours()%12===0?12:e.getHours()%12,m:e.getMinutes(),s:e.getSeconds(),S:e.getMilliseconds()},o=["天","一","二","三","四","五","六"];for(var a in i)t=t.replace(new RegExp(a+"+","g"),(function(e){var t=i[a]+"";if("w"===a)return(e.length>2?"星期":"周")+o[t];for(var n=0,l=t.length;n<e.length-l;n++)t="0"+t;return 1===e.length?t:t.substring(t.length-e.length)}));return t}function a(e){var t=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),a=e.getHours(),n=e.getMinutes(),l=e.getSeconds();return t+"-"+i+"-"+o+" "+a+":"+n+":"+l}i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return a}))}}]);