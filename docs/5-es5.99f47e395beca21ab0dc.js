function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,o=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=_superPropBase(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{D57K:function(e,t,r){"use strict";function n(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{s(n.next(e))}catch(t){o(t)}}function a(e){try{s(n.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}s((n=n.apply(e,t||[])).next())}))}r.d(t,"a",(function(){return n}))},doNb:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("sUYu"),i=r("EM62"),o=r("vobO"),u=function(){var e=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var i;return _classCallCheck(this,r),(i=t.call(this,Object.assign(Object.assign({},n.d),{serverUrl:"http://localhost:3000/v1",sourceUrl:"/sys/tenants"}),e)).query=new n.e(new n.c({pageSize:5})),i}return r}(n.b);return e.\u0275fac=function(t){return new(t||e)(i.Yb(o.b))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e}()},sUYu:function(e,t,r){"use strict";r.d(t,"a",(function(){return D})),r.d(t,"b",(function(){return z})),r.d(t,"c",(function(){return L})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return U}));var n=r("D57K"),i=r("EM62"),o=r("YtkY"),u=(r("TLy2"),r("J+dc"),r("ZTXN"));r("pBDD"),r("mW0F"),r("cJ9h"),r("BwBJ");var a=r("xVbo"),s=r("8j5Y"),c=(r("Ohay"),r("wqq/"),r("4e/d")),l=r("ruxD"),h=(r("47ST"),r("ROBh")),f=r("Ti3e"),p=r("C05f"),y=r("6Oco"),g=r("i9xl"),b=r("P4Xx"),v=r("eY+9"),d=r("FlRo"),C=r("vobO");function _(e){return null!=e&&(Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){e.hasOwnProperty(t)&&null!=e[t]&&"object"==typeof e[t]&&!Object.isFrozen(e[t])&&_(e[t])}))),e}r("W1gw");var k=function(e){return e.default="",e.json=".json",e.html=".html",e.csv=".csv",e}({}),O={storagePrefix:"idg-",maxCacheAge:21e3,retryCount:5,dateFormat:"YYYY-MM-DD",retryDelayMs:1e3,serverUrl:null};function m(e,t){for(var r=[],n=function(){var n=o[i];if(null!=e[n]&&""!==e[n]&&"pageIndex"!==n&&"pageSize"!==n&&"childUrl"!==n&&"useCache"!==n&&"baseUrl"!==n&&"format"!==n&&"orderBy"!==n){if("false"!==e[n].toString().toLowerCase())try{if(e[n]._isAMomentObject)r.push(n.toLowerCase()+"="+e[n].format(t||"YYYY-MM-DD"));else if(Object(v.a)(e[n])){var u=[];e[n].forEach((function(e){u.push("".concat(n,"[]=").concat(e))})),r.push(u.join("&"))}else r.push(n.toLowerCase()+"="+e[n])}catch(a){r.push(n.toLowerCase()+"="+e[n])}}else"orderBy"===n?r.push("order_by="+JSON.stringify(e[n])):"pageIndex"===n?r.push("page_index="+e[n]):"pageSize"===n&&r.push("page_size="+e[n])},i=0,o=Object.keys(e);i<o.length;i++)n();return"?".concat(r.join("&"))}function w(e,t,r){var n,i="".concat(e.serverUrl).concat(t.baseUrl?t.baseUrl:e.sourceUrl).concat(r||"").concat(t.format);if(t)for(var o=0,u=Object.keys(t);o<u.length;o++){var a=u[o];"orderBy"!==(n=a)&&"format"!==n&&""!==n&&S(t[a])&&(i=i.replace(":".concat(a),t[a]._isAMomentObject?t[a].format(e.dateFormat):t[a]))}return i+(t?m(t,e.dateFormat):"")}function S(e){return null!=e}var j,P,x,I=function(){function e(t){_classCallCheck(this,e),this.useCache=!0,this.format=t.format||k.json,this.pageIndex=t.pageIndex||0,this.pageSize=t.pageSize||10,this.orderBy=t.orderBy||null,this.childUrl=t.childUrl||"",this.accumulate=t.accumulate,this.baseUrl=t.baseUrl||"",this.useCache=t.useCache,this.token=t.token||"",this.q=t.q||""}return _createClass(e,[{key:"duplicate",value:function(t){return new e(Object.assign(Object.assign({},this),t||{}))}},{key:"toQueryParams",value:function(){return m(this)}}]),e}(),Q=((x=function(){function e(t){_classCallCheck(this,e),this.ar=t,this.unsubscribeAll=new u.a}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}},{key:"urlParams",get:function(){return this.ar.paramMap.pipe(Object(o.a)((function(e){return e.params})))}}]),e}()).\u0275fac=function(e){i.bc()},x.\u0275dir=i.Jb({type:x}),x),A=((P=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n,i){var o;return _classCallCheck(this,r),(o=t.call(this,n)).service=e,o.ar=n,o.router=i,o}return _createClass(r,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(r.prototype),"ngOnInit",this).call(this),this.setupDataSource()}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(r.prototype),"ngOnDestroy",this).call(this),this.querySubscription&&this.querySubscription.unsubscribe(),this.dataSubscription&&this.dataSubscription.unsubscribe()}},{key:"onPage",value:function(e){this.service.pageIndexChanged(e.pageIndex)}},{key:"navigateInto",value:function(e,t){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.router.navigate(["../",e.id,t],{relativeTo:this.ar,state:{data:{redirectUrl:location.pathname}}});case 2:case"end":return r.stop()}}),r,this)})))}},{key:"select",value:function(e){this.service.setCurrent(e)}},{key:"setupDataSource",value:function(){var e=this;this.querySubscription=this.service.Query$.subscribe((function(t){e.service.getCount(t).subscribe((function(){})),e.service.getList(t).subscribe((function(){}))}))}}]),r}(Q)).\u0275fac=function(e){i.bc()},P.\u0275dir=i.Jb({type:P,features:[i.zb]}),P),D=((j=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n,i){var o;return _classCallCheck(this,r),(o=t.call(this,e,n,i)).service=e,o.ar=n,o.router=i,o}return _createClass(r,[{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(r.prototype),"ngOnDestroy",this).call(this),this.dataSubscription&&this.dataSubscription.unsubscribe()}},{key:"setupDataSource",value:function(){var e=this;_get(_getPrototypeOf(r.prototype),"setupDataSource",this).call(this),this.dataSubscription=this.service.List$.subscribe((function(t){e.dataSource?e.dataSource.connect().next(t):e.dataSource=new d.k(t)}))}}]),r}(A)).\u0275fac=function(e){i.bc()},j.\u0275dir=i.Jb({type:j,features:[i.zb]}),j),U=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){return _classCallCheck(this,r),t.call(this,_(e))}return _createClass(r,[{key:"next",value:function(e){var t,n,i=_(e);t=i,n=this.getValue(),JSON.stringify(t)===JSON.stringify(n)||_get(_getPrototypeOf(r.prototype),"next",this).call(this,i)}}]),r}(p.a),z=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n){var i;return _classCallCheck(this,r),(i=t.call(this,e,n)).config=e,i.httpClient=n,i}return _createClass(r,[{key:"upload",value:function(e,t){var r,n=this,i={observe:"events",reportProgress:!0},u=function(e){for(var t=new FormData,r=0,n=Object.keys(e);r<n.length;r++){var i=n[r],o=e[i];if(Object(v.a)(o)){var u,a=_createForOfIteratorHelper(o);try{for(a.s();!(u=a.n()).done;){var s=u.value;t.append("".concat(i,"[]"),s)}}catch(c){a.e(c)}finally{a.f()}}else t.append(i,o)}return t}(e),c=t||this.Query,l=w(this.config,c,e.id?c.childUrl||"/".concat(e.id):c.childUrl);return this.setWorking(!0),(e.id?this.httpClient.patch(l,u,i):this.httpClient.post(l,u,i)).pipe((r=function(e){return n.setProgress(e)},Object(s.a)((function(e){e.type===C.d.UploadProgress&&r(Math.round(100*e.loaded/e.total))}))),Object(f.a)(Object(a.a)((function(e){return e.type===C.d.Response})),Object(o.a)((function(e){return e.body}))),this.finalizeConnection())}},{key:"post",value:function(e,t){var r=t||this.Query,n=w(this.config,r,r.childUrl);return this.setWorking(!0),this.httpClient.post(n,{d:e}).pipe(this.finalizeConnection())}},{key:"patch",value:function(e,t){var r=t||this.Query,n=w(this.config,r,r.childUrl||"/".concat(e.id));return this.setWorking(!0),this.httpClient.patch(n,{d:e}).pipe(this.finalizeConnection())}},{key:"delete",value:function(e,t){var r=t||this.Query,n=w(this.config,r,r.childUrl||"/".concat(e));return this.setWorking(!0),this.httpClient.delete(n).pipe(this.finalizeConnection())}},{key:"save",value:function(e,t){return e.id?this.patch(e,t):this.post(e,t)}},{key:"saveCurrent",value:function(e){return this.save(this.Current)}},{key:"saveMany",value:function(e,t){var r=this;return e.length?Object(b.a)(e.map((function(e){return r.save(e,t)}))):Object(h.a)([])}},{key:"finalizeConnection",value:function(){var e=this;return function(t){return t.pipe(Object(s.a)((function(){return e.clear(null,!0)})),_get(_getPrototypeOf(r.prototype),"finalizeConnection",e).call(e))}}}]),r}(function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n){var i;if(_classCallCheck(this,r),(i=t.call(this,e)).config=e,i.httpClient=n,!e.sourceUrl)throw new Error("IDG: FetchConnectionService => no REST source URL present.");return _possibleConstructorReturn(i)}return _createClass(r,[{key:"setQuery",value:function(e){this.query.next(e)}},{key:"getFilter",value:function(e){var t=this,r=w(this.config,e||this.Query,"/filters"),n=this.httpClient.get(r);return this.setWorking(!0),this.fetch(r,n,!1).pipe(Object(s.a)((function(e){return t.setFilter(e)})))}},{key:"queryChanged",value:function(e){this.setQuery(e)}},{key:"pageIndexChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:e}))}},{key:"queryStringChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,q:e}))}},{key:"pageSizeChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,pageSize:e}))}},{key:"orderByChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,orderBy:e}))}},{key:"baseUrlChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,baseUrl:e}))}},{key:"subscribeToQuery",value:function(e){var t=this;return e?this.querySubscription||(this.querySubscription=this.Query$.subscribe((function(){t.getCount().subscribe(),t.getList().subscribe()}))):this.querySubscription&&this.querySubscription.unsubscribe(),this.querySubscription}},{key:"getList",value:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=w(this.config,e||this.Query),i=this.httpClient.get(n);return this.setWorking(!0),this.fetch(n,i,(e||this.Query).useCache).pipe(Object(s.a)((function(n){r&&t.setList((e||t.Query).accumulate?[].concat(_toConsumableArray(t.list.getValue()),_toConsumableArray(n)):n)})))}},{key:"getCount",value:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=w(this.config,e||this.Query,"/count"),i=this.httpClient.get(n);return this.setWorking(!0),this.fetch(n,i,(e||this.Query).useCache).pipe(Object(s.a)((function(e){r&&t.setCount(+e)})))}},{key:"get",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=w(this.config,n||this.Query,"/".concat(e)),u=this.httpClient.get(o);return this.setWorking(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y.a;return Object(g.a)((function(){return e()?t:r}))}((function(){return"new"===e.toString().toLocaleLowerCase()}),Object(h.a)(r),this.fetch(o,u,(n||this.Query).useCache)).pipe(Object(s.a)((function(e){i&&t.setCurrent(e)})))}},{key:"Query",get:function(){return this.query.getValue()}},{key:"Query$",get:function(){return this.query.asObservable()}}]),r}(function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var n;if(_classCallCheck(this,r),(n=t.call(this)).config=e,n.cache={},!e.maxCacheAge)throw new Error("IDG: ConnectionCacheService => no cache age present.");if(!e.retryCount&&0!==e.retryCount)throw new Error("IDG: ConnectionCacheService => no retry count present.");return _possibleConstructorReturn(n)}return _createClass(r,[{key:"getCache",value:function(e){return this.cache[e]}},{key:"setCache",value:function(e,t){return this.cache[e]=t,this.getCache(e)}},{key:"clear",value:function(e,t){if(t)for(var r=0,n=Object.keys(this.cache);r<n.length;r++){var i=n[r];delete this.cache[i]}else delete this.cache[e]}},{key:"errorHandler",value:function(e){return e&&this.clear(e),y.a}},{key:"finalizeConnection",value:function(){var e=this;return function(t){return t.pipe(Object(c.a)((function(){return e.errorHandler()})),Object(l.a)((function(){e.setWorking(!1),e.setProgress(0)})))}}},{key:"fetch",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.getCache(e);if(n&&r){var i=Date.now()-this.config.maxCacheAge;if(n.created_at<i)return this.fetch(e,t,!1);console.log("Returning cached value from: ".concat(e))}else n=this.setCache(e,{created_at:Date.now(),request:t.pipe(this.finalizeConnection())});return n.request}}]),r}(function(){function e(){_classCallCheck(this,e),this.progress=new U(0),this.working=new U(!1),this.filter=new U({}),this.count=new U(0),this.list=new U([]),this.current=new U(null)}return _createClass(e,[{key:"setProgress",value:function(e){this.progress.next(e)}},{key:"setWorking",value:function(e){this.working.next(e)}},{key:"setFilter",value:function(e){this.filter.next(e)}},{key:"setCount",value:function(e){this.count.next(e)}},{key:"setList",value:function(e){this.list.next(e)}},{key:"setCurrent",value:function(e){this.current.next(e)}},{key:"Progress",get:function(){return this.progress.getValue()}},{key:"Working",get:function(){return this.working.getValue()}},{key:"Progress$",get:function(){return this.progress.asObservable()}},{key:"Working$",get:function(){return this.working.asObservable()}},{key:"Filter",get:function(){return this.filter.getValue()}},{key:"Filter$",get:function(){return this.filter.asObservable()}},{key:"Count",get:function(){return this.count.getValue()}},{key:"Count$",get:function(){return this.count.asObservable()}},{key:"List",get:function(){return this.list.getValue()}},{key:"List$",get:function(){return this.list.asObservable()}},{key:"Current",get:function(){return this.current.getValue()}},{key:"Current$",get:function(){return this.current.asObservable()}}]),e}()))),L=function(e){_inherits(r,e);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return r}(I)},yXIz:function(e,t,r){"use strict";r.r(t),r.d(t,"ConnectModule",(function(){return f}));var n,i,o=r("2kYt"),u=r("jjKm"),a=r("doNb"),s=r("sEIs"),c=r("EM62"),l=[{path:"components",loadChildren:function(){return r.e(6).then(r.bind(null,"pL0+")).then((function(e){return e.ComponentsModule}))}}],h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:i}),i.\u0275inj=c.Lb({factory:function(e){return new(e||i)},imports:[[s.e.forChild(l)],s.e]}),i),f=((n=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:n}),n.\u0275inj=c.Lb({factory:function(e){return new(e||n)},providers:[a.a],imports:[[o.c,h,u.m]]}),n)}}]);