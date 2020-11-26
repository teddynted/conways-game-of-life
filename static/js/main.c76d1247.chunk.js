(this["webpackJsonpconways-game-of-life"]=this["webpackJsonpconways-game-of-life"]||[]).push([[0],{41:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t(28),c=t.n(a),o=(t(41),t(11)),u=t(12),l=t(15),s=t(14),f=t(3),d=t(18),b=t(13),h="SET_CONFIG",g=function(n){return{type:h,config:n}},j=t(4),p=t(35);function v(){var n=Object(f.a)(["\n    background-color: #f62459;\n    color: #fff;\n    padding: 10px;\n    margin: 10px 0;\n    display: inline-block;\n"]);return v=function(){return n},n}function O(){var n=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    display: inline-block;\n    width: ",";\n    height: ",";\n    text-align: center;\n    span {\n        display: inline-block;\n    }\n    ","\n"]);return O=function(){return n},n}function x(){var n=Object(f.a)(["\n    padding: 0;\n    margin: 0;\n    height: ",";\n    width: ",";\n"]);return x=function(){return n},n}var m=j.a.div(x(),(function(n){return n.height}),(function(n){return n.width})),S=j.a.div(O(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.background&&"\n        background-color: #000;\n    "})),y=j.a.a(v()),z=function(n,e){for(var t=n/e,r=n/e,i=function(n,e){for(var t=new Array(n),r=0;r<t.length;r++)t[r]=new Array(e);return t}(t,r),a=0;a<t;a++)for(var c=0;c<r;c++)i[a][c]=Math.round(Math.random());return w(e,n,i)},w=function(n,e,t){return t.map((function(i,a){return Object(r.jsx)(m,{height:"".concat(n,"px"),width:"".concat(e,"px"),children:i.map((function(e,i){return Object(r.jsx)(S,{background:1===t[a][i],width:"".concat(n,"px"),height:"".concat(n,"px")},i)}))},a)}))},C=function(n){var e=n.config,t=Object(i.useState)([]),a=Object(p.a)(t,2),c=a[0],o=a[1],u=e.boardSize,l=e.cellSize,s=e.generation;return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(y,{onClick:function(){return function(n,e,t,r){for(var i=function(e){setTimeout((function(){n(z(t,r))}),1e3*(e+1))},a=0;a<e;a++)i(a)}(o,s,u,l)},children:"Start Iteration"}),c&&c.length>0?c:z(u,l)]})};function k(){var n=Object(f.a)(["\n    width: 400px;\n    height: 400px;\n    padding: 0;\n"]);return k=function(){return n},n}var T=j.a.div(k()),F=function(n){Object(l.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).state={generation:0,cellSize:0,boardSize:0},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState(this.props.config)}},{key:"render",value:function(){return Object(r.jsx)(T,{children:this.state.boardSize&&Object(r.jsx)(C,{config:this.props.config})})}}]),t}(i.Component),I=t(17),N=function(n){return/^[1-9]\d*$/.test(n)};function M(){var n=Object(f.a)(["\n    color: #900;\n    display: inline-block;\n    margin: 8px 0;\n"]);return M=function(){return n},n}function A(){var n=Object(f.a)(["\n    background: rgb(255, 255, 255);\n    border-radius: 2px;\n    border: 1px solid rgb(217, 217, 217);\n    height: 32px;\n    padding: 0 6px;\n"]);return A=function(){return n},n}function D(){var n=Object(f.a)(["\n    font-size: 14px;\n    font-weight: 500;\n    margin: 5px 0;\n    display: inline-block;\n"]);return D=function(){return n},n}function V(){var n=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0;\n    width: 200px;\n"]);return V=function(){return n},n}var B=j.a.div(V()),E=j.a.label(D()),G=j.a.input(A()),J=j.a.span(M()),L=function(n,e){return"generation"!==n||N(e)?"cellSize"!==n||N(e)?"boardSize"!==n||N(e)?"":Object(r.jsx)(J,{children:"Invalid board size"}):Object(r.jsx)(J,{children:"Invalid cell size"}):Object(r.jsx)(J,{children:"Invalid generation"})},P=function(n){var e=n.labelText,t=n.id,i=n.placeholder,a=n.value,c=n.onChange;return Object(r.jsxs)(B,{children:[Object(r.jsx)(E,{htmlFor:t,children:e}),Object(r.jsx)(G,{type:"number",onChange:c,value:a,placeholder:i,id:t,name:t}),L(t,a)]})};function $(){var n=Object(f.a)(["\n    padding: 10px;\n    margin: 0;\n    height: ",";\n    width: ",";\n    background-color: #000;\n    color: #fff;\n    border: none;\n    &:focus {\n        outline:0;\n        outline: none;\n    }\n"]);return $=function(){return n},n}function _(){var n=Object(f.a)(["\n    padding: 0;\n    margin: 0;\n    height: ",";\n    width: ",";\n"]);return _=function(){return n},n}var q=j.a.form(_(),(function(n){return n.height}),(function(n){return n.width})),H=j.a.input($(),(function(n){return n.height}),(function(n){return n.width})),K=function(n){var e=n.state,t=n.handleChangeValue,i=n.handleSubmit;return Object(r.jsxs)(q,{children:[Object(r.jsx)(P,{labelText:"Generations (1-8):",id:"generation",value:e.generation,name:"generation",onChange:t}),Object(r.jsx)(P,{labelText:"Cell Size",id:"cellSize",value:e.cellSize,name:"cellSize",onChange:t}),Object(r.jsx)(P,{labelText:"Board Size:",id:"boardSize",value:e.boardSize,name:"boardSize",onChange:t}),Object(r.jsx)(H,{onClick:i,type:"submit"})]})},Q=function(n){Object(l.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).state={generation:4,cellSize:40,boardSize:400},n.handleChangeValue=function(e){n.setState(Object(I.a)({},e.currentTarget.id,e.currentTarget.value))},n.handleSubmit=function(e){N(Number(n.state.generation))&&N(Number(n.state.cellSize))>0&&N(Number(n.state.boardSize))>0&&n.props.setConfig({generation:Number(n.state.generation),cellSize:Number(n.state.cellSize),boardSize:Number(n.state.boardSize)}),e.preventDefault()},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState(this.props.config)}},{key:"render",value:function(){var n=this.props.config;return Object(r.jsx)(K,{state:this.state,config:n,handleChangeValue:this.handleChangeValue.bind(this),handleSubmit:this.handleSubmit.bind(this)})}}]),t}(i.Component),R=t(34),U=t.n(R);function W(){var n=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 5% auto;\n    width: 50%;\n    font-family: 'Montserrat', sans-serif;\n"]);return W=function(){return n},n}var X=j.a.div(W()),Y=function(n){Object(l.a)(t,n);var e=Object(s.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){U.a.load({google:{families:["Montserrat:wght@100","sans-serif"]}});var n=this.props,e=n.config,t=n.setConfig;return Object(r.jsxs)(X,{children:[Object(r.jsx)(Q,{config:e,setConfig:t}),Object(r.jsx)(F,{config:e})]})}}]),t}(i.Component),Z=Object(d.b)((function(n){return{config:n.config,states:n.states}}),(function(n){return Object(b.a)({setConfig:g},n)}))(Y),nn=t(8),en=Object(nn.a)(),tn=t(55),rn=t(22),an={config:{generation:4,cellSize:40,boardSize:400}};var cn=Object(b.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(rn.a)(Object(rn.a)({},n),{config:e.config});default:return n}})),on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};c.a.render(Object(r.jsx)(d.a,{store:cn,children:Object(r.jsx)(tn.a,{history:en,children:Object(r.jsx)(Z,{})})}),document.getElementById("root")),on()}},[[53,1,2]]]);
//# sourceMappingURL=main.c76d1247.chunk.js.map