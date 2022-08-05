(window["webpackJsonpjira-kpi-dashboard"]=window["webpackJsonpjira-kpi-dashboard"]||[]).push([[22],{519:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(17),i=a(18),s=a(21),c=a(19),o=a(20),l=a(31),d=a(532),u=a(0),p=a.n(u),h=a(14),g=a.n(h),f=a(8),m=a(154),b=a.n(m),O=a(525),D=a(522),v=a(473),E=a(290),j=a(291),S=a.n(j),y=a(287),C=a(222),P=a(5),k=a(533),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={startDate:null,endDate:null,endOpen:!1},a.disabledStartDate=function(e){var t=a.state.endDate;return!(!e||!t)&&e.valueOf()>t.valueOf()},a.disabledEndDate=function(e){var t=a.state.startDate;return!(!e||!t)&&e.valueOf()<=t.valueOf()},a.onChange=function(e,t){a.setState(Object(n.a)({},e,t)),a.props.onPickDate(Object(n.a)({},e,t))},a.onStartChange=function(e){a.onChange("startDate",e)},a.onEndChange=function(e){a.onChange("endDate",e)},a.handleStartOpenChange=function(e){e||a.setState({endOpen:!0})},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.startDate,a=e.endDate,n=e.endOpen;return p.a.createElement(p.a.Fragment,null,p.a.createElement(k.a,{disabledDate:this.disabledStartDate,format:"DD-MM-YYYY",value:t,placeholder:"D\xe9but",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,size:"large"}),"   ",p.a.createElement(k.a,{disabledDate:this.disabledEndDate,format:"DD-MM-YYYY",value:a,placeholder:"Fin",onChange:this.onEndChange,open:n,onOpenChange:this.handleEndOpenChange,size:"large"}))}}]),t}(u.Component),z=a(127),N=a.n(z);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=Object(l.a)(C.a);R.unshift({title:"Plateau",dataIndex:"projectName"}),R.splice(R.length-2,2);var I=["5","10","15","20"],M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={data:[],pagination:{defaultPageSize:10,pageSizeOptions:[].concat(I),showSizeChanger:!0},loading:!1,params:{},initialPageSizeLength:I.length},a.handleTableChange=function(e,t,n){var r=Y({},a.state.pagination);r.current=e.current;var i=Y({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order,startDate:a.state.startDate,endDate:a.state.endDate},t);a.setState({pagination:r,params:i}),a.fetch(i)},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;a.setState({loading:!0});var t="";e&&(t=Object(P.c)(e)),g.a.get("".concat(f.a.apiBaseUrl,"/sprint/dashboard/").concat(t),Object(P.d)()).then((function(e){var t=e.data,n=Y({},a.state.pagination);n.total=t.totalElements,n.pageSizeOptions.length===a.state.initialPageSizeLength&&(n.pageSizeOptions.push(n.total.toString()),n.pageSizeOptions.sort((function(e,t){return e-t})));var r=t.content.map((function(e){var t=e.name,a=e.startDate,n=e.endDate,r=e.state,i=e.nbIssues,s=e.bugs,c=e.usEngage,o=e.usRealise,l=e.stpEngage,d=e.stpRealise,u=e.completude,p=e.acceptanceUs,h=e.acceleration,g=e.projectName;return{key:e.id,name:t,startDate:a,endDate:n,state:r,nbIssues:i,bugs:s,usEngage:c,usRealise:o,stpEngage:l,stpRealise:d,completude:u,acceptanceUs:p,acceleration:h,projectName:g}}));a.setState({loading:!1,data:r,pagination:n})})).catch((function(e){console.log("err",e)}))},a.onPickDate=function(e){a.setState(e)},a.onDatePicked=function(){if(a.state.startDate&&a.state.endDate){var e=a.state.params;e.startDate=a.state.startDate,e.endDate=a.state.endDate,a.fetch(e)}},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e){this.props.boardId!==e.boardId&&this.fetch()}},{key:"render",value:function(){var e=this;return p.a.createElement(O.a,{className:"mt-1"},p.a.createElement(D.a,null,p.a.createElement(O.a,{sm:4,xs:12},p.a.createElement(v.a,null,p.a.createElement(y.a,{csvData:this.state.data,fileName:"Extraction - "+Object(P.b)(N()()),columns:R}),p.a.createElement(S.a,{trigger:function(){return p.a.createElement(E.a,{variant:"danger"},"  ",p.a.createElement("i",{className:"feather icon-file-text  mx-0 ",style:{fontSize:"25px "}})," ",p.a.createElement("span",{className:"font-weight-bold"},"Pdf"))},content:function(){return e.componentRef}}))),p.a.createElement(O.a,{sm:8,xs:12,className:"align-self-center text-right "},p.a.createElement(w,{onPickDate:this.onPickDate}),p.a.createElement(E.a,{onClick:this.onDatePicked,variant:"outline-success",className:"btn-icon  btn-rounded ml-2"},p.a.createElement("i",{className:"feather icon-save","aria-hidden":"true"})))),p.a.createElement(D.a,{className:"mt-2 justify-content-center "},p.a.createElement(b.a,{className:"shadow-1 rounded ",ref:function(t){return e.componentRef=t}},p.a.createElement(d.a,{columns:R,dataSource:this.state.data,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange}))))}}]),t}(u.Component);t.default=M}}]);
//# sourceMappingURL=22.c10ab2da.chunk.js.map