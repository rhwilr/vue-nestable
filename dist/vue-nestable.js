(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueNestable = {})));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var store={};var groupsObserver = {methods:{registerNestable:function c(a){var b=this._getByGroup(a.group);b.onDragStartListeners.push(a.onDragStart),b.onMouseEnterListeners.push(a.onMouseEnter);},notifyDragStart:function k(a,b,c){var d=this._getByGroup(a),e=!0,f=!1,g=void 0;try{for(var h,i,j=d.onDragStartListeners[Symbol.iterator]();!(e=(h=j.next()).done);e=!0)i=h.value,i(b,c);}catch(a){f=!0,g=a;}finally{try{e||null==j.return||j.return();}finally{if(f)throw g}}},notifyMouseEnter:function l(a,b,c,d){var e=this._getByGroup(a),f=!0,g=!1,h=void 0;try{for(var i,j,k=e.onMouseEnterListeners[Symbol.iterator]();!(f=(i=k.next()).done);f=!0)j=i.value,j(b,c,d);}catch(a){g=!0,h=a;}finally{try{f||null==k.return||k.return();}finally{if(g)throw h}}},_getByGroup:function b(a){// the group already exists, return the reference
  return store[a]?store[a]:(store[a]={onDragStartListeners:[],onMouseEnterListeners:[],onDragStart:[],dragItem:null},store[a]);// otherwise create a new object for the group
  }}};

  //
  var script = {name:"NestableItem",mixins:[groupsObserver],props:{item:{type:Object,required:!0,default:function a(){return {}}},index:{type:Number,required:!1,default:null},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:function a(){return {}}}},inject:["listId","group"],computed:{isDragging:function b(){var a=this.options.dragItem;return !this.isCopy&&a&&a[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren:function a(){return this.item[this.options.childrenProp]&&0<this.item[this.options.childrenProp].length},hasHandle:function a(){return !!this.$scopedSlots.handler},itemClasses:function a(){return ["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item[this.options.keyProp]),this.isDragging?"is-dragging":""]}},methods:{onMouseEnter:function c(a){if(this.options.dragItem){var b=this.item||this.$parent.item;this.notifyMouseEnter(this.group,a,this.listId,b);}}}};

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.itemClasses},[_c('div',{staticClass:"nestable-item-content",on:{"mouseenter":_vm.onMouseEnter}},[_vm._t("default",null,{item:_vm.item})],2),_vm._v(" "),(_vm.hasChildren)?_c('ol',{staticClass:"nestable-list"},[_vm._l((_vm.item[_vm.options.childrenProp]),function(child,childIndex){return [_c('NestableItem',{key:childIndex,attrs:{"index":_vm.index,"item":child,"options":_vm.options,"is-copy":_vm.isCopy},scopedSlots:_vm._u([_vm._l((Object.keys(_vm.$scopedSlots)),function(slot){return {key:slot,fn:function(scope){return [_vm._t(slot,null,null,scope)]}}})])})]})],2):_vm._e()])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "NestableItem.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var NestableItem = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  //
  var script$1 = {name:"Placeholder",mixins:[groupsObserver],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:function a(){return {}}}},inject:["listId","group"],computed:{isDragging:function b(){var a=this.options.dragItem;return a}},methods:{onMouseEnter:function b(a){this.options.dragItem&&this.notifyMouseEnter(this.group,a,this.listId,null);}}};

  /* script */
              const __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('div',{staticClass:"nestable-list-empty",on:{"mouseenter":_vm.onMouseEnter}},[_vm._t("default")],2)])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "Placeholder.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var Placeholder = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  var nestableHelpers = {methods:{// ––––––––––––––––––––––––––––––––––––
  // Getter methods
  // ––––––––––––––––––––––––––––––––––––
  getPathById:function e(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.value,d=[];return c.every(function(c,e){if(c[b.keyProp]===a)d.push(e);else if(c[b.childrenProp]){var f=b.getPathById(a,c[b.childrenProp]);f.length&&(d=d.concat(e).concat(f));}return 0===d.length}),d},getItemByPath:function e(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.value,d=null;return a.forEach(function(a){var e=d&&d[b.childrenProp]?d[b.childrenProp]:c;d=e[a];}),d},getItemDepth:function c(a){var b=1;if(a[this.childrenProp]&&0<a[this.childrenProp].length){var d=a[this.childrenProp].map(this.getItemDepth);b+=Math.max.apply(Math,_toConsumableArray(d));}return b},getSplicePath:function h(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c={},d=b.numToRemove||0,e=b.itemsToInsert||[],f=a.length-1,g=c;return a.forEach(function(a,c){if(c===f)g.$splice=[[a,d].concat(_toConsumableArray(e))];else{var h={};g[a]=_defineProperty({},b.childrenProp,h),g=h;}}),c},getRealNextPath:function e(a,b){var c=a.length-1,d=b.length-1;if(a.length<b.length){// move into deep
  var f=!1;return b.map(function(e,g){return f?g===d?e+1:e:"number"==typeof a[g]?b[g]>a[g]&&g===c?(f=!0,e-1):e:e})}if(a.length===b.length&&b[d]>a[d])// if move bottom + move to item with children => make it a first child instead of swap
  {var g=this.getItemByPath(b);if(g[this.childrenProp]&&g[this.childrenProp].length&&!this.isCollapsed(g))return b.slice(0,-1).concat(b[d]-1).concat(0)}return b}// getItemOptions() {
  //   const { renderItem, renderCollapseIcon, handler, childrenProp } = this.props;
  //   const { dragItem } = this.state;
  //   return {
  //     dragItem,
  //     childrenProp,
  //     renderItem,
  //     renderCollapseIcon,
  //     handler,
  //     onDragStart: this.onDragStart,
  //     onMouseEnter: this.onMouseEnter,
  //     isCollapsed: this.isCollapsed,
  //     onToggleCollapse: this.onToggleCollapse
  //   };
  // }
  }};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var invariant = function (condition, format, a, b, c, d, e, f) {

    if (!condition) {
      var error;

      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame

      throw error;
    }
  };

  var browser = invariant;

  var immutabilityHelper = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var splice = Array.prototype.splice;
    var toString = Object.prototype.toString;

    function type(obj) {
      return toString.call(obj).slice(8, -1);
    }

    var assign = Object.assign ||
    /* istanbul ignore next */
    function (target, source) {
      getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      });
      return target;
    };

    var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ? function (obj) {
      return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
    }
    /* istanbul ignore next */
    : function (obj) {
      return Object.keys(obj);
    };

    function copy(object) {
      return Array.isArray(object) ? assign(object.constructor(object.length), object) : type(object) === 'Map' ? new Map(object) : type(object) === 'Set' ? new Set(object) : object && typeof object === 'object' ? assign(Object.create(Object.getPrototypeOf(object)), object)
      /* istanbul ignore next */
      : object;
    }

    var Context =
    /** @class */
    function () {
      function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this); // Deprecated: update.extend, update.isEquals and update.newContext

        this.update.extend = this.extend = this.extend.bind(this);

        this.update.isEquals = function (x, y) {
          return x === y;
        };

        this.update.newContext = function () {
          return new Context().update;
        };
      }

      Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
          return this.update.isEquals;
        },
        set: function (value) {
          this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
      });

      Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
      };

      Context.prototype.update = function (object, $spec) {
        var _this = this;

        var spec = typeof $spec === 'function' ? {
          $apply: $spec
        } : $spec;

        if (!(Array.isArray(object) && Array.isArray(spec))) {
          browser(!Array.isArray(spec), 'update(): You provided an invalid spec to update(). The spec may ' + 'not contain an array except as the value of $set, $push, $unshift, ' + '$splice or any custom command allowing an array value.');
        }

        browser(typeof spec === 'object' && spec !== null, 'update(): You provided an invalid spec to update(). The spec and ' + 'every included key path must be plain objects containing one of the ' + 'following commands: %s.', Object.keys(this.commands).join(', '));
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
          if (hasOwnProperty.call(_this.commands, key)) {
            var objectWasNextObject = object === nextObject;
            nextObject = _this.commands[key](spec[key], nextObject, spec, object);

            if (objectWasNextObject && _this.isEquals(nextObject, object)) {
              nextObject = object;
            }
          } else {
            var nextValueForKey = type(object) === 'Map' ? _this.update(object.get(key), spec[key]) : _this.update(object[key], spec[key]);
            var nextObjectValue = type(nextObject) === 'Map' ? nextObject.get(key) : nextObject[key];

            if (!_this.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
              if (nextObject === object) {
                nextObject = copy(object);
              }

              if (type(nextObject) === 'Map') {
                nextObject.set(key, nextValueForKey);
              } else {
                nextObject[key] = nextValueForKey;
              }
            }
          }
        });
        return nextObject;
      };

      return Context;
    }();

    exports.Context = Context;
    var defaultCommands = {
      $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
      },
      $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
      },
      $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
          invariantSplice(args);

          if (nextObject === originalObject && args.length) {
            nextObject = copy(originalObject);
          }

          splice.apply(nextObject, args);
        });
        return nextObject;
      },
      $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
      },
      $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
          nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
      },
      $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
          if (Object.hasOwnProperty.call(nextObject, key)) {
            if (nextObject === originalObject) {
              nextObject = copy(originalObject);
            }

            delete nextObject[key];
          }
        });
        return nextObject;
      },
      $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');

        if (type(nextObject) === 'Map') {
          values.forEach(function (_a) {
            var key = _a[0],
                value = _a[1];

            if (nextObject === originalObject && nextObject.get(key) !== value) {
              nextObject = copy(originalObject);
            }

            nextObject.set(key, value);
          });
        } else {
          values.forEach(function (value) {
            if (nextObject === originalObject && !nextObject.has(value)) {
              nextObject = copy(originalObject);
            }

            nextObject.add(value);
          });
        }

        return nextObject;
      },
      $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
          if (nextObject === originalObject && nextObject.has(key)) {
            nextObject = copy(originalObject);
          }

          nextObject.delete(key);
        });
        return nextObject;
      },
      $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
          if (value[key] !== nextObject[key]) {
            if (nextObject === originalObject) {
              nextObject = copy(originalObject);
            }

            nextObject[key] = value[key];
          }
        });
        return nextObject;
      },
      $apply: function (value, original) {
        invariantApply(value);
        return value(original);
      }
    };
    var defaultContext = new Context();
    exports.isEquals = defaultContext.update.isEquals;
    exports.extend = defaultContext.extend;
    exports.default = defaultContext.update; // @ts-ignore

    exports.default.default = module.exports = assign(exports.default, exports); // invariants

    function invariantPushAndUnshift(value, spec, command) {
      browser(Array.isArray(value), 'update(): expected target of %s to be an array; got %s.', command, value);
      invariantSpecArray(spec[command], command);
    }

    function invariantSpecArray(spec, command) {
      browser(Array.isArray(spec), 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, spec);
    }

    function invariantSplices(value, spec) {
      browser(Array.isArray(value), 'Expected $splice target to be an array; got %s', value);
      invariantSplice(spec.$splice);
    }

    function invariantSplice(value) {
      browser(Array.isArray(value), 'update(): expected spec of $splice to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', value);
    }

    function invariantApply(fn) {
      browser(typeof fn === 'function', 'update(): expected spec of $apply to be a function; got %s.', fn);
    }

    function invariantSet(spec) {
      browser(Object.keys(spec).length === 1, 'Cannot have more than one key in an object with $set');
    }

    function invariantMerge(target, specValue) {
      browser(specValue && typeof specValue === 'object', 'update(): $merge expects a spec of type \'object\'; got %s', specValue);
      browser(target && typeof target === 'object', 'update(): $merge expects a target of type \'object\'; got %s', target);
    }

    function invariantMapOrSet(target, command) {
      var typeOfTarget = type(target);
      browser(typeOfTarget === 'Map' || typeOfTarget === 'Set', 'update(): %s expects a target of type Set or Map; got %s', command, typeOfTarget);
    }
  });
  var update = unwrapExports(immutabilityHelper);
  var immutabilityHelper_1 = immutabilityHelper.Context;
  var immutabilityHelper_2 = immutabilityHelper.isEquals;
  var immutabilityHelper_3 = immutabilityHelper.extend;

  var closest=function(a,b){// closest(e.target, '.field')
  for(;a;){if(a.matches&&a.matches(b))return a;a=a.parentNode;}return null};var getOffsetRect=function(a){var b=Math.round,c=a.getBoundingClientRect(),d=document.body,e=document.documentElement,f=window.pageYOffset||e.scrollTop||d.scrollTop,g=window.pageXOffset||e.scrollLeft||d.scrollLeft,h=e.clientTop||d.clientTop||0,i=e.clientLeft||d.clientLeft||0,j=c.top+f-h,k=c.left+g-i;return {top:b(j),left:b(k)}};var getTotalScroll=function(a){for(var b=0,c=0;a=a.parentNode;)b+=a.scrollTop||0,c+=a.scrollLeft||0;return {top:b,left:c}};var getTransformProps=function(a,b){return {transform:"translate("+a+"px, "+b+"px)"}};var listWithChildren=function(a,b){return a.map(function(a){return _objectSpread({},a,_defineProperty({},b,a[b]?listWithChildren(a[b],b):[]))})};

  var script$2 = {name:"VueNestable",components:{NestableItem:NestableItem,Placeholder:Placeholder},mixins:[nestableHelpers,groupsObserver],props:{value:{type:Array,required:!0,default:function a(){return []}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},group:{type:[String,Number],required:!1,default:function a(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1}},provide:function a(){return {listId:this.listId,group:this.group}},data:function a(){return {itemsOld:null,// revert to copy in case of cancelling drag
  dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty:function a(){return 0===this.value.length},itemOptions:function a(){return {dragItem:this.dragItem,keyProp:this.keyProp,childrenProp:this.childrenProp}},listStyles:function(){var a=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]),b={};return a&&(b.width="".concat(a.clientWidth,"px")),this.elCopyStyles&&(b=_objectSpread({},b,this.elCopyStyles)),b}},created:function b(){var a=listWithChildren(this.value,this.childrenProp);this.$emit("input",a),this.isDirty=!1,this.registerNestable(this);},beforeDestroy:function a(){this.stopTrackMouse();},methods:{startTrackMouse:function a(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown);},stopTrackMouse:function a(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null;},onDragStart:function c(a,b){a&&(a.preventDefault(),a.stopPropagation()),this.el=closest(a.target,".nestable-item"),this.startTrackMouse(),this.dragItem=b,this.itemsOld=this.value,this.onMouseMove(a);},onDragEnd:function c(a,b){a&&a.preventDefault(),this.stopTrackMouse(),this.el=null,b?this.dragRevert():this.dragApply();},onKeyDown:function b(a){27===a.which&&this.onDragEnd(null,!0);},onMouseMove:function i(a){var b=Math.abs,c=a.clientX,d=a.clientY,e=getTransformProps(c,d),f=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(!this.elCopyStyles){var g=getOffsetRect(this.el),h=getTotalScroll(this.el);this.elCopyStyles=_objectSpread({marginTop:"".concat(g.top-d-h.top,"px"),marginLeft:"".concat(g.left-c-h.left,"px")},e);}else{for(var j in this.elCopyStyles=_objectSpread({},this.elCopyStyles,e),e)e.hasOwnProperty(j)&&(f.style[j]=e[j]);var k=c-this.mouse.last.x;0<=k&&0<=this.mouse.shift.x||0>=k&&0>=this.mouse.shift.x?this.mouse.shift.x+=k:this.mouse.shift.x=0,this.mouse.last.x=c,b(this.mouse.shift.x)>this.threshold&&(0<this.mouse.shift.x?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0);}},moveItem:function i(a){var b=a.dragItem,c=a.pathFrom,d=a.pathTo,e=this.getRealNextPath(c,d),f=this.getSplicePath(c,{numToRemove:1,childrenProp:this.childrenProp}),g=this.getSplicePath(e,{numToRemove:0,itemsToInsert:[b],childrenProp:this.childrenProp}),h=this.value;h=update(h,f),h=update(h,g),this.isDirty=!0,this.$emit("input",h);},tryIncreaseDepth:function e(a){var b=this.getPathById(a[this.keyProp]),c=b[b.length-1],d=b.length+this.getItemDepth(a);// has previous sibling and isn't at max depth
  if(0<c&&d<=this.maxDepth){var f=this.getItemByPath(b.slice(0,-1).concat(c-1));// previous sibling is not collapsed
  if(f[this.childrenProp]&&(!f[this.childrenProp].length||!this.isCollapsed(f))){var g=b.slice(0,-1).concat(c-1).concat(f[this.childrenProp].length);// if collapsed by default
  // and was no children here
  // open this node
  // let collapseProps = {};
  // if (collapsed && !prevSibling[this.childrenProp].length) {
  //   collapseProps = this.onToggleCollapse(prevSibling, true);
  // }
  // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
  this.moveItem({dragItem:a,pathFrom:b,pathTo:g});}}},tryDecreaseDepth:function d(a){var b=this.getPathById(a[this.keyProp]),c=b[b.length-1];// has parent
  if(1<b.length){var e=this.getItemByPath(b.slice(0,-1));// is last (by order) item in array
  if(c+1===e[this.childrenProp].length){var f=b.slice(0,-1);// if collapsed by default
  // and is last (by count) item in array
  // remove this node from list of open nodes
  // let collapseProps = {};
  // if (collapsed && parent[this.childrenProp].length == 1) {
  //   collapseProps = this.onToggleCollapse(parent, true);
  // }
  // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
  f[f.length-1]+=1,this.moveItem({dragItem:a,pathFrom:b,pathTo:f});}}},onMouseEnter:function i(a,b,c){a&&(a.preventDefault(),a.stopPropagation());var d=this.dragItem;// if the event does not have a valid item that belongs to this list, ignore it
  if(null===c||d[this.keyProp]!==c[this.keyProp]){// calculate the path the item is comming from
  var e=this.getPathById(d[this.keyProp]);// if the event is not emitted from this list and the item was not removed from this list,
  // we can ignore this event
  if(b===this.listId||0!==e.length){var f=null===c?0<e.length?[]:[0]:this.getPathById(c[this.keyProp]);// if we are dragging to an empty list, we need to remove
  // the item from the origin list and append it to the start of the new list
  // if the move to the new depth is greater than max depth,
  // don't move
  var g=this.getRealNextPath(e,f).length+(this.getItemDepth(d)-1);if(!(g>this.maxDepth)){// if collapsed by default
  // and move last (by count) child
  // remove parent node from list of open nodes
  var h={};if(this.collapsed&&1<e.length){var j=this.getItemByPath(e.slice(0,-1));1===j[this.childrenProp].length&&(h=this.onToggleCollapse(j,!0));}this.moveItem({dragItem:d,pathFrom:e,pathTo:f},h);}}}},isCollapsed:function b(a){return !!(-1<this.collapsedGroups.indexOf(a[this.keyProp])^this.collapsed)},dragApply:function a(){this.$emit("change",this.dragItem),this.itemsOld=null,this.dragItem=null,this.isDirty=!1;},dragRevert:function a(){this.$emit("input",this.itemsOld),this.itemsOld=null,this.dragItem=null,this.isDirty=!1;}}};

  /* script */
              const __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['nestable', ("nestable-" + _vm.group)]},[_c('ol',{staticClass:"nestable-list nestable-group"},[(_vm.listIsEmpty)?_c('Placeholder',{attrs:{"options":_vm.itemOptions}},[_vm._t("placeholder",[_vm._v("\n        No content\n      ")])],2):_vm._e(),_vm._v(" "),_vm._l((_vm.value),function(item,index){return [_c('NestableItem',{key:index,attrs:{"index":index,"item":item,"options":_vm.itemOptions},scopedSlots:_vm._u([_vm._l((Object.keys(_vm.$scopedSlots)),function(slot){return {key:slot,fn:function(scope){return [_vm._t(slot,null,null,scope)]}}})])})]})],2),_vm._v(" "),(_vm.dragItem)?[_c('div',{staticClass:"nestable-drag-layer"},[_c('ol',{staticClass:"nestable-list",style:(_vm.listStyles)},[_c('NestableItem',{attrs:{"item":_vm.dragItem,"options":_vm.itemOptions,"is-copy":true},scopedSlots:_vm._u([_vm._l((Object.keys(_vm.$scopedSlots)),function(slot){return {key:slot,fn:function(scope){return [_vm._t(slot,null,null,scope)]}}})])})],1)])]:_vm._e()],2)};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "VueNestable.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var VueNestable = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  //
  var script$3 = {name:"VueNestableHandle",mixins:[groupsObserver],props:{item:{type:Object,required:!1,default:function a(){return {}}}},inject:["group"],methods:{dragstart:function c(a){var b=this.item||this.$parent.item;this.notifyDragStart(this.group,a,b);}}};

  /* script */
              const __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{attrs:{"draggable":""},on:{"dragstart":_vm.dragstart}},[_vm._t("default")],2)};
  var __vue_staticRenderFns__$3 = [];

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "VueNestableHandle.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var VueNestableHandle = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  var index = {install:function b(a){a.component("VueNestable",VueNestable),a.component("VueNestableHandle",VueNestableHandle);}};

  exports.VueNestable = VueNestable;
  exports.VueNestableHandle = VueNestableHandle;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
