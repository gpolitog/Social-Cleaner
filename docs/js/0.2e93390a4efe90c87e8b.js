webpackJsonp([0],{110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(124),r=n(153),s=n(42),i=s(o.a,r.a,!1,null,null,null);e.default=i.exports},111:function(t,e,n){"use strict";function o(t,e,n,o,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;console.log("Add log"),s.a.dispatch("addLog",{social_name:t,social_icon:r(t),header:e,message:n,icon:o,color:i,link:a,time:null})}function r(t){switch(t){case i:return"fa-facebook";case a:return"fa-twitter";case c:return"fa-vk";default:return""}}n.d(e,"f",function(){return i}),n.d(e,"g",function(){return a}),n.d(e,"h",function(){return c}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return f}),n.d(e,"d",function(){return p}),n.d(e,"e",function(){return h}),e.i=o,e.j=r;var s=n(43),i="Facebook",a="Twitter",c="VK",l="positive",u="negative",f="info",p="vpn_key",h="dashboard"},112:function(t,e,n){"use strict";function o(t,e){return e.v=u,e.access_token||(e.access_token=s.a.state.vk.token),r.a.http.jsonp(a+t,{method:"GET",params:e})}n.d(e,"d",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return u}),e.b=o;var r=n(3),s=n(43),i="https://oauth.vk.com/authorize/",a="https://api.vk.com/method/",c="https://oauth.vk.com/blank.html",l=6244330,u="5.69"},117:function(t,e,n){"use strict";function o(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o}),this.resolve=r(e),this.reject=r(n)}var r=n(45);t.exports.f=function(t){return new o(t)}},124:function(t,e,n){"use strict";function o(t){return new i.a(function(e){return setTimeout(e,t)})}function r(t,e){return Math.round(t-.5+Math.random()*(e-t+1))}var s=n(138),i=n.n(s),a=n(111),c=n(112),l=n(29);e.a={components:{QSpinnerCube:l.D,QField:l.l,QChipsInput:l.j,QInput:l.n,QBtn:l.c,QRange:l.x,QCard:l.d,QCardTitle:l.g,QCardSeparator:l.f,QIcon:l.m,QCardMain:l.e,QTooltip:l.K,QList:l.t,QItem:l.o,QItemSide:l.q,QItemMain:l.p,QSelect:l.B,QCollapsible:l.k,QChip:l.i,QTabs:l.G,QTab:l.E,QTabPane:l.F,QCheckbox:l.h,QRadio:l.w,QToggle:l.H},data:function(){return{init:!1,posts:[],groups:[],comments:[],likes:[],reposts:{on:!1,count:0,equal:0},views:{on:!1,count:0,equal:0},fNoDeletePost:"",fNoDeleteGroup:"",checkDeleteGroup:!0,pass:50,maxCount:0,range:{min:1,max:0},globalFilter:"all",selectGlobalFilters:[{label:"Posts by the wall owner and others",value:"all"},{label:"Posts by the wall owner",value:"owner"},{label:"Posts by someone else",value:"others"}],stopDeleting:!1,processDelete:!1,processRefresh:!1,dialogDelete:!1}},activated:function(){this.init||(this.init=!0,this.fetchGetCountPosts())},computed:{countPosts:function(){return 1===this.maxCount?1:this.range.max-this.range.min+1},countPostsConfig:function(){return this.posts.length+this.groups.length+this.comments.length+this.likes.length+this.reposts.length}},methods:{fetchGetCountPosts:function(){var t=this;this.processRefresh=!0,Object(c.b)("wall.get",{count:1,filter:this.globalFilter}).then(function(e){e.body.response?(t.maxCount=e.body.response.count,t.range.min=1,t.range.max=t.maxCount,t.$store.dispatch("vkSetUserCounter",{key:"wall",val:t.maxCount})):l.L.create.negative({html:e.body.error?e.body.error.error_msg:"Error: Get Wall"}),t.processRefresh=!1},function(e){t.processRefresh=!1})},fetchGetPostsForDelete:function(t){var e=this;if(this.processDelete=!0,t<1)return this.stopDelete(!0,"Delete complete");Object(c.b)("wall.get",{offset:this.range.min>this.maxCount?this.maxCount:this.range.min,count:t>this.pass?this.pass:t,filter:this.globalFilter}).then(function(n){if(n.body.response&&n.body.response.items.length)return Object(a.i)(a.h,"Receiving posts..","Request to VK",a.e,a.a),e.fetchDeletePost(n.body.response.items,0,t);e.stopDelete(!1,n.body.error?n.body.error.error_msg:"Stop deleting")},function(t){e.stopDelete(!1)})},fetchDeletePost:function(t,e,n){var s=this;if(this.stopDeleting)return this.stopDeleting=!1,this.fetchGetPostsForDelete(0);if(void 0===t[e])return this.fetchGetPostsForDelete(n-this.pass);var i=t[e];delete t[e];var l=this.filterSkipGeneral(i);if(l)return Object(a.i)(a.h,"Skipped: "+i.id,l,a.e,a.c),this.range.min<this.range.max&&this.range.min++,this.fetchDeletePost(t,++e,n);o(r(500,2500)).then(function(){Object(c.b)("wall.delete",{post_id:i.id}).then(function(o){return o.body.response?(Object(a.i)(a.h,"Deleted id: "+i.id,null,a.e,a.c),s.$store.dispatch("vkCounterUserDecrement","wall"),s.maxCount--,s.range.max--):Object(a.i)(a.h,"Skipped: "+i.id,null,a.e,a.b),s.fetchDeletePost(t,++e,n)},function(t){s.stopDelete(!1)})})},openDialogDelete:function(){var t=this;this.processDelete=!1,l.a.create({title:"Delete posts",message:"Are you sure you want to delete posts?<br><b>It is impossible to restore!</b>",buttons:[{label:"Cancel",color:"negative"},{label:"Delete",handler:function(){t.fetchGetPostsForDelete(t.countPosts)}}]})},actionStopDeleting:function(){this.stopDeleting=!0,Object(a.i)(a.h,"Stopping..",null,a.e,a.a)},stopDelete:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Stop deleting";this.processDelete=!1,Object(a.i)(a.h,e,null,a.e,t?a.c:a.b),t?l.L.create.positive({html:e}):l.L.create.negative({html:e})},filterSkipGeneral:function(t){return this.filterSkipByPostsIds(t)?"Post id":this.filterSkipByReposts(t)?"Reposts":this.filterSkipByViews(t)?"Views":""},filterSkipByPostsIds:function(t){return this.posts.indexOf(t.id)>-1},filterSkipByReposts:function(t){if(!this.reposts.on)return!1;var e=t.reposts.count;switch(this.reposts.equal){case-1:return e<this.reposts.count;case 0:return e===this.reposts.count;case 1:return e>this.reposts.count;default:return!1}},filterSkipByViews:function(t){if(void 0===t.views&&!this.views.on)return!1;var e=t.views.count;switch(this.views.equal){case-1:return e<this.views.count;case 0:return e===this.views.count;case 1:return e>this.views.count;default:return!1}},addNoDeletePostId:function(){var t=this,e=this.fNoDeletePost;this.fNoDeletePost="";var n=parseInt(e),o=this.$store.state.vk.user.id;if(!n){var r=e.indexOf("wall"+o+"_");if(!(n=parseInt(e.substring(r+o.toString().length+5))))return Object(a.i)(a.h,"Post: "+n,"Not found",a.e,a.b)}if(this.posts.indexOf(n)>-1)return Object(a.i)(a.h,"Post: "+n,"Already added",a.e,a.a);Object(c.b)("wall.getById",{posts:o+"_"+n}).then(function(e){e.body.response[0]?t.posts.push(n):Object(a.i)(a.h,"Post: "+n,"Not found",a.e,a.b)})},closePostChip:function(t){this.posts.splice(t,1)},goPost:function(t){window.open("https://vk.com/wall"+this.$store.state.vk.user.id+"_"+t)},goGroup:function(t){window.open("https://vk.com/public"+t)}},watch:{globalFilter:function(){this.fetchGetCountPosts()}}}},125:function(t,e,n){var o=n(31),r=n(2)("toStringTag"),s="Arguments"==o(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),r))?n:s?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},126:function(t,e,n){var o=n(9),r=n(45),s=n(2)("species");t.exports=function(t,e){var n,i=o(t).constructor;return void 0===i||void 0==(n=o(i)[s])?e:r(n)}},127:function(t,e,n){var o,r,s,i=n(44),a=n(146),c=n(48),l=n(32),u=n(0),f=u.process,p=u.setImmediate,h=u.clearImmediate,d=u.MessageChannel,v=u.Dispatch,m=0,b={},g=function(){var t=+this;if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},_=function(t){g.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++m]=function(){a("function"==typeof t?t:Function(t),e)},o(m),m},h=function(t){delete b[t]},"process"==n(31)(f)?o=function(t){f.nextTick(i(g,t,1))}:v&&v.now?o=function(t){v.now(i(g,t,1))}:d?(r=new d,s=r.port2,r.port1.onmessage=_,o=i(s.postMessage,s,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",_,!1)):o="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(i(g,t,1),0)}),t.exports={set:p,clear:h}},128:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},129:function(t,e,n){var o=n(9),r=n(10),s=n(117);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=s.f(t);return(0,n.resolve)(e),n.promise}},138:function(t,e,n){t.exports={default:n(139),__esModule:!0}},139:function(t,e,n){n(50),n(46),n(49),n(140),n(151),n(152),t.exports=n(14).Promise},140:function(t,e,n){"use strict";var o,r,s,i,a=n(16),c=n(0),l=n(44),u=n(125),f=n(30),p=n(10),h=n(45),d=n(141),v=n(142),m=n(126),b=n(127).set,g=n(147)(),_=n(117),y=n(128),w=n(129),x=c.TypeError,k=c.process,q=c.Promise,P="process"==u(k),D=function(){},C=r=_.f,S=!!function(){try{var t=q.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(D,D)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(D)instanceof e}catch(t){}}(),j=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},Q=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var o=t._v,r=1==t._s,s=0;n.length>s;)!function(e){var n,s,i=r?e.ok:e.fail,a=e.resolve,c=e.reject,l=e.domain;try{i?(r||(2==t._h&&R(t),t._h=1),!0===i?n=o:(l&&l.enter(),n=i(o),l&&l.exit()),n===e.promise?c(x("Promise-chain cycle")):(s=j(n))?s.call(n,a,c):a(n)):c(o)}catch(t){c(t)}}(n[s++]);t._c=[],t._n=!1,e&&!t._h&&F(t)})}},F=function(t){b.call(c,function(){var e,n,o,r=t._v,s=O(t);if(s&&(e=y(function(){P?k.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)}),t._h=P||O(t)?2:1),t._a=void 0,s&&e.e)throw e.v})},O=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,o=0;n.length>o;)if(e=n[o++],e.fail||!O(e.promise))return!1;return!0},R=function(t){b.call(c,function(){var e;P?k.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},G=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),Q(e,!0))},T=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw x("Promise can't be resolved itself");(e=j(t))?g(function(){var o={_w:n,_d:!1};try{e.call(t,l(T,o,1),l(G,o,1))}catch(t){G.call(o,t)}}):(n._v=t,n._s=1,Q(n,!1))}catch(t){G.call({_w:n,_d:!1},t)}}};S||(q=function(t){d(this,q,"Promise","_h"),h(t),o.call(this);try{t(l(T,this,1),l(G,this,1))}catch(t){G.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(148)(q.prototype,{then:function(t,e){var n=C(m(this,q));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&Q(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),s=function(){var t=new o;this.promise=t,this.resolve=l(T,t,1),this.reject=l(G,t,1)},_.f=C=function(t){return t===q||t===i?new s(t):r(t)}),f(f.G+f.W+f.F*!S,{Promise:q}),n(17)(q,"Promise"),n(149)("Promise"),i=n(14).Promise,f(f.S+f.F*!S,"Promise",{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(a||!S),"Promise",{resolve:function(t){return w(a&&this===i?q:this,t)}}),f(f.S+f.F*!(S&&n(150)(function(t){q.all(t).catch(D)})),"Promise",{all:function(t){var e=this,n=C(e),o=n.resolve,r=n.reject,s=y(function(){var n=[],s=0,i=1;v(t,!1,function(t){var a=s++,c=!1;n.push(void 0),i++,e.resolve(t).then(function(t){c||(c=!0,n[a]=t,--i||o(n))},r)}),--i||o(n)});return s.e&&r(s.v),n.promise},race:function(t){var e=this,n=C(e),o=n.reject,r=y(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return r.e&&o(r.v),n.promise}})},141:function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},142:function(t,e,n){var o=n(44),r=n(143),s=n(144),i=n(9),a=n(47),c=n(145),l={},u={},e=t.exports=function(t,e,n,f,p){var h,d,v,m,b=p?function(){return t}:c(t),g=o(n,f,e?2:1),_=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(s(b)){for(h=a(t.length);h>_;_++)if((m=e?g(i(d=t[_])[0],d[1]):g(t[_]))===l||m===u)return m}else for(v=b.call(t);!(d=v.next()).done;)if((m=r(v,g,d.value,e))===l||m===u)return m};e.BREAK=l,e.RETURN=u},143:function(t,e,n){var o=n(9);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var s=t.return;throw void 0!==s&&o(s.call(t)),e}}},144:function(t,e,n){var o=n(15),r=n(2)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||s[r]===t)}},145:function(t,e,n){var o=n(125),r=n(2)("iterator"),s=n(15);t.exports=n(14).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||s[o(t)]}},146:function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},147:function(t,e,n){var o=n(0),r=n(127).set,s=o.MutationObserver||o.WebKitMutationObserver,i=o.process,a=o.Promise,c="process"==n(31)(i);t.exports=function(){var t,e,n,l=function(){var o,r;for(c&&(o=i.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){i.nextTick(l)};else if(s){var u=!0,f=document.createTextNode("");new s(l).observe(f,{characterData:!0}),n=function(){f.data=u=!u}}else if(a&&a.resolve){var p=a.resolve();n=function(){p.then(l)}}else n=function(){r.call(o,l)};return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},148:function(t,e,n){var o=n(4);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},149:function(t,e,n){"use strict";var o=n(0),r=n(14),s=n(5),i=n(6),a=n(2)("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:o[t];i&&e&&!e[a]&&s.f(e,a,{configurable:!0,get:function(){return this}})}},150:function(t,e,n){var o=n(2)("iterator"),r=!1;try{var s=[7][o]();s.return=function(){r=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var s=[7],i=s[o]();i.next=function(){return{done:n=!0}},s[o]=function(){return i},t(s)}catch(t){}return n}},151:function(t,e,n){"use strict";var o=n(30),r=n(14),s=n(0),i=n(126),a=n(129);o(o.P+o.R,"Promise",{finally:function(t){var e=i(this,r.Promise||s.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},152:function(t,e,n){"use strict";var o=n(30),r=n(117),s=n(128);o(o.S,"Promise",{try:function(t){var e=r.f(this),n=s(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},153:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticStyle:{margin:"0"},attrs:{flat:""}},[n("q-card-title",[n("q-icon",{attrs:{name:"dashboard"}}),t._v(" Wall\n    "),n("q-btn",{attrs:{slot:"right",flat:"",round:"",small:"",color:"primary",loader:""},on:{click:function(e){t.fetchGetCountPosts()}},slot:"right",model:{value:t.processRefresh,callback:function(e){t.processRefresh=e},expression:"processRefresh"}},[n("q-icon",{attrs:{name:"refresh"}}),t._v(" "),n("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle"}},[t._v("Refresh")])],1)],1),t._v(" "),n("q-card-main",[n("q-card",{staticStyle:{"margin-bottom":"2rem"}},[n("q-card-title",[t._v("\n        Config\n        "),n("div",{staticClass:"row items-center",attrs:{slot:"right"},slot:"right"},[t.maxCount<1?[t._v("No posts")]:t.range.min===t.range.max?[t._v("Delete the post #"+t._s(t.range.min))]:[t._v("Delete the post from "+t._s(t.range.min)+" to "+t._s(t.range.max))]],2)]),t._v(" "),n("q-card-separator"),t._v(" "),n("q-card-main",[n("q-select",{staticStyle:{"margin-bottom":"1.5rem"},attrs:{options:t.selectGlobalFilters},model:{value:t.globalFilter,callback:function(e){t.globalFilter=e},expression:"globalFilter"}}),t._v(" "),t.maxCount>1?[n("q-list",[n("q-item",[n("q-item-side",[t._v("Range")]),t._v(" "),n("q-item-main",[n("q-range",{attrs:{min:1,disabled:t.processDelete,max:t.maxCount,step:1,label:""},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}})],1)],1)],1)]:t._e()],2)],1),t._v(" "),n("q-card",{staticStyle:{"margin-bottom":"2rem"},attrs:{flat:""}},[n("q-card-title",[t._v("\n        Filter (Do not delete posts by these parameters)\n        "),n("div",{staticClass:"row items-center",attrs:{slot:"right"},slot:"right"},[t._v("\n          "+t._s(t.countPostsConfig)+"\n        ")])]),t._v(" "),n("q-card-separator"),t._v(" "),n("q-card-main",[n("q-tabs",{attrs:{inverted:""}},[n("q-tab",{attrs:{slot:"title",default:"",count:t.posts.length,name:"tab-1",icon:"description"},slot:"title"}),t._v(" "),n("q-tab",{attrs:{slot:"title",count:t.reposts.length,name:"tab-5",icon:"fa-bullhorn"},slot:"title"}),t._v(" "),n("q-tab",{attrs:{slot:"title",alert:t.views.on,name:"tab-6",icon:"remove_red_eye"},slot:"title"}),t._v(" "),n("q-tab-pane",{attrs:{name:"tab-1"}},[n("q-field",{staticStyle:{"margin-bottom":"2rem"},attrs:{label:"Skip posts","label-width":2,helper:"Only for your account."}},[n("q-input",{attrs:{disabled:t.processDelete,placeholder:"Id or link to post"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addNoDeletePostId()}},model:{value:t.fNoDeletePost,callback:function(e){t.fNoDeletePost=e},expression:"fNoDeletePost"}})],1),t._v(" "),t._l(t.posts,function(e,o){return n("q-chip",{key:o,staticStyle:{margin:"0 5px 5px 0",cursor:"pointer"},attrs:{small:"",color:"primary",title:"Follow the link",closable:""},on:{close:function(e){t.closePostChip(o)},click:function(n){t.goPost(e)}}},[t._v("\n              "+t._s(e)+"\n            ")])})],2),t._v(" "),n("q-tab-pane",{attrs:{name:"tab-5"}},[n("q-toggle",{attrs:{label:"Enable"},model:{value:t.reposts.on,callback:function(e){t.$set(t.reposts,"on",e)},expression:"reposts.on"}}),t._v(" "),n("q-input",{staticStyle:{margin:"1.5rem 0"},attrs:{disabled:!t.reposts.on,type:"number","float-label":"Count reposts"},model:{value:t.reposts.count,callback:function(e){t.$set(t.reposts,"count",e)},expression:"reposts.count"}}),t._v(" "),n("q-radio",{attrs:{disabled:!t.reposts.on,val:-1,color:"red",label:"Less"},model:{value:t.reposts.equal,callback:function(e){t.$set(t.reposts,"equal",e)},expression:"reposts.equal"}}),t._v(" "),n("q-radio",{staticStyle:{"margin-left":"10px"},attrs:{disabled:!t.reposts.on,val:0,color:"black",label:"Equal"},model:{value:t.reposts.equal,callback:function(e){t.$set(t.reposts,"equal",e)},expression:"reposts.equal"}}),t._v(" "),n("q-radio",{staticStyle:{"margin-left":"10px"},attrs:{disabled:!t.reposts.on,val:1,color:"primary",label:"More"},model:{value:t.reposts.equal,callback:function(e){t.$set(t.reposts,"equal",e)},expression:"reposts.equal"}})],1),t._v(" "),n("q-tab-pane",{attrs:{name:"tab-6"}},[n("q-toggle",{attrs:{label:"Enable"},model:{value:t.views.on,callback:function(e){t.$set(t.views,"on",e)},expression:"views.on"}}),t._v(" "),n("q-input",{staticStyle:{margin:"1.5rem 0"},attrs:{disabled:!t.views.on,type:"number","float-label":"Count views"},model:{value:t.views.count,callback:function(e){t.$set(t.views,"count",e)},expression:"views.count"}}),t._v(" "),n("q-radio",{attrs:{disabled:!t.views.on,val:-1,color:"red",label:"Less"},model:{value:t.views.equal,callback:function(e){t.$set(t.views,"equal",e)},expression:"views.equal"}}),t._v(" "),n("q-radio",{staticStyle:{"margin-left":"10px"},attrs:{disabled:!t.views.on,val:0,color:"black",label:"Equal"},model:{value:t.views.equal,callback:function(e){t.$set(t.views,"equal",e)},expression:"views.equal"}}),t._v(" "),n("q-radio",{staticStyle:{"margin-left":"10px"},attrs:{disabled:!t.views.on,val:1,color:"primary",label:"More"},model:{value:t.views.equal,callback:function(e){t.$set(t.views,"equal",e)},expression:"views.equal"}})],1)],1)],1)],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"1.5rem"}},[t.processDelete?n("q-btn",{staticClass:"full-width",attrs:{icon:"stop",outline:"",disabled:!t.processDelete||t.stopDeleting},on:{click:function(e){t.actionStopDeleting()}}},[t._v("\n        Stop\n      ")]):n("q-btn",{staticClass:"full-width",attrs:{icon:"delete",color:"red",outline:"",disabled:t.countPosts<1},nativeOn:{click:function(e){t.openDialogDelete()}},model:{value:t.processDelete,callback:function(e){t.processDelete=e},expression:"processDelete"}},[t._v("\n        Delete\n      ")])],1)],1)],1)},r=[],s={render:o,staticRenderFns:r};e.a=s}});