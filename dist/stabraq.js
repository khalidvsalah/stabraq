/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var C=Object.defineProperty;var Nt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var It=Object.prototype.hasOwnProperty;var jt=(t,e)=>{for(var s in e)C(t,s,{get:e[s],enumerable:!0})},Dt=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ht(e))!It.call(t,r)&&r!==s&&C(t,r,{get:()=>e[r],enumerable:!(i=Nt(e,r))||i.enumerable});return t};var Wt=t=>Dt(C({},"__esModule",{value:!0}),t);var _e={};jt(_e,{bounds:()=>k,choke:()=>V,clamp:()=>m,computed:()=>z,cssSet:()=>v,damp:()=>it,dist:()=>st,ease:()=>a,has:()=>rt,iSet:()=>b,late:()=>x,lerp:()=>d,line:()=>Ct,map:()=>S,props:()=>E,query:()=>u,raf:()=>w,remap:()=>et,round:()=>$,scroll:()=>Yt,scrub:()=>B,sub:()=>p,tween:()=>F,zero:()=>Y});module.exports=Wt(_e);var M=t=>3*t,U=(t,e)=>1-M(e)+M(t),Z=(t,e)=>M(e)-6*t,_=(t,e,s)=>((U(e,s)*t+Z(e,s))*t+M(e))*t;function tt(t,e,s){return M(U(e,s))*Math.pow(t,2)+2*Z(e,s)*t+M(e)}var At=(t,e,s,i,r)=>{let o=0,l=0,n=0;do l=e+(s-e)/2,o=_(l,i,r)-t,o>0?s=l:e=l;while(Math.abs(o)>1e-7&&++n<10);return l},Bt=(t,e,s,i)=>{for(let r=0;r<4;++r){let o=tt(e,s,i);if(o===0)return e;e-=(_(e,s,i)-t)/o}return e},Xt=t=>{let e=t[0],s=t[1],i=t[2],r=t[3];if(e===s&&i===r)return N.l;let o=new Float32Array(11);for(let n=0;n<11;++n)o[n]=_(n*.1,e,i);function l(n){let h=0,c=1;for(;c!==10&&o[c]<=n;++c)h+=.1;--c;let g=(n-o[c])/(o[c+1]-o[c]),y=h+g*.1,f=tt(y,e,i);return f>=.001?Bt(n,y,e,i):f===0?y:At(n,h,h+.1,e,i)}return n=>n===0||n===1?n:_(l(n),s,r)},N={custom:Xt,l:t=>t,i1:t=>1-Math.cos(t*Math.PI/2),o1:t=>Math.sin(t*Math.PI/2),io1:t=>-(Math.cos(Math.PI*t)-1)/2,i2:t=>Math.pow(t,2),o2:t=>1-(1-t)*(1-t),io2:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,i3:t=>Math.pow(t,3),o3:t=>1-Math.pow(1-t,3),io3:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,i4:t=>Math.pow(t,4),o4:t=>1-Math.pow(1-t,4),io4:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,i5:t=>Math.pow(t,5),o5:t=>1-Math.pow(1-t,5),io5:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2,i6:t=>t===0?0:Math.pow(2,10*t-10),o6:t=>t===1?1:1-Math.pow(2,-10*t),io6:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,i7:t=>1-Math.sqrt(1-Math.pow(t,2)),o7:t=>sqrt(1-Math.pow(t-1,2)),io7:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2},a=t=>typeof t=="object"?N.custom(t):N[t];var Y=(t,e)=>Math.max(t,e),m=(t,e,s)=>Math.min(Math.max(t,s),e),d=(t,e,s)=>(1-s)*t+s*e,S=(t,e,s)=>m(0,1,(s-t)/(e-t)),et=(t,e,s,i,r)=>S(t,e,r)*(i-s)+s,$=(t,e)=>{let s=e?Math.pow(10,e):100;return Math.round(t*s)/s},st=(t,e)=>Math.sqrt(t**2+e**2),it=(t,e,s,i=.50399)=>d(t,e,1-Math.exp(-s*i));var rt=(t,e)=>window.hasOwnProperty.call(t,e),k=t=>{let e=t.getBoundingClientRect();return{w:e.width,h:e.height,x:e.x,y:e.y,xE:e.right,yE:e.bottom}},z=t=>window.getComputedStyle(t),v={alpha:(t,e)=>t.style.opacity=e,display:(t,e)=>t.style.display=e,pointer:(t,e)=>t.style.pointerEvents=e,position:(t,e)=>t.style.position=e,visible:(t,e)=>t.style.visibility=e,form:(t,e,s,i)=>t.style.transform=`translate3d(${s+e},${i+e},0)`},u={id:t=>document.getElementById(t),el:t=>document.querySelector(t),els:t=>[...document.querySelectorAll(t)],sEl:(t,e)=>t.querySelector(e),sEls:(t,e)=>[...t.querySelectorAll(e)],node:t=>document.createElement(t),text:t=>document.createTextNode(t)},b={get size(){return{w:window.innerWidth,h:window.innerHeight}},string:t=>JSON.stringify(t)},V=class{constructor({d:e,cb:s}){this.d=e*1e3,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.d)}};var Rt=(t,{opacity:e,easing:s})=>{let i={s:+e,e:t[0],ease:t[1]?a(t[1]):s};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*i.ease(r)}`},Gt=(t,e)=>t.style.opacity=e,ot={cb:Rt,setValue:Gt};var Jt=(t,{filter:e,easing:s})=>{let i;return e==="none"?i={s:0,e:t[0]}:i={s:+e.match(/(\d.*)px/)[1],e:t[0]},i.lerp=i.e-i.s,i.ease=t[1]?a(t[1]):s,r=>i.s+i.lerp*i.ease(r)},Kt=(t,e)=>t.style.filter=`blur(${e}px)`,nt={cb:Jt,setValue:Kt};var H={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Qt=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Ut=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function Zt(t){let e=t.match(Ut);return e?e.map(Number):[]}function lt(t){let e=[];return t.replace(Qt,function(s,i,r){let o=i.toLowerCase();for(r=Zt(r),o==="m"&&r.length>2&&(e.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===H[o])return r.unshift(i),e.push(r);if(r.length<H[o])throw new Error("malformed path data");e.push([i].concat(r.splice(0,H[o])))}}),e}var te=(t,{el:e,easing:s})=>{let i=lt(e.getAttribute("d")),r=lt(t[0]),o=t[1]?a(t[1]):s;return l=>{let n="",h="";for(let c=0;c<i.length;c++){let g=i[c],y=r[c];for(let f=0;f<g.length;f++)n+=(isNaN(g[f])?g[f]:d(g[f],y[f],o(l)))+" ";h=n.trim()}return h}},ee=(t,e)=>t.setAttribute("d",e),ht={cb:te,setValue:ee};var se=(t,{el:e,easing:s})=>{let i=e.getTotalLength(),r={s:t[0]*i,e:t[1]*i,ease:t[2]?a(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},ie=(t,e)=>t.style.strokeDasharray=e,at={cb:se,setValue:ie};var re=(t,{el:e,easing:s})=>{let i=e.getTotalLength();e.style.strokeDasharray=i;let r={s:t[1]*i,e:t[0]*i,ease:t[2]?a(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},oe=(t,e)=>t.style.strokeDashoffset=e,pt={cb:re,setValue:oe};var ct=t=>{let e=[],s=t.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),l=o.length;for(let n=0;n<l;n++){let h=o[n];e.push(isNaN(h)?h:+h)}}return e},ne=(t,{el:e,easing:s})=>{let i=ct(e.getAttribute("points")),r=ct(t[0]),o=t[1]?ease(t[1]):s;return l=>{let n="",h="";for(let c=0;c<i.length;c++)n+=d(i[c],r[c],o(l))+" ",h=n.trim();return h}},le=(t,e)=>t.setAttribute("points",e),ft={cb:ne,setValue:le};var dt=(t,e,s,i)=>{let r={s:t?t[1]=="px"?e:e/parseFloat(s)*100:e,e:t?t[0]:e,unit:t&&t[1]?t[1]:"px"};return r.lerp=r.e-r.s,t?r.ease=t[2]?a(t[2]):i:r.ease=a("l"),o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},ut=(t,e,s)=>{let i={s:e,e:t?t[0]:e};return i.lerp=i.e-i.s,t?i.ease=t[1]?a(t[1]):s:i.ease=a("l"),r=>`${i.s+i.lerp*i.ease(r)}`},mt=(t,e)=>{let s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,t?s.ease=t[1]?a(t[1]):e:s.ease=a("l"),i=>`${s.s+s.lerp*s.ease(i)}deg`},he=t=>{let e=t.match(/^matrix3d\((.+)\)$/),s=t.match(/\((.+)\)$/);return e?(s=e[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},ae=(t,{transform:e,width:s,height:i,easing:r})=>{let o=he(e),l=dt(t.x,o?+o[4]:0,s,r),n=dt(t.y,o?+o[5]:0,i,r),h=ut(t.sx,o?+o[0]:1,r),c=ut(t.sy,o?+o[3]:1,r),g=mt(t.rx,r),y=mt(t.ry,r);return f=>`translate3d(${l(f)}, ${n(f)}, 0) scale(${h(f)}, ${c(f)}) rotateX(${g(f)}) rotateY(${y(f)})`},pe=(t,e)=>t.style.transform=e,gt={cb:ae,setValue:pe};var ce=(t,{parent:e,top:s,easing:i})=>{let r;if(s==="auto")r={s:0,e:t[0],unit:t[1]||"px"};else{let o=parseFloat(s);r={s:t[1]==="px"?o:o/k(e).h*100,e:t[0],unit:t[1]||"px"}}return r.lerp=r.e-r.s,r.ease=t[2]?a(t[2]):i,o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},fe=(t,e)=>t.style.top=e,yt={cb:ce,setValue:fe};var de=(t,{parent:e,width:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientWidth*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?a(t[2]):i};return o.lerp=o.e-o.s,l=>`${o.s+o.lerp*o.ease(l)}${o.unit}`},ue=(t,e)=>t.style.width=e,bt={cb:de,setValue:ue};var me=(t,{parent:e,height:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientHeight*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?a(t[2]):i};return o.lerp=o.e-o.s,l=>`${o.s+o.lerp*o.ease(l)}${o.unit}`},ge=(t,e)=>t.style.height=e,wt={cb:me,setValue:ge};var ye=(t,{clipPath:e,easing:s})=>{let i=e.match(/circle\((.*?) at/),r=e.match(/at (.*?)\)/),o=parseFloat(i[1]),l=r[1].split(" ").map(parseFloat),n={s:[o,l],e:[parseFloat(t[0]),t[1]],ease:t[2]?a(t[2]):s},h=n.e[0]-n.s[0],c=n.e[1][0]-n.s[1][0],g=n.e[1][1]-n.s[1][1];return y=>{let f=n.ease(y);return`circle(${n.s[0]+h*f}% at ${n.s[1][0]+c*f}% ${n.s[1][1]+g*f}%)`}},be=(t,e)=>t.style.clipPath=e,vt={cb:ye,setValue:be};var xt=t=>t.replace(/^polygon\(|\)$/g,"").split(",").map(e=>e.trim().split(" ").map(parseFloat)),we=(t,{clipPath:e,easing:s})=>{let i={s:xt(e),e:xt(t[0]),ease:t[1]?a(t[1]):s};return i.lerp=i.e.map((r,o)=>[r[0]-i.s[o][0],r[1]-i.s[o][1]]),r=>{let o=i.ease(r);return`${i.s.map((l,n)=>`${l[0]+i.lerp[n][0]*o}% ${l[1]+i.lerp[n][1]*o}%`).join(", ")}`}},ve=(t,e)=>t.style.clipPath=`polygon(${e})`,Mt={cb:we,setValue:ve};var xe=[[/^(form)$/,gt],[/^(a)$/,ot],[/^(width)$/,bt],[/^(height)$/,wt],[/^(top)$/,yt],[/^(blur)$/,nt],[/^(draw)$/,pt],[/^(dash)$/,at],[/^(points)$/,ft],[/^(d)$/,ht],[/^(circle)$/,vt],[/^(polygon)$/,Mt]],I=xe;function j(t){let e=I.length;for(let s=0;s<e;s++){let i=I[s];if(t.match(i[0]))return i[1]}}function Me(t,e,s,i){let r=z(t);r.el=t,r.parent=t.parentNode,r.easing=i;for(let o of Object.entries(e)){let l=j(o[0]),n=l.cb(o[1],r);s.push({setV:l.setValue,cb:n})}}function $e(t,e,s,i){for(let r in e){let o={s:t[r],e:e[r][0],ease:e[r][1]?a(e[r][1]):i};o.lerp=o.e-o.s,s.push({setV:(l,n)=>l[r]=n,cb:l=>o.s+o.lerp*o.ease(l)})}}function Ve(t,e,s,i){let r=[];return e?$e(t,s,r,i):Me(t,s,r,i),r}var E=Ve;var D=class{constructor(e){document.addEventListener("visibilitychange",this.change.bind(this)),this.raf=e}change(){let e=performance.now();document.hidden?this.hide=e:this.raf.items.map(s=>s.st+=e-this.hide)}},$t=D;var W=class{constructor(){this.items=[],this.id=-1}push(e){return e.id=++this.id,this.items.push(e),this.on||this.loop(),e.id}update(e){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=e);let r=(e-i.st)/(i.d*1e3),o=m(0,1,r);i.cb(o),o===1&&this.kill(i.id)}else i.cb(e)}this.loop()}kill(e){this.items.map((s,i)=>{s.id===e&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},Vt=new W;new $t(Vt);var w=Vt;var A=class{constructor(){this.observers={}}obs(e){this.observers[e]={items:[],id:0};function s(){let r=this[e],o=Array.prototype.slice.call(arguments);for(let l=0;l<r.items.length;l++)r.items[l].cb(...o)}let i=r=>{this.observers[r].items=[]};return{cb:s.bind(this.observers),name:e,r:i.bind(this,e)}}add(e,s){this.observers[e]||console.error(e);let i=this.observers[e].items,r=this.observers[e].id++,o={cb:s,id:r,on:!0};return i.push(o),{item:o,r:(n=>{for(let h=0;h<i.length;h++)i[h].id==n.id&&(i[h].on=!1,i.splice(h,1))}).bind({},o)}}check(e){return!!this.observers[e]}},p=new A;function B(t){let e=document.createElement("section"),s={start:0,end:0,lerp:.75};e.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,p.add("pointermove",i=>{let r=$(i.pageX/b.size.w);e.style.top=i.pageY+-30+"px",e.style.left=i.pageX+-30*r+"px",e.textContent=r,s.start=m(0,.99999,r)}),p.add("raf",()=>{s.end=d(s.start,s.end,s.lerp),t(s.end)}),document.body.appendChild(e)}var x=class{constructor({d:e,o:s,cb:i}){this.d=e||0,this.o=s,this.cb=i,this.on=!1}play(){this.on=!0,this.d===0?this.Elp():this.id=w.push({cb:this.loop.bind(this),d:this.d})}destroy(){w.kill(this.id),this.on=!1}loop(e){e===1&&this.Elp()}Elp(){this.on=!1,this.o&&w.push(this.o),this.cb&&this.cb()}};function X(t){this.isObj=!1,t instanceof Node?this.target=t:typeof t=="string"?this.target=u.el(t):(this.isObj=!0,this.target=t)}var kt=new Map;function R(t,e){let s=kt.get(t);return s||(kt.set(t,e),e.init(t),e)}var ke=(t,e)=>b.string(t)===b.string(e),zt=ke;var G=class{constructor(e){return R(e,this)}init(e){X.call(this,e),this.call=-1,this.props=[],this.queue=[],this.prog=0,this.elapsed=0}run(e){this.on=!0,this.elapsed=m(0,1,this.prog+e);let s=Math.abs(this.dir-this.elapsed);this.props.map(({setV:i,cb:r})=>i(this.target,r(s))),this.raf&&this.raf(s,this.target),this.elapsed===1&&this.finished()}push(e){this.destroy(),this.dir=e.dir,this.mode=e.mode,this.started&&(this.started(this.target),this.started=null),e.oProps?(this.oProps=e.oProps,this.props=E(this.target,this.isObj,e.oProps,a(e.ease)),this.prog=0):this.prog=1-this.elapsed,this.rafObj={cb:this.run.bind(this),d:e.d},this.id=w.push(this.rafObj)}control(){let e=this.queue[this.call];e.oProps?(zt(this.oProps,e.oProps)&&(e.oProps=void 0),this.late=new x({cb:this.push.bind(this,e),d:e.late}),this.late.play()):this.mode!==e.mode&&(this.late.on&&this.late.destroy(),this.late=new x({cb:this.push.bind(this,e),d:e.late}),this.late.play())}play(e,s){this.call++,this.started=e.started,this.completed=e.completed,this.raf=e.raf,this.queue.push({d:e.d,late:e.late,ease:e.ease,oProps:e.p,mode:s,dir:s==="r"?1:0}),this.control()}destroy(){this.on=!1,w.kill(this.id)}finished(){this.destroy(),this.completed&&(this.completed(this.target),this.completed=null,this.raf=null)}},Et=G;var Pt=(t,e,s)=>{let i={...t};return e!==0&&(i.started=null,i.raf=null),e!==s&&(i.completed=null),i.late=t.late+t.space*e,i},St=(t,e)=>{e.d=typeof t.d=="number"?t.d:e.d||.5,e.late=typeof t.late=="number"?t.late:e.late||0,e.space=typeof t.space=="number"?t.space:e.space||0,e.ease=t.ease?t.ease:e.ease||"l",e.p=t.p};function ze(t,e){let s;Array.isArray(t)&&!e.obj?s=t:s=[t];let i=s.map(l=>new Et(l)),r=i.length-1,o={reverse:(l={})=>{St(l,e);for(let n=0;n<=r;n++){let h=r-n;i[n].play(Pt(e,h,r),"r")}},play:(l={})=>{St(l,e),i.map((n,h)=>n.play(Pt(e,h,r),"p"))}};return o.play(e),o}var F=ze;var P=(t,e)=>{let s=t.match(/(\+|\-)(.*)/);if(s){if(s[1]=="+")return e+ +s[2];if(s[1]=="-")return e-+s[2]}else return+t},J=class{constructor(e,s,i){this.el=e,this.target=s.target,this.o=s,this.from=s.from,this.dir=i,this.dirE=i=="y"?"yE":"xE",this.Init(s)}Init(e){e.target||(this.target=this.el),e.scroll&&(this.ps=e.p?E(this.target,!1,e.p):[]),e.pin&&(this.pin=e.pin,this.pin.target=e.pin.target||this.target),this.iresize=p.add("resize",this.resize.bind(this)),this.resize(),this.iraf=p.add(e.obsname,this.raf.bind(this))}resize(){let e=this.el.length?this.el[0]:this.el,s={y:e.offsetTop,yE:e.offsetTop+e.offsetHeight,x:e.offsetLeft,xE:e.offsetLeft+e.offsetWidth};this.o.scroll?(this.startpint=P(this.o.scroll.start||"+0",s[this.dir]),this.endpoint=P(this.o.scroll.end||"+0",s[this.dirE])):(this.startpint=P(this.o.start||"+0",s[this.dir]),this.endpoint=P(this.o.end||"+0",s[this.dirE])),this.o.pin&&(this.pin.start=P(this.pin.a||"+0",s[this.dir]),this.pin.end=P(this.pin.z||"+0",s[this.dirE]))}raf(e){if(this.coord=e[this.dir],this.o.scroll){let s=S(this.startpint,this.endpoint,this.coord);this.scroll(s),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(s,this.target,this.coord)}else this.startpint<=this.coord&&this.fire()}scroll(e){let s=this.from?1-e:e;this.ps.map(i=>{this.target.length?this.target.forEach(r=>i.setV(r,i.cb(s))):i.setV(this.target,i.cb(s))})}fire(){this.o.tween&&F(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let e=Y(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+e+"px":e+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},qt=J;var Tt=!1;function K(){if(!Tt){history.scrollRestoration="manual",window.onpointerdown=p.obs("pointerdown").cb,window.onpointermove=p.obs("pointermove").cb,window.onpointerup=p.obs("pointerup").cb,window.onkeydown=p.obs("keydown").cb,window.onwheel=p.obs("wheel").cb,Tt=!0;let t=u.node("div");t.setAttribute("data-overlay",""),t.style.cssText=` height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 999; pointer-events: none; `,document.body.appendChild(t)}}var q=class{constructor(e,s){this.options=s,this.attacher=e,this.target=s.target,this.dir=s.dir?s.dir:"y",this.isY=this.dir=="y",this.ePage=this.dir=="y"?"pageY":"pageX",this._init(s),this.chokeEl=u.el("[data-overlay]"),this.choke=new V({d:.3,cb:()=>v.pointer(this.chokeEl,"none")})}_init(e){K(),Object.is(this.attacher,window)?(e.drag!==!1&&(this.ipointerdown=p.add("pointerdown",this._down.bind(this)),this.ipointermove=p.add("pointermove",this._move.bind(this))),e.key!==!1&&(this.ikey=p.add("keydown",this._onkey.bind(this))),e.wheel!==!1&&(this.iwheel=p.add("wheel",this._wheel.bind(this))),this.globalevents=p.obs("globalevents").cb):(e.wheel!==!1&&(this.attacher.onwheel=this._wheel.bind(this)),e.drag!==!1&&(this.attacher.onpointerdown=this._down.bind(this),this.attacher.onpointermove=this._move.bind(this))),this.ipointerup=p.add("pointerup",this._up.bind(this)),this.dist=0,this.scroll={value:0,lerp:0,dir:1},this.speed={value:0,lerp:0}}_wheel(e){this.loop();let s=e.deltaMode==1?.83:.55,i=e.wheelDeltaY*s;this.scroll.value-=i,this.scroll.dir=Math.sign(i),this.globalevents&&this.globalevents(e,i)}_onkey(e){if(e.key==="Tab")e.preventDefault();else if(e.keyCode==40||e.keyCode==38){this.loop();let s=0;e.keyCode==40?s=-66.6:e.keyCode==38&&(s=66.6),this.scroll.value-=s,this.globalevents&&this.globalevents(e,s)}}_down(e){this.mousedown=!0,this.dist=e[this.ePage]}_move(e){if(this.mousedown){this.loop();let s=e[this.ePage]-this.dist;this.scroll.value-=s,this.dist=e[this.ePage],this.scroll.dir=Math.sign(s),this.globalevents&&(v.pointer(this.chokeEl,"all"),this.globalevents(e,s))}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){this.iraf.r(),this.sub.r(),this.iresize.r(),Object.is(this.attacher,window)?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):this.options!==!1&&(this.attacher.onpointerdown=null,this.attacher.onpointermove=null),this.ipointerup.r()}};var L=(t,e,s)=>{s?v.form(t,"px",0,e):v.form(t,"px",e,0)},_t=(t,e,s,i,r,o)=>{t<=s.z&&e>=s.a?(L(i,-o,r),s.out=!1):s.out||(L(i,-o,r),s.out=!0)},Q=class extends q{constructor(e,s){super(e,s),this.ease=s.ease||.09,this.infinite=s.infinite,this.sub=p.obs(s.obs||Symbol("foo")),this.speed={time:performance.now(),offset:0,value:0,ease:s.speed||.3},this.iresize=p.add("resize",this.resize.bind(this)),this.iraf=p.add("raf",this.raf.bind(this)),this.resize()}loop(){this.iraf.item.on||(this.iraf=p.add("raf",this.raf.bind(this)))}add(e,s){s.obsname=this.sub.name;let i=new qt(e,s,this.dir);return this.loop(),i}raf(e){this.kids||(this.scroll.value=m(0,this.dim,this.scroll.value)),this.scroll.lerp=d(this.scroll.lerp,this.scroll.value,this.ease);let s=$(this.scroll.lerp);this.speed.time=e-this.speed.time,this.speed.offset=s-this.speed.offset,this.speed.value=d(this.speed.value,this.speed.offset/this.speed.time,this.speed.ease),this.kids?(s>this.dim?(this.scroll.value=this.scroll.value-this.dim,this.scroll.lerp=s-this.dim):s<0&&(this.scroll.value=this.dim+this.scroll.value,this.scroll.lerp=this.dim+s),this.kids.map(([i,r])=>{let o=s,l=o+this.s;if(s>this.dim-this.s){let n=s-(this.dim-this.s)-this.s,h=n+this.s;n<=r.z&&h>=r.a?L(i,this.s-h,this.isY):_t(o,l,r,i,this.isY,s)}else _t(o,l,r,i,this.isY,s)})):L(this.target,-s,this.isY),this.speed.time=e,this.speed.offset=s,this.sub&&this.sub.cb(this.scroll),s==this.scroll.value&&this.iraf.r()}resize(){if(this.bs=k(this.target),this.infinite){let s=[...this.target.children];this.kids=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let e=this.isY?"h":"w";this.s=b.size[e],this.dim=this.bs[e]-(this.kids?0:this.s),this.loop()}},Yt=Q;var O=" ";function Ee(t,e){document.body.append(t),t.style.visibility="hidden",t.style.position="absolute",t.style.whiteSpace="nowrap",t.style.fontFamily=e.getPropertyValue("font-family"),t.style.fontSize=e.getPropertyValue("font-size"),t.style.fontWeight=e.getPropertyValue("font-weight"),t.style.textTransform=e.getPropertyValue("text-transform"),t.style.letterSpacing=e.getPropertyValue("letter-spacing"),t.style.lineHeight=e.getPropertyValue("line-height")}function Ft(t){let e=t.childNodes,s=[];for(let i=0;i<e.length;i++)s.push(Pe(e[i]));return s}function Pe(t){let e;return t.nodeType===3?e={value:t.nodeValue.split(" "),type:3}:e={value:Ft(t),type:1,node:t},e}function Lt(t){for(let e=0;e<t.length;e++){let s=t[e];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else Lt(s.value)}}function Ot(t,e,s){if(s.words){let i=t.words.length,r;s.ltrs?r=t.words.reduce((o,l,n)=>{let h="";for(let c=0;c<l.length;c++)h+=T(l[c],3);return o+T(h+(n==i-1?"":O),2)},""):r=t.words.reduce((o,l,n)=>o+T(l+(n==i-1?"":O),2),""),e.push({line:T(r,1)})}else e.push({line:T(t.value,1)})}function T(t,e){if(e===1)return`<div class="tfx"><span>${t}</span></div>`;if(e===2)return`<span class="word">${t}</span>`;if(e===3)return`<span class="ltr">${t}</span>`}function Se(t,e,s,i,r,o){for(let l=0;l<t.length;l++){let n=t[l];e.value+=n,s.innerHTML=e.value,e.words.push(n),s.offsetWidth>i&&(e.words.pop(),Ot(e,r,o),e.value=n,e.words=[n+O]),e.value+=O}}function qe(t,e,s,i){let r={value:"",words:[]},o=[];for(let l=0;l<t.length;l++){let n=t[l];n.type===3&&Se(n.value,r,e,s,o,i)}return Ot(r,o,i),o}function Te(t,e){let s=z(t),i=document.createElement("div");e.ltrs&&(e.words=!0),Ee(i,s);let r=t.offsetWidth,o=Ft(t);Lt(o);let l=qe(o,i,r,e);return t.innerHTML="",document.body.removeChild(i),l.map(({line:n})=>t.innerHTML+=n),{lines:u.sEls(t,".tfx"),words:u.sEls(t,".word"),ltrs:u.sEls(t,".ltr")}}var Ct=Te;
