(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{477:function(t,e,n){var content=n(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2bc6109a",content,!0,{sourceMap:!1})},484:function(t,e,n){var content=n(532);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("57335474",content,!0,{sourceMap:!1})},486:function(t,e,n){var content=n(537);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("212ad082",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";var r=n(477);n.n(r).a},492:function(t,e,n){(e=n(12)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:gray}",""]),t.exports=e},495:function(t,e,n){"use strict";var r=n(482),o={props:{title:{type:String,required:!0,default:""},icon:{type:String,required:!1,default:""},date:{type:String,required:!1,default:""}},data:function(){return{formattedDate:Object(r.b)(this.date)}}},l=(n(491),n(24)),c=n(52),d=n.n(c),f=n(144),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v("最終更新 ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])])])}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:f.a})},531:function(t,e,n){"use strict";var r=n(484);n.n(r).a},532:function(t,e,n){(e=n(12)(!1)).push([t.i,".DataSelector{margin-top:2px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},536:function(t,e,n){"use strict";var r=n(486);n.n(r).a},537:function(t,e,n){(e=n(12)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.note{padding:8px;font-size:12px;color:gray}",""]),t.exports=e},538:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];isNaN(o)||(n+=o,t.push({label:r,transition:o,cumulative:n}))})),t}},539:function(t,e,n){"use strict";var r=n(25),o=n.n(r),l=[{text:"日付",value:"日付"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}];e.a=function(data){var t={headers:l,datasets:[]};return data.forEach((function(e){var n,r,l,c,d={"日付":null!==(n=o()(e["発表日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["住居地"])&&void 0!==r?r:"不明","年代":null!==(l=e["年代"])&&void 0!==l?l:"不明","性別":null!==(c=e["性別"])&&void 0!==c?c:"不明"};t.datasets.push(d)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}},553:function(t,e,n){var content=n(683);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("56c593ec",content,!0,{sourceMap:!1})},554:function(t,e,n){var content=n(685);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("e5bb1cf8",content,!0,{sourceMap:!1})},555:function(t,e,n){var content=n(689);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("1fb14846",content,!0,{sourceMap:!1})},556:function(t,e,n){var content=n(691);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("22408fde",content,!0,{sourceMap:!1})},558:function(t,e,n){"use strict";n(528);var r=n(25),o=n.n(r),l=n(478),c={name:"DataSelector",props:{value:{type:String,required:!1,default:""}}},d=(n(531),n(24)),f=n(52),h=n.n(f),v=n(561),y=n(709),m=n(159),x=n.n(m),w=n(54),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"transition"}},[t._v("\n    日別\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"cumulative"}},[t._v("\n    累計\n  ")])],1)}),[],!1,null,null,null),D=component.exports;h()(component,{VBtn:v.a,VBtnToggle:y.a}),x()(component,{Ripple:w.a});var S=n(490),k=(n(39),{name:"DateSelectSlider",props:{chartData:{type:Array,required:!0},value:{type:Array,required:!0},sliderMax:{type:Number,required:!0,default:1}},data:function(){var t=this;return{sliderValue:this.value,rules:[function(e){return Math.abs(e[0]-e[1])>14||t.$t("表示期間の最小範囲は１４日間です")}]}},watch:{sliderMax:function(){this.sliderValue=[0,this.sliderMax]},sliderValue:function(t,e){Math.abs(t[0]-t[1])<=14?this.sliderValue=e:this.$emit("sliderInput",t)}},methods:{getSliderLabels:function(t){return this.chartData&&0!==this.chartData.length?o()(this.chartData[t].label).format("M/D"):1}}}),A=n(708),_=Object(d.a)(k,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{staticStyle:{"padding-top":"35px"},attrs:{value:t.sliderValue,label:t.$t("表示期間"),rules:t.rules,max:t.sliderMax,min:0,"thumb-label":"always",color:"#85005d","track-color":"#808080"},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[t._v("\n    "+t._s(t.getSliderLabels(e.value))+"\n  ")]}}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})}),[],!1,null,null,null),C=_.exports;h()(_,{VRangeSlider:A.a});var j={components:{DataView:l.a,DataSelector:D,DataViewBasicInfoPanel:S.a,DateSelectSlider:C},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"time-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""},defaultdatakind:{type:String,required:!1,default:"transition"},sourceText:{type:String,required:!1,default:""},sourceUrl:{type:String,required:!1,default:""},note:{type:String,required:!1,default:""}},data:function(){return{dataKind:this.defaultdatakind,graphRange:[0,this.chartData.length-1]}},computed:{sliderMax:function(){return this.chartData&&0!==this.chartData.length?this.chartData.length-1:1},displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){if("transition"===this.dataKind)return{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"実績値（前日比：".concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit};var t=o()(this.chartData.slice(-1)[0].label).format("M/DD");return{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(t," 累計値（前日比：").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#85005d",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#85005d",borderWidth:0}]}},displayOption:function(){var t=this.unit;return{animation:!1,tooltips:{displayColors:!1,callbacks:{label:function(e){return parseInt(e.value).toLocaleString()+t},title:function(t,data){return o()(data.labels[t[0].index]).format("M月D日")}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",type:"time",offset:!0,time:{tooltipFormat:"MM/DD",unit:"day",unitStepSize:1,displayFormats:{day:"D"},round:"day"},stacked:!0,gridLines:{display:!1},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,minRotation:0}},{id:"month",type:"time",stacked:!0,time:{unit:"month",unitStepSize:1,displayFormats:{month:"YYYY年M月"},round:"day"},gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}}}},methods:{sliderUpdate:function(t){this.graphRange=t},formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}}},M=n(694),L=Object(d.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,date:t.date,"title-id":t.titleId,"source-text":t.sourceText,"source-url":t.sourceUrl,note:t.note},scopedSlots:t._u([{key:"button",fn:function(){return[n("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),n("v-layout",{attrs:{column:""}},[n("bar",{attrs:{"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}})],1)],1)}),[],!1,null,null,null);e.a=L.exports;h()(L,{VLayout:M.a})},559:function(t,e,n){"use strict";var r=n(478),o=n(490),l={components:{DataView:r.a,DataViewBasicInfoPanel:o.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,required:!1,default:function(){}},url:{type:String,required:!1,default:""},sourceText:{type:String,required:!1,default:""},sourceUrl:{type:String,required:!1,default:""}}},c=(n(536),n(24)),d=n(52),f=n.n(d),h=n(696),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url,"source-text":t.sourceText,"source-url":t.sourceUrl},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VDataTable:h.a})},682:function(t,e,n){"use strict";var r=n(553);n.n(r).a},683:function(t,e,n){(e=n(12)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},684:function(t,e,n){"use strict";var r=n(554);n.n(r).a},685:function(t,e,n){(e=n(12)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;margin-bottom:12px}.WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;color:#4d4d4d;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold}.WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew-heading .WhatsNew-link-to-emergency-page{background-color:#ffe200;border:2px solid #ffe200;color:#4d4d4d;border-radius:4px;font-size:1rem;padding:4px 8px}.WhatsNew-heading .WhatsNew-link-to-emergency-page:hover{background-color:#fff;border-radius:4px}.WhatsNew-heading .WhatsNew-link-to-emergency-page .ExternalLink{color:#4d4d4d !important;text-decoration:none}.WhatsNew-heading .WhatsNew-link-to-emergency-page>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #a83945;color:#a83945;cursor:pointer}.WhatsNew-heading .WhatsNew-link-to-emergency-page>span:hover{background-color:#a83945;color:#fff}.WhatsNew-heading .WhatsNew-link-to-emergency-page>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.WhatsNew-heading .WhatsNew-link-to-emergency-page{margin-top:4px}}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:flex;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},686:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t2020/10/10","url":"http://www.pref.nara.jp/item/236490.htm","text":"県内新型コロナウイルス感染者の入院状況について"},{"date":"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t2020/10/10","url":"http://www.pref.nara.jp/item/236491.htm","text":"土砂災害警戒情報の発表について（令和2年10月10日　第10号）"},{"date":"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t2020/10/10","url":"http://www.pref.nara.jp/item/236489.htm","text":"土砂災害警戒情報の発表について（令和2年10月10日　第9号）"},{"date":"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t2020/10/10","url":"http://www.pref.nara.jp/item/236488.htm","text":"土砂災害警戒情報の発表について（令和2年10月10日　第8号）"},{"date":"\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t2020/10/10","url":"http://www.pref.nara.jp/item/236487.htm","text":"土砂災害警戒情報の発表について（令和2年10月10日　第7号）"}]}')},688:function(t,e,n){"use strict";var r=n(555);n.n(r).a},689:function(t,e,n){(e=n(12)(!1)).push([t.i,'ul.remarks[data-v-6c4adb26]{font-size:.75rem;list-style-type:"※ "}',""]),t.exports=e},690:function(t,e,n){"use strict";var r=n(556);n.n(r).a},691:function(t,e,n){(e=n(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-5ea37620]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-5ea37620]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-5ea37620]{padding:4px 8px}}",""]),t.exports=e},697:function(t,e,n){"use strict";n.r(e);var r=n(25),o=n.n(r),l=n(495),c=n(558),d=n(482),f=(n(39),n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}})),h=(n(682),n(24)),v=n(52),y=n.n(v),m=n(144),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize,"aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null),x=component.exports;y()(component,{VIcon:m.a});var w={components:{ExternalLink:x},props:{items:{type:Array,required:!0}},computed:{limitCount:function(){return this.items.slice(0,2)}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(d.a)(t)}}},D=(n(684),Object(h.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"24"}},[t._v("\n        mdi-information\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("span",{staticClass:"WhatsNew-link-to-emergency-page"},[n("v-icon",{staticClass:"WhatsNew-link-to-emergency-page-icon",attrs:{size:"20"}},[t._v("\n        mdi-bullhorn\n      ")]),t._v(" "),n("external-link",{attrs:{url:"http://www.pref.nara.jp/55540.htm"}},[t._v("\n        "+t._s(t.$t("奈良県対処方針（6.05方針）"))+"\n      ")])],1)]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.limitCount,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null)),S=D.exports;y()(D,{VIcon:m.a});var k=n(497),A=n(559),_=n(538),C=n(539),j=n(567),M=n(686),L=n(568),O=(n(17),n(18),n(53),n(528),n(7),n(6),n(42),n(126),n(21)),N=n(36),R=n(30),T=n(26),W=n(15),I=n(29),V=n(70),Y=n(566),z=n.n(Y),P=n(478),B=n(490);n(46),n(8),n(45),n(27),n(62);function E(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw r}}}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(W.a)(t);if(e){var o=Object(W.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(T.a)(this,n)}}var G=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(I.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},U=function(t){Object(R.a)(n,t);var e=$(n);function n(){var t;return Object(O.a)(this,n),(t=e.call(this)).defaultYAxisLeftSetting={suggestedMin:0,unit:"人",visible:!0},t.defaultYAxisRightSetting={visible:!1},t.defaultBarColor="#bd3f4c",t.defaultLineColor="#0070C0",t.plugins=[{beforeDraw:function(e){var n,r,o,l=E(e.legend.legendItems);try{for(l.s();!(o=l.n()).done;){var legend=o.value;if(null!=legend.datasetIndex){var c=t.chartData.datasets[legend.datasetIndex];null!=c.colors&&("bar"===c.type?(legend.fillStyle=null!==(n=c.color)&&void 0!==n?n:t.defaultBarColor,legend.strokeStyle=void 0):"line"===c.type&&(legend.fillStyle=null!==(r=c.color)&&void 0!==r?r:t.defaultLineColor,legend.strokeStyle=void 0))}}}catch(t){l.e(t)}finally{l.f()}}}],t.buildBarDataSets=function(e){var n,r,o;return{type:"bar",yAxisID:null!==(n=e.yAxisKind)&&void 0!==n?n:"y-axis-left",label:e.title,data:e.values,backgroundColor:null!=e.colors?e.colors:null!==(r=e.color)&&void 0!==r?r:t.defaultBarColor,order:null!==(o=e.order)&&void 0!==o?o:0,lineTension:0}},t.buildLineDataSets=function(e){var n,r,o;return{type:"line",yAxisID:null!==(n=e.yAxisKind)&&void 0!==n?n:"y-axis-left",label:e.title,data:e.values,borderColor:null!==(r=e.color)&&void 0!==r?r:t.defaultLineColor,borderWidth:3,borderDash:"dashed"===e.lineStyle?[4,3]:[],pointRadius:0,pointHitRadius:2,fill:!1,order:null!==(o=e.order)&&void 0!==o?o:0,lineTension:0}},t.defaultSpan=60,t.displaySpan=[0,0],t.spanMin=0,t.sliderLabelFormatter=function(t,e){return t?"string"==typeof t?o()(t).format("M/D"):t.map((function(t){return o()(t).format("M/D")}))[e?0:1]:""},t.formatDateLabel=function(t){return("string"==typeof t?[t]:t).map((function(t){return o()(t).format("M/D")})).join("～")},t.displaySpan=[t.chartData.dates.length-t.defaultSpan,t.chartData.dates.length-1],t}return Object(N.a)(n,[{key:"sliderUpdate",value:function(t){this.displaySpan=t}},{key:"onChartDataChanged",value:function(t,e){this.displaySpan=[t.dates.length-this.defaultSpan,t.dates.length-1]}},{key:"displayYAxisLeftSetting",get:function(){var t;return null!==(t=this.yAxisLeftSetting)&&void 0!==t?t:this.defaultYAxisLeftSetting}},{key:"displayYAxisSettings",get:function(){return new Map([["y-axis-left",this.displayYAxisLeftSetting],["y-axis-right",this.displayYAxisRightSetting]])}},{key:"displayYAxisRightSetting",get:function(){var t;return null!==(t=this.yAxisRightSetting)&&void 0!==t?t:this.defaultYAxisRightSetting}},{key:"displayData",get:function(){var t=this,e=this.displayGraphValues.map((function(e){return"bar"===e.type?t.buildBarDataSets(e):t.buildLineDataSets(e)}));return{labels:this.displayGraphLabels,datasets:e}}},{key:"displayOption",get:function(){var t,e,n=this,option={tooltips:{displayColors:!1,callbacks:{label:function(t,e){return void 0===t.index?"":z.a.from(n.chartData.datasets).select((function(e,r){var o,l,c,d,f=(null!==(o=n.chartData.datasets[r].tooltipValues)&&void 0!==o?o:n.chartData.datasets[r].values)[t.index+n.displaySpan[0]],label=e.title,h=e.unit,v=(d=f)===Math.floor(d)?d:Math.round(10*d)/10;return{order:null!==(l=null==e?void 0:e.order)&&void 0!==l?l:0,label:"".concat(label,": ").concat(v," ").concat(h),visible:(null===(c=e.visible)||void 0===c||c)&&!isNaN(f)}})).where((function(t){return t.visible})).orderBy((function(t){var e;return"asc"===(null!==(e=n.legendOrderKind)&&void 0!==e?e:"asc")?t.order:-t.order})).select((function(t){return t.label})).toArray()},title:function(t){try{var e=n.chartData.dates[t[0].index+n.displaySpan[0]];return("string"==typeof e?[e]:e).map((function(t){return o()(t).format("M月D日")})).join("～")}catch(t){return"error"}}}},responsive:!0,maintainAspectRatio:!1,legend:{display:this.chartData.datasets.filter((function(t){var e;return null===(e=t.visible)||void 0===e||e})).length>1,reverse:"desc"===(null!==(t=this.legendOrderKind)&&void 0!==t?t:"asc"),labels:{filter:function(t){var e;return null!=t.datasetIndex&&(null===(e=n.chartData.datasets[t.datasetIndex].legendVisible)||void 0===e||e)}}},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{id:"y-axis-left",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{fontColor:"#808080",min:this.displayYAxisLeftSetting.min,max:this.displayYAxisLeftSetting.max,suggestedMin:this.displayYAxisLeftSetting.suggestedMin,suggestedMax:this.displayYAxisLeftSetting.suggestedMax,stepSize:this.displayYAxisLeftSetting.step,callback:function(t){return"".concat(t).concat(n.displayYAxisLeftSetting.unit)}}},{id:"y-axis-right",display:this.displayYAxisRightSetting.visible&&null!=this.chartData.datasets.find((function(t){var e;return"y-axis-right"===t.yAxisKind&&(null===(e=t.visible)||void 0===e||e)})),type:"linear",position:"right",ticks:{fontColor:"#808080",min:this.displayYAxisRightSetting.min,max:this.displayYAxisRightSetting.max,suggestedMin:this.displayYAxisRightSetting.suggestedMin,suggestedMax:this.displayYAxisRightSetting.suggestedMax,stepSize:this.displayYAxisRightSetting.step,callback:function(t){return"".concat(t).concat(n.displayYAxisRightSetting.unit)}}}]}};null!==(e=this.disableLegendClick)&&void 0!==e&&e&&(option.legend.onClick=void 0);return option}},{key:"spanMax",get:function(){return this.chartData.dates.length-1}},{key:"displayGraphLabels",get:function(){var t=this,e=this.chartData.dates,n=this.displaySpan[0],r=n<e.length?n:0,o=this.displaySpan[1],l=o<e.length?o:e.length-1;return this.chartData.dates.slice(r,l+1).map((function(e){return t.formatDateLabel(e)}))}},{key:"displayGraphValues",get:function(){var t=this.chartData.dates,e=this.displaySpan[0],n=e<t.length?e:0,r=this.displaySpan[1],o=r<t.length?r:t.length-1;return this.chartData.datasets.filter((function(t){var e;return null===(e=t.visible)||void 0===e||e})).map((function(t){var e=Object.assign({},t);return e.values=t.values.slice(n,o+1),null!=t.colors&&(e.colors=t.colors.slice(n,o+1)),e}))}}]),n}(V.c);G([Object(V.b)()],U.prototype,"chartId",void 0),G([Object(V.b)()],U.prototype,"chartData",void 0),G([Object(V.b)()],U.prototype,"legendOrderKind",void 0),G([Object(V.b)()],U.prototype,"yAxisLeftSetting",void 0),G([Object(V.b)()],U.prototype,"yAxisRightSetting",void 0),G([Object(V.b)()],U.prototype,"disableLegendClick",void 0),G([Object(V.d)("chartData")],U.prototype,"onChartDataChanged",null);var F=U=G([Object(V.a)({components:{}})],U),H=Object(h.a)(F,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("bar",{attrs:{"chart-id":this.chartId,"chart-data":this.displayData,options:this.displayOption,height:240,plugins:this.plugins}})],1)}),[],!1,null,null,null).exports;function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(W.a)(t);if(e){var o=Object(W.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(T.a)(this,n)}}var Q,X=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(I.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},Z=Q=function(t){Object(R.a)(n,t);var e=J(n);function n(){var t;return Object(O.a)(this,n),(t=e.call(this)).yAxisLeftSetting={min:0,unit:"人",visible:!0},t.yAxisRightSetting={suggestedMin:0,suggestedMax:20,step:5,unit:"%",visible:!0},t.showSelector=!0,t.dataKind="daily-transition",t.chartDataSet=new Map,t.formatDayBeforeRatio=function(t){var e,n=null!==(e=null==t?void 0:t.toLocaleString())&&void 0!==e?e:"-",r=1===Math.sign(t)?"+":"";return"".concat(r).concat(n)},t.formatDateLabel=function(t){return("string"==typeof t?[t]:t).map((function(t){return o()(t).format("M/D")})).join("～")},t.buildDailyTransitionGraphData=function(){var e,n=o()(),r=Q.makeAveragePositivePerPatients(null!==(e=t.dailyData)&&void 0!==e?e:[]).where((function(t){return t.date<n})).select((function(t){var e;return void 0!==t.persons&&void 0!==t.positives&&(e=t.persons-t.positives),{date:t.date.format("YYYY-MM-DD"),persons:t.persons,positives:t.positives,negatives:e,average:t.average,uncertain:t.uncertain?1:0,change:!1}})).reverse().scan((function(pre,t){var e;return t.change=1==((null!==(e=null==pre?void 0:pre.uncertain)&&void 0!==e?e:0)^t.uncertain),t})).reverse();return{dates:r.select((function(t){return t.date})).toArray(),datasets:[{type:"bar",title:"検査人数",yAxisKind:"y-axis-left",unit:"人",values:r.select((function(t){return t.uncertain?void 0:t.negatives})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?void 0:t.persons})).toArray(),color:"#D99694",order:5},{type:"bar",title:"検査人数",yAxisKind:"y-axis-left",unit:"人",values:r.select((function(t){return t.uncertain?t.negatives:void 0})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?t.persons:void 0})).toArray(),color:"#D99694",order:4,legendVisible:!1},{type:"bar",title:"陽性者数",yAxisKind:"y-axis-left",unit:"人",values:r.select((function(t){return t.positives})).toArray(),order:3},{type:"line",title:"陽性率",yAxisKind:"y-axis-right",unit:"%",values:r.select((function(t){return!t.uncertain||t.change?t.average:void 0})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?void 0:t.average})).toArray(),tags:r.select((function(t){return t.uncertain})).toArray(),order:2},{type:"line",title:"陽性率",yAxisKind:"y-axis-right",unit:"%",values:r.select((function(t){return t.uncertain||t.change?t.average:void 0})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?t.average:void 0})).toArray(),lineStyle:"dashed",order:1,legendVisible:!1}]}},t.buildWeeklyTransitionGraphData=function(){var e,n=o()(),r=Y.from(null!==(e=t.weeklyData)&&void 0!==e?e:[]).where((function(t){return o()(t["開始日"])<n&&o()(t["開始日"])>=o()("2020-03-02")})).select((function(t){var e,n,r,l;return{date:[o()(t["開始日"]).format("YYYY-MM-DD"),o()(t["終了日"]).format("YYYY-MM-DD")],persons:t["検査人数"],positives:t["陽性者数"],negatives:(null!==(e=t["検査人数"])&&void 0!==e?e:0)-(null!==(n=t["陽性者数"])&&void 0!==n?n:0),average:(null!==(r=t["陽性者数"])&&void 0!==r?r:0)/(null!==(l=t["検査人数"])&&void 0!==l?l:0)*100,uncertain:""!==t["非確定"]?1:0,change:!1}})).reverse().scan((function(pre,t){var e;return t.change=1==((null!==(e=null==pre?void 0:pre.uncertain)&&void 0!==e?e:0)^t.uncertain),t})).reverse();return{dates:r.select((function(t){return t.date})).toArray(),datasets:[{type:"bar",title:"検査人数",yAxisKind:"y-axis-left",unit:"人",values:r.select((function(t){return t.uncertain?void 0:t.negatives})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?void 0:t.persons})).toArray(),color:"#D99694",order:5},{type:"bar",title:"検査人数",yAxisKind:"y-axis-left",unit:"人",values:r.select((function(t){return t.uncertain?t.negatives:void 0})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?t.persons:void 0})).toArray(),color:"#D99694",order:4,legendVisible:!1},{type:"bar",title:"陽性者数",yAxisKind:"y-axis-left",unit:"人",values:r.select((function(t){return t.positives})).toArray(),order:3},{type:"line",title:"陽性率",yAxisKind:"y-axis-right",unit:"%",values:r.select((function(t){return!t.uncertain||t.change?t.average:void 0})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?void 0:t.average})).toArray(),tags:r.select((function(t){return t.uncertain})).toArray(),order:2},{type:"line",title:"陽性率",yAxisKind:"y-axis-right",unit:"%",values:r.select((function(t){return t.uncertain||t.change?t.average:void 0})).toArray(),tooltipValues:r.select((function(t){return t.uncertain?t.average:void 0})).toArray(),lineStyle:"dashed",order:1,legendVisible:!1}]}},t.chartDataSet.set("daily-transition",t.buildDailyTransitionGraphData()),t.chartDataSet.set("weekly-transition",t.buildWeeklyTransitionGraphData()),t}return Object(N.a)(n,[{key:"remarks",get:function(){return["「陽性率＝陽性者数／新たな検査対象者数」で計算し７日間の移動平均で表示","計算例：　4/30の陽性率＝（4/24～4/30の各日の陽性率の計）÷７","計算に用いる「陽性者数」「新たな検査対象者数」は結果判明日ベースで整理"]}},{key:"displayTitle",get:function(){return"陽性率・検査実施人数"}},{key:"displayDiffValue",get:function(){var t,e,n=this.chartData.datasets[3],r=this.chartData.datasets[4];if(void 0===n.values.slice(-2)[0]&&void 0===r.values.slice(-2)[0])return"-";var o=Math.round(10*(null!==(t=n.values.slice(-1)[0])&&void 0!==t?t:r.values.slice(-1)[0]))/10,l=Math.round(10*(null!==(e=n.values.slice(-2)[0])&&void 0!==e?e:r.values.slice(-2)[0]))/10;return null==o||null==l?"-":this.formatDayBeforeRatio(o-l)}},{key:"displayInfo",get:function(){var t,e,n,r,o;if((null!==(n=null===(e=null===(t=this.chartData)||void 0===t?void 0:t.datasets)||void 0===e?void 0:e.length)&&void 0!==n?n:0)<=0)return{lText:"-",sText:"-",unit:""};var l=this.chartData.datasets[3],c=this.chartData.datasets[4],d=null!==(o=(Math.round(10*(null!==(r=l.values.slice(-1)[0])&&void 0!==r?r:c.values.slice(-1)[0]))/10).toLocaleString())&&void 0!==o?o:"-",f=(null==l.tags||l.tags.slice(-1)[0],""),h="weekly-transition"===this.dataKind?"前週比":"前日比",v=this.formatDateLabel(this.chartData.dates.slice(-1)[0]);return{lTitle:"陽性率",lText:"".concat(d),sText:"".concat(v," 時点").concat(f,"（").concat(h,"：").concat(this.displayDiffValue," ポイント）"),unit:"".concat(l.unit)}}},{key:"chartData",get:function(){var data=this.chartDataSet.get(this.dataKind);return data||{dates:[],datasets:[]}}}]),n}(V.c);Z.makeAveragePositivePerPatients=function(data){var source=Y.from(data).reverse();return source.select((function(t){return t["日付"]})).select((function(t,e){return source.skip(e).take(7)})).select((function(t){var e=t.first();return{date:o()(o()(e["日付"]).format("YYYY-MM-DD")),positives:Number(e["陽性者数"]),persons:Number(e["検査人数"]),average:100*Number(e["陽性率"]),uncertain:t.any((function(t){return""!==t["非確定"]}))}})).reverse()},X([Object(V.b)()],Z.prototype,"date",void 0),X([Object(V.b)()],Z.prototype,"dailyData",void 0),X([Object(V.b)()],Z.prototype,"weeklyData",void 0);var tt=Z=Q=X([Object(V.a)({components:{DataView:P.a,DataViewBasicInfoPanel:B.a,TimeBarLineChart:H}})],Z),et=(n(688),Object(h.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.displayTitle,"title-id":"inspection-count-chart",date:t.date,"source-text":"奈良県のオープンデータを利用","source-url":"http://www.pref.nara.jp/55168.htm",remarks:t.remarks},scopedSlots:t._u([{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-title":t.displayInfo.lTitle,"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[n("time-bar-line-chart",{attrs:{"chart-id":"inspection-count-chart","chart-data":t.chartData,"legend-order-kind":"desc","y-axis-left-setting":t.yAxisLeftSetting,"y-axis-right-setting":t.yAxisRightSetting,"disable-legend-click":"true"}}),t._v(" "),n("div",[n("ul",{staticClass:"remarks"},t._l(t.remarks,(function(e){return n("li",{directives:[{name:"sanitaize",rawName:"v-sanitaize"}],key:e,domProps:{innerHTML:t._s(e)}})})),0)])],1)}),[],!1,null,"6c4adb26",null).exports),at={components:{PageHeader:l.a,TimeBarChart:c.a,WhatsNew:S,ConfirmedCasesDetailsCard:j.a,DataTable:A.a,InspectionPersonsChart:et,PatientsAndSickbeds:L.a},data:function(){var t=Object(_.a)(k.patients_summary.data),e=Object(C.a)(k.patients.data),n=Object(_.a)(k.inspections.data),r={lText:t[t.length-1].cumulative.toLocaleString(),sText:o()(t[t.length-1].label).format("M/D")+"の累計",unit:"人"},data={Data:k,patientsTable:e,patientsGraph:t,inspectionsGraph:n,sumInfoOfPatients:r,headerItem:{icon:"mdi-chart-timeline-variant",title:"奈良県内の最新感染動向",date:k.lastUpdate},newsItems:M.newsItems,metroGraphOption:{responsive:!0,legend:{display:!0},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){return t.toFixed(2)+"%"}}}]},tooltips:{displayColors:!1,callbacks:{title:function(t,e){var label=t[0].label;return"期間: ".concat(label)},label:function(t,data){var e=data.datasets[t.datasetIndex],n="".concat(e.data[t.index],"%");return"利用者数との相対値: ".concat(n)}}}}};return data},head:function(){return{title:"奈良県内の最新感染動向"}}},it=(n(690),n(473)),nt=n(474),st=Object(h.a)(at,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card",{attrs:{"source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}}),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"陽性者数","title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":t.patientsGraph,date:t.Data.patients_summary.date,unit:"人",url:"http://www.pref.nara.jp/","source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("data-table",{attrs:{title:"陽性者の属性","title-id":"attributes-of-confirmed-cases","chart-data":t.patientsTable,"chart-option":{},date:t.Data.patients.date,info:t.sumInfoOfPatients,url:"http://www.pref.nara.jp/","source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"PCR検査実施数","title-id":"number-of-tested","chart-id":"time-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections.date,unit:"件","source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("inspection-persons-chart",{attrs:{date:t.Data.inspection_persons_summary.date,"daily-data":t.Data.inspection_persons_summary.data,"source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用"}})],1),t._v(" "),n("patients-and-sickbeds",{attrs:{"source-url":"http://www.pref.nara.jp/55168.htm","source-text":"奈良県のオープンデータを利用",date:t.Data.sickbeds_summary.date}})],1)],1)}),[],!1,null,"5ea37620",null);e.default=st.exports;y()(st,{VCol:it.a,VRow:nt.a})}}]);