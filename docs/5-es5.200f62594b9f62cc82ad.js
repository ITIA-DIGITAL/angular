function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{doNb:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("sUYu"),i=n("EM62"),o=n("vobO"),u=function(){var e=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var i;return _classCallCheck(this,n),(i=t.call(this,Object.assign(Object.assign({},r.d),{serverUrl:"http://localhost:3000/v1",sourceUrl:"/sys/tenants"}),e)).query=new r.e(new r.c({pageSize:5})),i}return n}(r.b);return e.\u0275fac=function(t){return new(t||e)(i.hc(o.b))},e.\u0275prov=i.Tb({token:e,factory:e.\u0275fac}),e}()},sUYu:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return Q})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return I}));var r=n("EM62"),i=n("YtkY"),o=(n("TLy2"),n("J+dc"),n("ZTXN"));n("pBDD"),n("mW0F"),n("cJ9h"),n("BwBJ"),n("Ohay"),n("wqq/");var u=n("4e/d"),a=n("ruxD"),s=n("8j5Y"),c=(n("47ST"),n("ROBh")),l=n("C05f"),h=n("6Oco"),f=n("i9xl"),p=n("P4Xx"),y=n("eY+9"),g=n("FlRo");function v(e){return null!=e&&(Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){e.hasOwnProperty(t)&&null!=e[t]&&"object"==typeof e[t]&&!Object.isFrozen(e[t])&&v(e[t])}))),e}n("vobO");var b=function(e){return e.default="",e.json=".json",e.html=".html",e.csv=".csv",e}({}),d={storagePrefix:"idg-",maxCacheAge:21e3,retryCount:5,dateFormat:"YYYY-MM-DD",retryDelayMs:1e3,serverUrl:null};function C(e,t){for(var n=[],r=function(){var r=o[i];if(null!=e[r]&&""!==e[r]&&"pageIndex"!==r&&"pageSize"!==r&&"useCache"!==r&&"baseUrl"!==r&&"format"!==r&&"orderBy"!==r){if("false"!==e[r].toString().toLowerCase())if(e[r]._isAMomentObject)n.push(r.toLowerCase()+"="+e[r].format(t||"YYYY-MM-DD"));else if(Object(y.a)(e[r])){var u=[];e[r].forEach((function(e){u.push("".concat(r,"[]=").concat(e))})),n.push(u.join("&"))}else n.push(r.toLowerCase()+"="+e[r])}else"orderBy"===r?n.push("order_by="+JSON.stringify(e[r])):"pageIndex"===r?n.push("page_index="+e[r]):"pageSize"===r&&n.push("page_size="+e[r])},i=0,o=Object.keys(e);i<o.length;i++)r();return"?".concat(n.join("&"))}function _(e,t,n){var r,i="".concat(e.serverUrl).concat(t.baseUrl?t.baseUrl:e.sourceUrl).concat(n||"").concat(t.format);if(t)for(var o=0,u=Object.keys(t);o<u.length;o++){var a=u[o];"orderBy"!==(r=a)&&"format"!==r&&""!==r&&k(t[a])&&(i=i.replace(":".concat(a),t[a]._isAMomentObject?t[a].format(e.dateFormat):t[a]))}return i+(t?C(t,e.dateFormat):"")}function k(e){return null!=e}var O,S,m,w=function(){function e(t){_classCallCheck(this,e),this.useCache=!0,this.format=t.format||b.json,this.pageIndex=t.pageIndex||0,this.pageSize=t.pageSize||10,this.orderBy=t.orderBy||null,this.accumulate=t.accumulate,this.baseUrl=t.baseUrl||"",this.useCache=t.useCache,this.token=t.token||"",this.q=t.q||""}return _createClass(e,[{key:"duplicate",value:function(t){return new e(Object.assign(Object.assign({},this),t||{}))}},{key:"toQueryParams",value:function(){return C(this)}}]),e}(),j=((m=function(){function e(t){_classCallCheck(this,e),this.ar=t,this.unsubscribeAll=new o.a}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}},{key:"urlParams",get:function(){return this.ar.paramMap.pipe(Object(i.a)((function(e){return e.params})))}}]),e}()).\u0275fac=function(e){r.kc()},m.\u0275dir=r.Sb({type:m}),m),x=((S=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i){var o;return _classCallCheck(this,n),(o=t.call(this,r)).service=e,o.ar=r,o.router=i,o}return _createClass(n,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(n.prototype),"ngOnInit",this).call(this),this.setupDataSource()}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(n.prototype),"ngOnDestroy",this).call(this),this.querySubscription&&this.querySubscription.unsubscribe(),this.dataSubscription&&this.dataSubscription.unsubscribe()}},{key:"onPage",value:function(e){this.service.pageIndexChanged(e.pageIndex)}},{key:"navigateInto",value:function(e,t){return n=this,i=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.router.navigate(["../",e.id,t],{relativeTo:this.ar,state:{data:{redirectUrl:location.pathname}}});case 2:case"end":return n.stop()}}),n,this)})),new((r=void 0)||(r=Promise))((function(e,t){function o(e){try{a(i.next(e))}catch(n){t(n)}}function u(e){try{a(i.throw(e))}catch(n){t(n)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,u)}a((i=i.apply(n,[])).next())}));var n,r,i}},{key:"select",value:function(e){this.service.setCurrent(e)}},{key:"setupDataSource",value:function(){var e=this;this.querySubscription=this.service.Query$.subscribe((function(t){e.service.getCount(t).subscribe((function(){})),e.service.getList(t).subscribe((function(){}))}))}}]),n}(j)).\u0275fac=function(e){r.kc()},S.\u0275dir=r.Sb({type:S,features:[r.Ib]}),S),P=((O=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i){var o;return _classCallCheck(this,n),(o=t.call(this,e,r,i)).service=e,o.ar=r,o.router=i,o}return _createClass(n,[{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(n.prototype),"ngOnDestroy",this).call(this),this.dataSubscription&&this.dataSubscription.unsubscribe()}},{key:"setupDataSource",value:function(){var e=this;_get(_getPrototypeOf(n.prototype),"setupDataSource",this).call(this),this.dataSubscription=this.service.List$.subscribe((function(t){e.dataSource?e.dataSource.connect().next(t):e.dataSource=new g.k(t)}))}}]),n}(x)).\u0275fac=function(e){r.kc()},O.\u0275dir=r.Sb({type:O,features:[r.Ib]}),O),I=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){return _classCallCheck(this,n),t.call(this,v(e))}return _createClass(n,[{key:"next",value:function(e){var t,r,i=v(e);t=i,r=this.getValue(),JSON.stringify(t)===JSON.stringify(r)||_get(_getPrototypeOf(n.prototype),"next",this).call(this,i)}}]),n}(l.a),Q=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e,r)).config=e,i.httpClient=r,i}return _createClass(n,[{key:"post",value:function(e,t){var n=_(this.config,t||this.Query);return this.setWorking(!0),this.httpClient.post(n,{d:e}).pipe(this.finalizeConnection())}},{key:"patch",value:function(e,t){var n=_(this.config,t||this.Query,"/".concat(e.id));return this.setWorking(!0),this.httpClient.patch(n,{d:e}).pipe(this.finalizeConnection())}},{key:"delete",value:function(e,t){var n=_(this.config,t||this.Query,"/".concat(e));return this.setWorking(!0),this.httpClient.delete(n).pipe(this.finalizeConnection())}},{key:"save",value:function(e,t){return e.id?this.patch(e,t):this.post(e,t)}},{key:"saveCurrent",value:function(e){return this.save(this.Current)}},{key:"saveMany",value:function(e,t){var n=this;return e.length?Object(p.a)(e.map((function(e){return n.save(e,t)}))):Object(c.a)([])}},{key:"finalizeConnection",value:function(){var e=this;return function(t){return t.pipe(Object(s.a)((function(){return e.clear(null,!0)})),_get(_getPrototypeOf(n.prototype),"finalizeConnection",e).call(e))}}}]),n}(function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;if(_classCallCheck(this,n),(i=t.call(this,e)).config=e,i.httpClient=r,!e.sourceUrl)throw new Error("IDG: FetchConnectionService => no REST source URL present.");return _possibleConstructorReturn(i)}return _createClass(n,[{key:"setQuery",value:function(e){this.query.next(e)}},{key:"getFilter",value:function(e){var t=this,n=_(this.config,e||this.Query,"/filters"),r=this.httpClient.get(n);return this.setWorking(!0),this.fetch(n,r,!1).pipe(Object(s.a)((function(e){return t.setFilter(e)})))}},{key:"queryChanged",value:function(e){this.setQuery(e)}},{key:"pageIndexChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:e}))}},{key:"queryStringChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,q:e}))}},{key:"pageSizeChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,pageSize:e}))}},{key:"orderByChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,orderBy:e}))}},{key:"baseUrlChanged",value:function(e){this.setQuery(this.Query.duplicate({pageIndex:0,baseUrl:e}))}},{key:"subscribeToQuery",value:function(e){var t=this;return e?this.querySubscription||(this.querySubscription=this.Query$.subscribe((function(){t.getCount().subscribe(),t.getList().subscribe()}))):this.querySubscription&&this.querySubscription.unsubscribe(),this.querySubscription}},{key:"getList",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=_(this.config,e||this.Query),i=this.httpClient.get(r);return this.setWorking(!0),this.fetch(r,i,(e||this.Query).useCache).pipe(Object(s.a)((function(r){n&&t.setList((e||t.Query).accumulate?[].concat(_toConsumableArray(t.list.getValue()),_toConsumableArray(r)):r)})))}},{key:"getCount",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=_(this.config,e||this.Query,"/count"),i=this.httpClient.get(r);return this.setWorking(!0),this.fetch(r,i,(e||this.Query).useCache).pipe(Object(s.a)((function(e){n&&t.setCount(+e)})))}},{key:"get",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=_(this.config,r||this.Query,"/".concat(e)),u=this.httpClient.get(o);return this.setWorking(!0),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h.a;return Object(f.a)((function(){return e()?t:n}))}((function(){return"new"===e.toString().toLocaleLowerCase()}),Object(c.a)(n),this.fetch(o,u,(r||this.Query).useCache)).pipe(Object(s.a)((function(e){i&&t.setCurrent(e)})))}},{key:"Query",get:function(){return this.query.getValue()}},{key:"Query$",get:function(){return this.query.asObservable()}}]),n}(function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r;if(_classCallCheck(this,n),(r=t.call(this)).config=e,r.cache={},!e.maxCacheAge)throw new Error("IDG: ConnectionCacheService => no cache age present.");if(!e.retryCount&&0!==e.retryCount)throw new Error("IDG: ConnectionCacheService => no retry count present.");return _possibleConstructorReturn(r)}return _createClass(n,[{key:"getCache",value:function(e){return this.cache[e]}},{key:"setCache",value:function(e,t){return this.cache[e]=t,this.getCache(e)}},{key:"clear",value:function(e,t){if(t)for(var n=0,r=Object.keys(this.cache);n<r.length;n++){var i=r[n];delete this.cache[i]}else delete this.cache[e]}},{key:"errorHandler",value:function(e){return e&&this.clear(e),h.a}},{key:"finalizeConnection",value:function(){var e=this;return function(t){return t.pipe(Object(u.a)((function(){return e.errorHandler()})),Object(a.a)((function(){return e.setWorking(!1)})))}}},{key:"fetch",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=this.getCache(e);if(r&&n){var i=Date.now()-this.config.maxCacheAge;if(r.created_at<i)return this.fetch(e,t,!1);console.log("Returning cached value from: ".concat(e))}else r=this.setCache(e,{created_at:Date.now(),request:t.pipe(this.finalizeConnection())});return r.request}}]),n}(function(){function e(){_classCallCheck(this,e),this.working=new I(!1),this.filter=new I({}),this.count=new I(0),this.list=new I([]),this.current=new I(null)}return _createClass(e,[{key:"setWorking",value:function(e){this.working.next(e)}},{key:"setFilter",value:function(e){this.filter.next(e)}},{key:"setCount",value:function(e){this.count.next(e)}},{key:"setList",value:function(e){this.list.next(e)}},{key:"setCurrent",value:function(e){this.current.next(e)}},{key:"Working",get:function(){return this.working.getValue()}},{key:"Working$",get:function(){return this.working.asObservable()}},{key:"Filter",get:function(){return this.filter.getValue()}},{key:"Filter$",get:function(){return this.filter.asObservable()}},{key:"Count",get:function(){return this.count.getValue()}},{key:"Count$",get:function(){return this.count.asObservable()}},{key:"List",get:function(){return this.list.getValue()}},{key:"List$",get:function(){return this.list.asObservable()}},{key:"Current",get:function(){return this.current.getValue()}},{key:"Current$",get:function(){return this.current.asObservable()}}]),e}()))),A=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return n}(w)},yXIz:function(e,t,n){"use strict";n.r(t),n.d(t,"ConnectModule",(function(){return f}));var r,i,o=n("2kYt"),u=n("OTup"),a=n("doNb"),s=n("sEIs"),c=n("EM62"),l=[{path:"components",loadChildren:function(){return n.e(6).then(n.bind(null,"pL0+")).then((function(e){return e.ComponentsModule}))}}],h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=c.Vb({type:i}),i.\u0275inj=c.Ub({factory:function(e){return new(e||i)},imports:[[s.e.forChild(l)],s.e]}),i),f=((r=function e(){_classCallCheck(this,e)}).\u0275mod=c.Vb({type:r}),r.\u0275inj=c.Ub({factory:function(e){return new(e||r)},providers:[a.a],imports:[[o.c,h,u.j]]}),r)}}]);