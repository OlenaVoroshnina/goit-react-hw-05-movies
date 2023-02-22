"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[673],{673:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(87),o=r(689),p=r(288),f=r(521),d=r(184),l=function(e){var n=e.movie,r=n.title,t=n.poster_path,a=n.overview,c=n.genres,s=n.vote_average;return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{children:[Boolean(t)&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:r,width:""}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:r}),(0,d.jsxs)("p",{children:["User score: ",s?Math.round(10*s):"","%"]}),(0,d.jsx)("p",{children:(0,d.jsx)("b",{children:"Overview"})}),(0,d.jsx)("p",{children:a}),(0,d.jsx)("p",{children:(0,d.jsx)("b",{children:"Genres"})}),(0,d.jsx)("p",{children:c?c.map((function(e){return e.name})).join(", "):""})]})]})})},h=function(){var e,n=(0,o.UO)().movieId,r=(0,o.TH)(),c=(0,i.useState)(null),h=(0,a.Z)(c,2),v=h[0],x=h[1],j=(0,i.useState)(!1),m=(0,a.Z)(j,2),w=m[0],g=m[1],k=(0,i.useState)(null),_=(0,a.Z)(k,2),b=_[0],Z=_[1];return(0,i.useEffect)((function(){function e(){return e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,p.Pg)(n);case 4:r=e.sent,x(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case 15:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(n)}),[n]),(0,d.jsxs)(d.Fragment,{children:[w&&(0,d.jsx)(f.a,{}),(0,d.jsxs)(u.rU,{to:null===(e=r.state)||void 0===e?void 0:e.from,children:[(0,d.jsx)("div",{children:"Go back"})," "]}),Boolean(v)&&(0,d.jsx)(l,{movie:v}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{to:"cast",state:{from:r},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{to:"review",children:"Review"})})]})]}),b&&(0,d.jsx)("h1",{children:b}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(f.a,{}),children:(0,d.jsx)(o.j3,{})})]})}},288:function(e,n,r){r.d(n,{JN:function(){return i},Pg:function(){return u},Yf:function(){return o},qF:function(){return f},tX:function(){return p}});var t=r(861),a=r(757),c=r.n(a),s=r(912);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=3935c979547c0c6651e8430ea668493f");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"?api_key=3935c979547c0c6651e8430ea668493f"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits?api_key=3935c979547c0c6651e8430ea668493f"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?api_key=3935c979547c0c6651e8430ea668493f"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=3935c979547c0c6651e8430ea668493f&language=en-US&query=".concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=673.842d29ad.chunk.js.map