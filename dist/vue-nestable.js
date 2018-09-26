(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('immutability-helper')) :
  typeof define === 'function' && define.amd ? define(['immutability-helper'], factory) :
  (factory(global.update));
}(this, (function (update) { 'use strict';

  update = update && update.hasOwnProperty('default') ? update['default'] : update;

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

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {name:"NestableItem",props:{item:{type:Object,required:!0,default:function a(){return {}},validator:function b(a){// The item must have an id prop
  return a.id!==void 0}},index:{type:Number,required:!1,default:null},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!1,default:function a(){return {}}}},computed:{isDragging:function b(){var a=this.options.dragItem;return !this.isCopy&&a&&a.id===this.item.id},hasChildren:function a(){return this.item[this.options.childrenProp]&&0<this.item[this.options.childrenProp].length},hasHandle:function a(){return !!this.$scopedSlots.handler},itemClasses:function a(){return ["nestable-item".concat(this.isCopy?"-copy":""),"nestable-item".concat(this.isCopy?"-copy":"","-").concat(this.item.id),this.isDragging?"is-dragging":""]}}};

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("li", { class: _vm.itemClasses }, [
      _c(
        "div",
        {
          staticClass: "nestable-item-name",
          on: {
            mouseenter: function($event) {
              _vm.options.dragItem
                ? _vm.options.onMouseEnter($event, _vm.item)
                : null;
            }
          }
        },
        [_vm._t("default", null, { item: _vm.item })],
        2
      ),
      _vm._v(" "),
      _vm.hasChildren
        ? _c(
            "ol",
            { staticClass: "nestable-list" },
            [
              _vm._l(_vm.item[_vm.options.childrenProp], function(item, index) {
                return [
                  _c(
                    "nestable-item",
                    _vm._b(
                      {
                        key: index,
                        attrs: {
                          index: index,
                          item: item,
                          options: _vm.options,
                          "is-copy": _vm.isCopy
                        }
                      },
                      "nestable-item",
                      { $scopedSlots: _vm.$scopedSlots },
                      false
                    )
                  )
                ]
              })
            ],
            2
          )
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

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
      component.__file = "/home/ralph/Tinker/vue-nestable/src/nestable-item.vue";

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
    

    
    var nestableItem = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var nestableHelpers = {methods:{// ––––––––––––––––––––––––––––––––––––
  // Getter methods
  // ––––––––––––––––––––––––––––––––––––
  getPathById:function e(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.value,d=[];return c.every(function(c,e){if(c.id===a)d.push(e);else if(c[b.childrenProp]){var f=b.getPathById(a,c[b.childrenProp]);f.length&&(d=d.concat(e).concat(f));}return 0===d.length}),d},getItemByPath:function e(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.value,d=null;return a.forEach(function(a){var e=d?d[b.childrenProp]:c;d=e[a];}),d},getItemDepth:function c(a){var b=1;if(0<a[this.childrenProp].length){var d=a[this.childrenProp].map(this.getItemDepth);b+=Math.max.apply(Math,_toConsumableArray(d));}return b},getSplicePath:function h(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c={},d=b.numToRemove||0,e=b.itemsToInsert||[],f=a.length-1,g=c;return a.forEach(function(a,c){if(c===f)g.$splice=[[a,d].concat(_toConsumableArray(e))];else{var h={};g[a]=_defineProperty({},b.childrenProp,h),g=h;}}),c},getRealNextPath:function e(a,b){var c=a.length-1,d=b.length-1;if(a.length<b.length){// move into deep
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

  var closest=function(a,b){// closest(e.target, '.field')
  for(;a;){if(a.matches&&a.matches(b))return a;a=a.parentNode;}return null};var getOffsetRect=function(a){var b=Math.round,c=a.getBoundingClientRect(),d=document.body,e=document.documentElement,f=window.pageYOffset||e.scrollTop||d.scrollTop,g=window.pageXOffset||e.scrollLeft||d.scrollLeft,h=e.clientTop||d.clientTop||0,i=e.clientLeft||d.clientLeft||0,j=c.top+f-h,k=c.left+g-i;return {top:b(j),left:b(k)}};var getTotalScroll=function(a){for(var b=0,c=0;a=a.parentNode;)b+=a.scrollTop||0,c+=a.scrollLeft||0;return {top:b,left:c}};var getTransformProps=function(a,b){return {transform:"translate("+a+"px, "+b+"px)"}};var listWithChildren=function(a,b){return a.map(function(a){return _objectSpread({},a,_defineProperty({},b,a[b]?listWithChildren(a[b],b):[]))})};

  var script$1 = {components:{nestableItem:nestableItem},mixins:[nestableHelpers],props:{value:{type:Array,required:!0,default:function a(){return []}},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},group:{type:[String,Number],required:!1,default:function a(){return Math.random().toString(36).slice(2)}},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1}},provide:function a(){return {childrenProp:this.childrenProp,onDragStart:this.onDragStart,onMouseEnter:this.onMouseEnter}},data:function a(){return {itemsOld:null,// revert to copy in case of cancelling drag
  dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[]}},computed:{itemOptions:function a(){return {dragItem:this.dragItem,childrenProp:this.childrenProp,onDragStart:this.onDragStart,onMouseEnter:this.onMouseEnter}},listStyles:function(){var a=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem.id),b={};return a&&(b.width="".concat(a.clientWidth,"px")),this.elCopyStyles&&(b=_objectSpread({},b,this.elCopyStyles)),b}},created:function b(){var a=listWithChildren(this.value,this.childrenProp);this.$emit("input",a),this.isDirty=!1;},beforeDestroy:function a(){this.stopTrackMouse();},methods:{startTrackMouse:function a(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown);},stopTrackMouse:function a(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null;},onDragStart:function c(a,b){// this.onMouseMove(event)
  a&&(a.preventDefault(),a.stopPropagation()),this.el=closest(a.target,".nestable-item"),this.startTrackMouse(),this.dragItem=b,this.itemsOld=this.value;},onDragEnd:function c(a,b){a&&a.preventDefault(),this.stopTrackMouse(),this.el=null,b?this.dragRevert():this.dragApply();},onKeyDown:function b(a){27===a.which&&this.onDragEnd(null,!0);},onMouseMove:function i(a){var b=Math.abs,c=a.clientX,d=a.clientY,e=getTransformProps(c,d),f=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(!this.elCopyStyles){var g=getOffsetRect(this.el),h=getTotalScroll(this.el);this.elCopyStyles=_objectSpread({marginTop:"".concat(g.top-d-h.top,"px"),marginLeft:"".concat(g.left-c-h.left,"px")},e);}else{for(var j in this.elCopyStyles=_objectSpread({},this.elCopyStyles,e),e)e.hasOwnProperty(j)&&(f.style[j]=e[j]);var k=c-this.mouse.last.x;0<=k&&0<=this.mouse.shift.x||0>=k&&0>=this.mouse.shift.x?this.mouse.shift.x+=k:this.mouse.shift.x=0,this.mouse.last.x=c,b(this.mouse.shift.x)>this.threshold&&(0<this.mouse.shift.x?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0);}},moveItem:function i(a){var b=a.dragItem,c=a.pathFrom,d=a.pathTo,e=this.getRealNextPath(c,d),f=this.getSplicePath(c,{numToRemove:1,childrenProp:this.childrenProp}),g=this.getSplicePath(e,{numToRemove:0,itemsToInsert:[b],childrenProp:this.childrenProp}),h=this.value;h=update(h,f),h=update(h,g),this.isDirty=!0,this.$emit("input",h);},tryIncreaseDepth:function e(a){var b=this.getPathById(a.id),c=b[b.length-1],d=b.length+this.getItemDepth(a);// has previous sibling and isn't at max depth
  if(0<c&&d<=this.maxDepth){var f=this.getItemByPath(b.slice(0,-1).concat(c-1));// previous sibling is not collapsed
  if(!f[this.childrenProp].length||!this.isCollapsed(f)){var g=b.slice(0,-1).concat(c-1).concat(f[this.childrenProp].length);// if collapsed by default
  // and was no children here
  // open this node
  // let collapseProps = {};
  // if (collapsed && !prevSibling[this.childrenProp].length) {
  //   collapseProps = this.onToggleCollapse(prevSibling, true);
  // }
  // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
  this.moveItem({dragItem:a,pathFrom:b,pathTo:g});}}},tryDecreaseDepth:function d(a){var b=this.getPathById(a.id),c=b[b.length-1];// has parent
  if(1<b.length){var e=this.getItemByPath(b.slice(0,-1));// is last (by order) item in array
  if(c+1===e[this.childrenProp].length){var f=b.slice(0,-1);// if collapsed by default
  // and is last (by count) item in array
  // remove this node from list of open nodes
  // let collapseProps = {};
  // if (collapsed && parent[this.childrenProp].length == 1) {
  //   collapseProps = this.onToggleCollapse(parent, true);
  // }
  // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
  f[f.length-1]+=1,this.moveItem({dragItem:a,pathFrom:b,pathTo:f});}}},onMouseEnter:function h(a,b){a&&(a.preventDefault(),a.stopPropagation());var c=this.dragItem;if(c.id!==b.id){var d=this.getPathById(c.id),e=this.getPathById(b.id),f=this.getRealNextPath(d,e).length+(this.getItemDepth(c)-1);if(!(f>this.maxDepth)){// if collapsed by default
  // and move last (by count) child
  // remove parent node from list of open nodes
  var g={};if(this.collapsed&&1<d.length){var i=this.getItemByPath(d.slice(0,-1));1===i[this.childrenProp].length&&(g=this.onToggleCollapse(i,!0));}this.moveItem({dragItem:c,pathFrom:d,pathTo:e},g);}}},isCollapsed:function b(a){return !!(-1<this.collapsedGroups.indexOf(a.id)^this.collapsed)},dragApply:function a(){this.$emit("change",this.dragItem),this.itemsOld=null,this.dragItem=null,this.isDirty=!1;},dragRevert:function a(){this.$emit("input",this.itemsOld),this.itemsOld=null,this.dragItem=null,this.isDirty=!1;}}};

  /* script */
              const __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { class: ["nestable", "nestable-" + _vm.group] },
      [
        _c(
          "ol",
          { staticClass: "nestable-list nestable-group" },
          [
            _vm._l(_vm.value, function(item, index) {
              return [
                _c(
                  "nestable-item",
                  _vm._b(
                    {
                      key: index,
                      attrs: {
                        index: index,
                        item: item,
                        options: _vm.itemOptions
                      }
                    },
                    "nestable-item",
                    { $scopedSlots: _vm.$scopedSlots },
                    false
                  )
                )
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _vm.dragItem
          ? [
              _c("div", { staticClass: "nestable-drag-layer" }, [
                _c(
                  "ol",
                  { staticClass: "nestable-list", style: _vm.listStyles },
                  [
                    _c(
                      "nestable-item",
                      _vm._b(
                        {
                          attrs: {
                            item: _vm.dragItem,
                            options: _vm.itemOptions,
                            "is-copy": true
                          }
                        },
                        "nestable-item",
                        { $scopedSlots: _vm.$scopedSlots },
                        false
                      )
                    )
                  ],
                  1
                )
              ])
            ]
          : _vm._e()
      ],
      2
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

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
      component.__file = "/home/ralph/Tinker/vue-nestable/src/nestable.vue";

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
    

    
    var nestable = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  var script$2 = {props:{item:{type:Object,required:!1,default:function a(){return {}}}},inject:["onDragStart"],methods:{dragstart:function c(a){var b=this.item||this.$parent.item;this.onDragStart(a,b);}}};

  /* script */
              const __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "span",
      { attrs: { draggable: "" }, on: { dragstart: _vm.dragstart } },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

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
      component.__file = "/home/ralph/Tinker/vue-nestable/src/nestable-handle.vue";

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
    

    
    var nestableHandle = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  module.exports={install:function b(a){a.component("vue-nestable",nestable),a.component("vue-nestable-handle",nestableHandle);}};

})));
