(window["webpackJsonpjira-kpi-dashboard"]=window["webpackJsonpjira-kpi-dashboard"]||[]).push([[6],{122:function(e,t,n){"use strict";var r=n(113);t.__esModule=!0,t.default=function(e){return(0,o.default)(e.replace(a,"ms-"))};var o=r(n(155)),a=/^-ms-/;e.exports=t.default},123:function(e,t,n){"use strict";var r=n(113);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var o,a,i,l,s,u,d,c,f,p,m,h=r(n(133)),v="transform";if(t.transform=v,t.animationEnd=i,t.transitionEnd=a,t.transitionDelay=d,t.transitionTiming=u,t.transitionDuration=s,t.transitionProperty=l,t.animationDelay=m,t.animationTiming=p,t.animationDuration=f,t.animationName=c,h.default){var b=function(){for(var e,t,n=document.createElement("div").style,r={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},o=Object.keys(r),a="",i=0;i<o.length;i++){var l=o[i];if(l+"TransitionProperty"in n){a="-"+l.toLowerCase(),e=r[l]("TransitionEnd"),t=r[l]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:a}}();o=b.prefix,t.transitionEnd=a=b.transitionEnd,t.animationEnd=i=b.animationEnd,t.transform=v=o+"-"+v,t.transitionProperty=l=o+"-transition-property",t.transitionDuration=s=o+"-transition-duration",t.transitionDelay=d=o+"-transition-delay",t.transitionTiming=u=o+"-transition-timing-function",t.animationName=c=o+"-animation-name",t.animationDuration=f=o+"-animation-duration",t.animationTiming=p=o+"-animation-delay",t.animationDelay=m=o+"-animation-timing-function"}var g={transform:v,end:a,property:l,timing:u,delay:d,duration:s};t.default=g},125:function(e,t,n){"use strict";var r=n(113);t.__esModule=!0,t.default=function(e,t,n){var r="",d="",c=t;if("string"===typeof t){if(void 0===n)return e.style[(0,o.default)(t)]||(0,i.default)(e).getPropertyValue((0,a.default)(t));(c={})[t]=n}Object.keys(c).forEach((function(t){var n=c[t];n||0===n?(0,u.default)(t)?d+=t+"("+n+") ":r+=(0,a.default)(t)+": "+n+";":(0,l.default)(e,(0,a.default)(t))})),d&&(r+=s.transform+": "+d+";");e.style.cssText+=";"+r};var o=r(n(122)),a=r(n(136)),i=r(n(138)),l=r(n(139)),s=n(123),u=r(n(140));e.exports=t.default},130:function(e,t,n){"use strict";var r=n(113);t.__esModule=!0,t.default=void 0;var o=r(n(123)),a=r(n(125));function i(e,t,n){var r,a={target:e,currentTarget:e};function i(e){e.target===e.currentTarget&&(clearTimeout(r),e.target.removeEventListener(o.default.end,i),t.call(this))}o.default.end?null==n&&(n=s(e)||0):n=0,o.default.end?(e.addEventListener(o.default.end,i,!1),r=setTimeout((function(){return i(a)}),1.5*(n||100))):setTimeout(i.bind(null,a),0)}i._parseDuration=s;var l=i;function s(e){var t=(0,a.default)(e,o.default.duration),n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}t.default=l,e.exports=t.default},131:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,"a",(function(){return r}))},134:function(e,t,n){"use strict";var r=n(111),o=n(0),a=n.n(o),i=n(110),l=n.n(i);t.a=function(e){return a.a.forwardRef((function(t,n){return a.a.createElement("div",Object(r.a)({},t,{ref:n,className:l()(t.className,e)}))}))}},135:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=o.a.createContext(null)},136:function(e,t,n){"use strict";var r=n(113);t.__esModule=!0,t.default=function(e){return(0,o.default)(e).replace(a,"-ms-")};var o=r(n(137)),a=/^ms-/;e.exports=t.default},137:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(r,"-$1").toLowerCase()};var r=/([A-Z])/g;e.exports=t.default},138:function(e,t,n){"use strict";var r=n(113);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,o.default)(t))&&(t="styleFloat");var r=e.currentStyle[t]||null;if(null==r&&n&&n[t]&&(r=n[t]),i.test(r)&&!a.test(t)){var l=n.left,s=e.runtimeStyle,u=s&&s.left;u&&(s.left=e.currentStyle.left),n.left="fontSize"===t?"1em":r,r=n.pixelLeft+"px",n.left=l,u&&(s.left=u)}return r}}};var o=r(n(122)),a=/^(top|right|bottom|left)$/,i=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},139:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},140:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return!(!e||!r.test(e))};var r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},183:function(e,t,n){"use strict";var r,o=n(111),a=n(112),i=n(110),l=n.n(i),s=n(0),u=n.n(s),d=n(101),c=n(130),f=n.n(c),p=n(131),m=((r={})[d.b]="show",r[d.a]="show",r),h=u.a.forwardRef((function(e,t){var n=e.className,r=e.children,i=Object(a.a)(e,["className","children"]),c=Object(s.useCallback)((function(e){Object(p.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(d.e,Object(o.a)({ref:t,addEndListener:f.a},i,{onEnter:c}),(function(e,t){return u.a.cloneElement(r,Object(o.a)({},t,{className:l()("fade",n,r.props.className,m[e])}))}))}));h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},h.displayName="Fade",t.a=h},185:function(e,t,n){"use strict";var r=n(111),o=n(112),a=n(110),i=n.n(a),l=n(0),s=n.n(l),u=n(118),d=n(151),c=n(134),f=n(135),p=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=e.variant,d=e.as,c=void 0===d?"img":d,f=Object(o.a)(e,["bsPrefix","className","variant","as"]),p=Object(u.b)(n,"card-img");return s.a.createElement(c,Object(r.a)({ref:t,className:i()(l?p+"-"+l:p,a)},f))}));p.displayName="CardImg",p.defaultProps={variant:null};var m=p,h=Object(c.a)("h5"),v=Object(c.a)("h6"),b=Object(d.a)("card-body"),g=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,d=e.bg,c=e.text,p=e.border,m=e.body,h=e.children,v=e.as,g=void 0===v?"div":v,y=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(u.b)(n,"card"),O=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return s.a.createElement(f.a.Provider,{value:O},s.a.createElement(g,Object(r.a)({ref:t},y,{className:i()(a,E,d&&"bg-"+d,c&&"text-"+c,p&&"border-"+p)}),m?s.a.createElement(b,null,h):h))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=m,g.Title=Object(d.a)("card-title",{Component:h}),g.Subtitle=Object(d.a)("card-subtitle",{Component:v}),g.Body=b,g.Link=Object(d.a)("card-link",{Component:"a"}),g.Text=Object(d.a)("card-text",{Component:"p"}),g.Header=Object(d.a)("card-header"),g.Footer=Object(d.a)("card-footer"),g.ImgOverlay=Object(d.a)("card-img-overlay");t.a=g},199:function(e,t,n){"use strict";var r,o=n(111),a=n(112),i=n(142),l=n(110),s=n.n(l),u=n(125),d=n.n(u),c=n(0),f=n.n(c),p=n(130),m=n.n(p),h=n(101),v=n(131),b=n(173),g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var y=((r={})[h.c]="collapse",r[h.d]="collapsing",r[h.b]="collapsing",r[h.a]="collapse show",r),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=g[e];return n+parseInt(d()(t,r[0]),10)+parseInt(d()(t,r[1]),10)}},O=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Object(v.a)(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(i.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,i=t.onEntered,l=t.onExit,u=t.onExiting,d=t.className,c=t.children,p=Object(a.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var v=Object(b.a)(this.handleEnter,n),g=Object(b.a)(this.handleEntering,r),E=Object(b.a)(this.handleEntered,i),O=Object(b.a)(this.handleExit,l),w=Object(b.a)(this.handleExiting,u);return f.a.createElement(h.e,Object(o.a)({addEndListener:m.a},p,{"aria-expanded":p.role?p.in:null,onEnter:v,onEntering:g,onEntered:E,onExit:O,onExiting:w}),(function(t,n){return f.a.cloneElement(c,Object(o.a)({},n,{className:s()(d,c.props.className,y[t],"width"===e.getDimension()&&"width")}))}))},t}(f.a.Component);O.defaultProps=E,t.a=O},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,i){var l=o||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+a+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,d=Array(u>6?u-6:0),c=6;c<u;c++)d[c-6]=arguments[c];return e.apply(void 0,[n,r,l,a,s].concat(d))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(n(0)),a=i(n(200));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)((function(e,t,n,a,i){var l=e[t],s="undefined"===typeof l?"undefined":r(l);return o.default.isValidElement(l)?new Error("Invalid "+a+" `"+i+"` of type ReactElement supplied to `"+n+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===s&&"function"===typeof l.render||1===l.nodeType?null:new Error("Invalid "+a+" `"+i+"` of value `"+l+"` supplied to `"+n+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},299:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=d(n(1)),o=d(n(240)),a=d(n(133)),i=d(n(295)),l=d(n(0)),s=d(n(16)),u=d(n(499));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f={container:r.default.oneOfType([o.default,r.default.func]),onContainerResolved:r.default.func},p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];if(t=e.call.apply(e,[this].concat(r))||this,!a.default)return c(t);var i=t.props.container;return"function"===typeof i&&(i=i()),i&&!s.default.findDOMNode(i)?c(t):(t.setContainer(i),t)}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.UNSAFE_componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e.container)},o.componentDidMount=function(){this._container?this.props.onContainerResolved&&this.props.onContainerResolved():(this.setContainer(this.props.container),this.forceUpdate(this.props.onContainerResolved))},o.componentWillUnmount=function(){this._container=null},o.setContainer=function(e){this._container=(0,u.default)(e,(0,i.default)().body)},o.render=function(){return this._container?this.props.children(this._container):null},r}(l.default.Component);p.propTypes=f;var m=p;t.default=m,e.exports=t.default},496:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=p(n(1)),o=p(n(497)),a=p(n(240)),i=p(n(0)),l=p(n(16)),s=p(n(498)),u=p(n(293)),d=n(243),c=p(n(296)),f=p(n(299));function p(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){var t,n;function r(t,n){var r;return(r=e.call(this,t,n)||this).handleHidden=function(){var e;(r.setState({exited:!0}),r.props.onExited)&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!t.show},r.onHiddenListener=r.handleHidden.bind(v(v(r))),r._lastTarget=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e){return e.show?{exited:!1}:e.transition?null:{exited:!0}};var o=r.prototype;return o.componentDidMount=function(){this.setState({target:this.getTarget()})},o.componentDidUpdate=function(e){if(this.props!==e){var t=this.getTarget();t!==this.state.target&&this.setState({target:t})}},o.getTarget=function(){var e=this.props.target;return(e="function"===typeof e?e():e)&&l.default.findDOMNode(e)||null},o.render=function(){var e=this,t=this.props,n=(t.target,t.container),r=t.containerPadding,o=t.placement,a=t.rootClose,l=t.children,c=t.flip,f=t.popperConfig,p=void 0===f?{}:f,v=t.transition,b=h(t,["target","container","containerPadding","placement","rootClose","children","flip","popperConfig","transition"]),g=this.state.target;if(!(b.show||v&&!this.state.exited))return null;var y=l,E=p.modifiers,O=void 0===E?{}:E,w=m({},p,{placement:o,referenceElement:g,enableEvents:b.show,modifiers:m({},O,{preventOverflow:m({padding:r||5},O.preventOverflow),flip:m({enabled:!!c},O.preventOverflow)})});return y=i.default.createElement(d.Popper,w,(function(t){var n=t.arrowProps,r=t.style,a=t.ref,l=h(t,["arrowProps","style","ref"]);e.popper=l;var s=e.props.children(m({},l,{placement:l.placement||o,show:b.show,arrowProps:n,props:{ref:a,style:r}}));if(v){var u=b.onExit,d=b.onExiting,c=b.onEnter,f=b.onEntering,p=b.onEntered;s=i.default.createElement(v,{in:b.show,appear:!0,onExit:u,onExiting:d,onExited:e.onHiddenListener,onEnter:c,onEntering:f,onEntered:p},s)}return s})),a&&(y=i.default.createElement(u.default,{onRootClose:b.onHide,event:b.rootCloseEvent,disabled:b.rootCloseDisabled},y)),i.default.createElement(s.default,{container:n},y)},r}(i.default.Component);b.propTypes=m({},s.default.propTypes,{show:r.default.bool,placement:r.default.oneOf(d.placements),container:r.default.oneOfType([a.default,r.default.func]),flip:r.default.bool,children:r.default.func.isRequired,popperConfig:r.default.object,rootClose:r.default.bool,rootCloseEvent:u.default.propTypes.event,rootCloseDisabled:u.default.propTypes.disabled,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return t.apply(void 0,[e].concat(o))},transition:o.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func});var g=(0,c.default)((function(e,t){return i.default.createElement(f.default,{container:e.container},(function(n){return i.default.createElement(b,m({},e,{ref:t,container:n}))}))}),{displayName:"withContainer(Overlay)"});t.default=g,e.exports=t.default},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),o=n(32),a=i(n(200));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.default)((function(e,t,n,a,i){var l=e[t];return r.default.isValidElement(l)?new Error("Invalid "+a+" `"+i+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,o.isValidElementType)(l)?null:new Error("Invalid "+a+" `"+i+"` of value `"+l+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},498:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n(1)),o=s(n(240)),a=s(n(0)),i=s(n(16)),l=s(n(299));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this;return this.props.children?a.default.createElement(l.default,{container:this.props.container,onContainerResolved:this.props.onRendered},(function(t){return i.default.createPortal(e.props.children,t)})):null},r}(a.default.Component);u.displayName="Portal",u.propTypes={container:r.default.oneOfType([o.default,r.default.func]),onRendered:r.default.func};var d=u;t.default=d,e.exports=t.default},499:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return null==e?t:(e="function"===typeof e?e():e,o.default.findDOMNode(e)||null)};var r,o=(r=n(16))&&r.__esModule?r:{default:r};e.exports=t.default},528:function(e,t,n){"use strict";var r=n(111),o=n(112),a=n(110),i=n.n(a),l=n(0),s=n.n(l),u=(n(238),n(118)),d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.placement,l=e.className,d=e.style,c=e.children,f=e.arrowProps,p=(e.scheduleUpdate,e.outOfBoundaries,Object(o.a)(e,["bsPrefix","placement","className","style","children","arrowProps","scheduleUpdate","outOfBoundaries"]));return n=Object(u.b)(n,"tooltip"),s.a.createElement("div",Object(r.a)({ref:t,style:d,role:"tooltip","x-placement":a,className:i()(l,n,"bs-tooltip-"+a)},p),s.a.createElement("div",Object(r.a)({className:"arrow"},f)),s.a.createElement("div",{className:n+"-inner"},c))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.a=d},529:function(e,t,n){"use strict";var r=n(111),o=n(112),a=n(0),i=n.n(a),l=n(1),s=n.n(l),u=n(290),d=n(473),c=n(307),f={id:s.a.any,toggleLabel:s.a.string,href:s.a.string,target:s.a.string,onClick:s.a.func,title:s.a.node.isRequired,disabled:s.a.bool,menuRole:s.a.string,rootCloseEvent:s.a.string,bsPrefix:s.a.string,variant:s.a.string,size:s.a.string},p=i.a.forwardRef((function(e,t){var n=e.id,a=e.bsPrefix,l=e.size,s=e.variant,f=e.title,p=e.toggleLabel,m=e.children,h=e.onClick,v=e.href,b=e.target,g=e.menuRole,y=e.rootCloseEvent,E=Object(o.a)(e,["id","bsPrefix","size","variant","title","toggleLabel","children","onClick","href","target","menuRole","rootCloseEvent"]);return i.a.createElement(c.a,Object(r.a)({ref:t},E,{as:d.a}),i.a.createElement(u.a,{size:l,variant:s,disabled:E.disabled,bsPrefix:a,href:v,target:b,onClick:h},f),i.a.createElement(c.a.Toggle,{split:!0,id:n,size:l,variant:s,disabled:E.disabled,childBsPrefix:a},i.a.createElement("span",{className:"sr-only"},p)),i.a.createElement(c.a.Menu,{role:g,rootCloseEvent:y},m))}));p.propTypes=f,p.defaultProps={toggleLabel:"Toggle dropdown"},p.displayName="SplitButton",t.a=p},530:function(e,t,n){"use strict";var r=n(111),o=n(112),a=n(110),i=n.n(a),l=n(0),s=n.n(l),u=n(118),d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,l=Object(o.a)(e,["bsPrefix","className"]),d=Object(u.b)(n,"btn-toolbar");return s.a.createElement("div",Object(r.a)({},l,{ref:t,className:i()(a,d)}))}));d.displayName="ButtonToolbar",d.defaultProps={role:"toolbar"},t.a=d},539:function(e,t,n){"use strict";var r=n(111),o=n(112),a=n(142),i=n(294),l=n.n(i),s=n(0),u=n.n(s),d=n(16),c=n.n(d),f=(n(6),n(110)),p=n.n(f),m=n(496),h=n.n(m),v=n(183),b={transition:v.a,rootClose:!1,show:!1,placement:"top"};function g(e){var t=e.children,n=e.transition,a=Object(o.a)(e,["children","transition"]);return n=!0===n?v.a:n||null,u.a.createElement(h.a,Object(r.a)({},a,{transition:n}),(function(e){var a=e.props,i=e.arrowProps,l=e.show,s=Object(o.a)(e,["props","arrowProps","show"]);return function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(d.findDOMNode)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(d.findDOMNode)(e))})}(a,i),"function"===typeof t?t(Object(r.a)({},s,{},a,{show:l,arrowProps:i})):u.a.cloneElement(t,Object(r.a)({},s,{},a,{arrowProps:i,className:p()(t.props.className,!n&&l&&"show"),style:Object(r.a)({},t.props.style,{},a.style)}))}))}g.defaultProps=b;var y=g,E=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return this.props.children},t}(u.a.Component),O=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}},w=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).getTarget=function(){return c.a.findDOMNode(r.trigger.current)},r.handleShow=function(){clearTimeout(r._timeout),r._hoverState="show";var e=O(r.props.delay);e.show?r._timeout=setTimeout((function(){"show"===r._hoverState&&r.show()}),e.show):r.show()},r.handleHide=function(){clearTimeout(r._timeout),r._hoverState="hide";var e=O(r.props.delay);e.hide?r._timeout=setTimeout((function(){"hide"===r._hoverState&&r.hide()}),e.hide):r.hide()},r.handleFocus=function(e){var t=r.getChildProps().onFocus;r.handleShow(e),t&&t(e)},r.handleBlur=function(e){var t=r.getChildProps().onBlur;r.handleHide(e),t&&t(e)},r.handleClick=function(e){var t=r.getChildProps().onClick;r.state.show?r.hide():r.show(),t&&t(e)},r.handleMouseOver=function(e){r.handleMouseOverOut(r.handleShow,e,"fromElement")},r.handleMouseOut=function(e){return r.handleMouseOverOut(r.handleHide,e,"toElement")},r.trigger=u.a.createRef(),r.state={show:!!t.defaultShow},r.ariaModifier={enabled:!0,order:900,fn:function(e){var t=e.instance.popper,n=r.getTarget();if(!r.state.show||!n)return e;var o=t.getAttribute("role")||"";return t.id&&"tooltip"===o.toLowerCase()&&n.setAttribute("aria-describedby",t.id),e}},r}Object(a.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){clearTimeout(this._timeout)},n.getChildProps=function(){return u.a.Children.only(this.props.children).props},n.handleMouseOverOut=function(e,t,n){var r=t.currentTarget,o=t.relatedTarget||t.nativeEvent[n];o&&o===r||l()(r,o)||e(t)},n.hide=function(){this.setState({show:!1})},n.show=function(){this.setState({show:!0})},n.render=function(){var e=this.props,t=e.trigger,n=e.overlay,a=e.children,i=e.popperConfig,l=void 0===i?{}:i,d=Object(o.a)(e,["trigger","overlay","children","popperConfig"]);delete d.delay,delete d.defaultShow;var c=u.a.Children.only(a),f={},p=null==t?[]:[].concat(t);return-1!==p.indexOf("click")&&(f.onClick=this.handleClick),-1!==p.indexOf("focus")&&(f.onFocus=this.handleShow,f.onBlur=this.handleHide),-1!==p.indexOf("hover")&&(f.onMouseOver=this.handleMouseOver,f.onMouseOut=this.handleMouseOut),u.a.createElement(u.a.Fragment,null,u.a.createElement(E,{ref:this.trigger},Object(s.cloneElement)(c,f)),u.a.createElement(y,Object(r.a)({},d,{popperConfig:Object(r.a)({},l,{modifiers:Object(r.a)({},l.modifiers,{ariaModifier:this.ariaModifier})}),show:this.state.show,onHide:this.handleHide,target:this.getTarget}),n))},t}(u.a.Component);w.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};t.a=w}}]);
//# sourceMappingURL=6.c20d8213.chunk.js.map