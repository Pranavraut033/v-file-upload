(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VFileUpload=t():e.VFileUpload=t()})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=7)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n,r,o){var s=new XMLHttpRequest;s.responseType="json",s.open("POST",e,!0),Object.keys(n).forEach(function(e){return s.setRequestHeader(e,n[e])}),s.upload.addEventListener("progress",r,!1),s.onreadystatechange=o;var i=new Promise(function(e,t){s.onload=function(n){return s.status>=200&&s.status<400?e(n):t(n)},s.onerror=function(e){return t(e)}}),a=new FormData;if(t)for(var u=0;u<t.length;u++)a.append("files[]",t.item(u));return s.send(a),i};t.default=r},function(e,t,n){var r=n(4),o=n(0);r.install=function(e){return e.component("file-upload",r)},r.version="1.0.0",e.exports={FileUpload:r,FileUploadService:o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={props:{url:{type:String,required:!0},thumbUrl:{type:Function,required:!0},multiple:{type:Boolean,default:!0},headers:{type:Object,default:function(){return{}}},btnLabel:{type:String,default:"Select a file"},btnUploadingLabel:{type:String,default:"Uploading files"}},data:function(){return{progress:0,anexos:[]}},computed:{uploading:function(){return this.progress>0},progressStyle:function(){return{width:this.progress+"%",display:this.uploading?"block":"none"}},inputWrapperStyle:function(){return{opacity:this.uploading?"0.7":"1"}}},methods:{onChangeInputFile:function(e){var t=this,o=e.target.files||e.dataTransfer.files;o.length&&n.i(r.default)(this.url,o,this.headers,this.onProgress,this.onReadyStateChange).then(function(e){Array.isArray(e.target.response)?t.anexos=t.anexos.concat(e.target.response):t.anexos.push(e.target.response),t.onChangeAnexos(),t.$emit("success",e)}).catch(function(e){t.$emit("error",e)})},onProgress:function(e){this.progress=parseInt(100*e.loaded/e.total),this.$emit("progress",this.progress)},onReadyStateChange:function(e){this.$emit("ready-state-change",e),4==e.target.readyState&&(this.progress=0)},removeAnexo:function(e){this.anexos.splice(this.anexos.indexOf(e),1),this.onChangeAnexos()},onChangeAnexos:function(){this.$emit("change",this.anexos)}}}},function(e,t){},function(e,t,n){n(3);var r=n(5)(n(2),n(6),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var u=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:o,exports:s,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-upload"},[e.anexos.length>0?n("div",{staticClass:"thumb-preview"},e._l(e.anexos,function(t){return n("div",{staticClass:"thumb-preview-item"},[n("label",{staticClass:"red",on:{click:function(n){e.removeAnexo(t)}}},[e._v("×")]),n("img",{attrs:{src:e.thumbUrl(t)}})])})):e._e(),n("div",{staticClass:"input-wrapper",style:e.inputWrapperStyle},[n("input",{attrs:{id:"file-upload-input",type:"file",name:"file",accept:".mp4,.pdf,.png,.jpg",multiple:e.multiple,disabled:e.uploading},on:{change:e.onChangeInputFile}}),n("label",{staticClass:"file-upload-label",attrs:{for:"file-upload-input"}},[n("span",{staticClass:"file-upload-icon fu-spin",class:{"file-upload-icon-pulse":e.uploading}},[e._v("⇪")]),n("div",[e._v(e._s(e.uploading?e.btnUploadingLabel:e.btnLabel))])]),n("div",{staticClass:"file-upload-progress",style:e.progressStyle})])])},staticRenderFns:[]}},function(e,t,n){e.exports=n(1)}])});