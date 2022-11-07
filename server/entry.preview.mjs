import Ke,{Headers as Me,Request as We,Response as Fe}from"node-fetch";import{componentQrl as v,inlinedQrl as p,useStylesScopedQrl as W,Slot as F,useSignal as J,useClientEffectQrl as Z,useLexicalScope as x,_IMMUTABLE as k,_wrapSignal as L,useContext as $,jsx as _e,SkipRender as Je,useEnvData as be,useStore as N,useContextProvider as H,useWatchQrl as Ze,noSerialize as we,createContext as z}from"@builder.io/qwik";import{jsxs as b,jsx as r,Fragment as G}from"@builder.io/qwik/jsx-runtime";import{decodeBlurHash as Ge}from"fast-blurhash";import{renderToStream as Xe}from"@builder.io/qwik/server";const et=()=>b("svg",{width:"100",height:"35",viewBox:"0 0 167 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M81.9545 46.5859H75.5513V35.4045C73.4363 36.8579 71.0496 37.5749 68.4884 37.5749C65.0151 37.5749 62.4344 36.6253 60.8239 34.6487C59.2134 32.6915 58.3984 29.2034 58.3984 24.2231C58.3984 19.1266 59.3492 15.5997 61.2702 13.5456C63.23 11.4721 66.3734 10.4644 70.7004 10.4644C74.7946 10.4644 78.5201 11.0264 81.9545 12.131V46.5859ZM75.5513 16.278C74.096 15.8323 72.4661 15.6191 70.7004 15.6191C68.5272 15.6191 66.9749 16.1811 66.1017 17.3244C65.2479 18.4871 64.7823 20.6962 64.7823 23.9712C64.7823 27.0524 65.1897 29.1065 66.0435 30.2304C66.8973 31.335 68.3719 31.897 70.5452 31.897C73.3781 31.897 75.5513 30.7343 75.5513 29.2809V16.278Z",fill:"black"}),r("path",{d:"M91.133 11.1426C93.4033 17.4406 95.3242 23.7386 96.993 30.0948C99.205 23.5836 101.087 17.2856 102.542 11.1426H108.15C110.265 17.4406 112.031 23.7386 113.447 30.0948C115.97 23.196 117.949 16.8787 119.404 11.1426H125.71C123.033 20.173 120.064 28.777 116.785 36.8966H109.256C108.402 32.3039 107.044 26.7617 105.22 20.1536C104.056 25.2889 102.445 30.8893 100.33 36.8966H92.8018C90.2793 27.5174 87.5434 18.9522 84.6328 11.1426H91.133Z",fill:"black"}),r("path",{d:"M132.832 7.55758C129.999 7.55758 129.203 6.85996 129.203 3.97257C129.203 1.39523 130.018 0.794495 132.832 0.794495C135.665 0.794495 136.46 1.39523 136.46 3.97257C136.46 6.85996 135.665 7.55758 132.832 7.55758ZM129.649 11.1426H136.053V36.8966H129.649V11.1426Z",fill:"black"}),r("path",{d:"M166.303 11.1426C161.763 17.5956 158.581 21.5295 156.815 22.9441C158.27 23.8937 162.17 28.8933 167.002 36.916H159.628C153.613 27.7887 150.742 23.8549 149.325 23.2542V36.916H142.922V0H149.325V23.2348C150.78 22.169 153.963 18.1382 158.872 11.1426H166.303Z",fill:"black"}),r("path",{d:"M40.973 52.5351L32.0861 43.6985L31.9503 43.7179V43.621L13.0511 24.9595L17.708 20.4637L14.9721 4.76715L1.99103 20.8513C-0.220992 23.0798 -0.628467 26.7036 0.962635 29.3778L9.07337 42.8265C10.3152 44.9 12.566 46.1402 14.9915 46.1208L19.0081 46.082L40.973 52.5351Z",fill:"#18B6F6"}),r("path",{d:"M45.8232 20.5411L44.038 17.2468L43.1066 15.5609L42.738 14.902L42.6992 14.9408L37.8094 6.47238C36.587 4.34075 34.2974 3.02301 31.8137 3.04239L27.5255 3.15865L14.7384 3.19741C12.313 3.21679 10.101 4.49577 8.87853 6.56927L1.09766 21.9945L15.0101 4.72831L33.2496 24.7656L30.0091 28.0406L31.9495 43.7178L31.9689 43.679V43.7178H31.9301L31.9689 43.7565L33.4824 45.2293L40.8364 52.4187C41.1469 52.7094 41.6514 52.3606 41.4379 51.9924L36.8975 43.0589L44.8142 28.4282L45.0664 28.1375C45.1634 28.0212 45.2604 27.905 45.3381 27.7887C46.8904 25.6764 47.1038 22.8472 45.8232 20.5411Z",fill:"#AC7EF4"}),r("path",{d:"M33.3076 24.6882L15.0099 4.74774L17.61 20.3668L12.9531 24.882L31.9105 43.6985L30.203 28.0794L33.3076 24.6882Z",fill:"white"})]}),tt=`header{background:var(--qwik-purple)}header{display:flex;background:white;border-bottom:10px solid var(--qwik-dark-purple)}header .logo a{display:inline-block;padding:10px 10px 7px 20px}header ul{margin:0;padding:3px 10px 0 0;list-style:none;flex:1;text-align:right}header li{display:inline-block;margin:0;padding:0}header li a{display:inline-block;padding:15px 10px;text-decoration:none}header li a:hover{text-decoration:underline}
`,nt=v(p(()=>(W(p(tt,"s_N39ca0w8E8Y")),b("header",{children:[r("div",{class:"logo",children:r("a",{href:"https://qwik.builder.io/",target:"_blank",children:r(et,{})})}),b("ul",{children:[r("li",{children:r("a",{href:"https://qwik.builder.io/docs/components/overview/",target:"_blank",children:"Docs"})}),r("li",{children:r("a",{href:"https://qwik.builder.io/examples/introduction/hello-world/",target:"_blank",children:"Examples"})}),r("li",{children:r("a",{href:"https://qwik.builder.io/tutorial/welcome/overview/",target:"_blank",children:"Tutorials"})})]})]})),"s_ceU05TscGYE")),st=v(p(()=>b(G,{children:[b("main",{children:[r(nt,{}),r("section",{children:r(F,{})})]}),r("footer",{children:r("a",{href:"https://www.builder.io/",target:"_blank",children:"Made with \u2661 by Builder.io"})})]}),"s_VkLNXphUh5s")),ot=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"})),at=!0,it=!1,rt=(e,t,n,s)=>{if(!e)return;const o=Ge(t,n,s),a=e.getContext("2d"),i=a.createImageData(n,s);i.data.set(o),a.putImageData(i,0,0)},ve=v(p(e=>{const{width:t=64,height:n=64}=e,s=J();return Z(p(({track:o})=>{const[a,i,c,l]=x(),d=o(()=>i.hash);rt(c.value,d,l,a)},"s_QiJjPi2YJQ0",[n,e,s,t])),r("canvas",{style:{width:"100%",aspectRatio:e.ratio||"3/2"},width:t,height:n,ref:s})},"s_gP1QAN9HrUE")),ct=v(p(e=>{W(p(`
    .wrapper { width: 100%; position: relative; overflow: hidden; }
    .wrapper * { width: 100%; }
    .wrapper canvas { position: absolute; top: 0; left: 0; }
    @keyframes append-animate {
      from {
        filter: blur(64px);
      }
      to {
        filter: blur(0);
      }
    }
    /* animate new image */
    .img {
      animation: append-animate .3s linear;
    }
    
  `,"s_LNWfwKJu6Rc"));const t=J(0);return Z(p(()=>{const[n]=x();n.value===0&&(n.value=1)},"s_JnarRIpOv3s",[t])),b("div",{class:"wrapper",style:{aspectRatio:e.ratio||"3/2"},children:[t.value>0&&r("img",{get src(){return e.src},class:t.value===2&&"img",onLoad$:p(()=>{const[n]=x();return n.value=2},"s_bezLmPWiehU",[t]),[k]:{src:L(e,"src")}}),t.value<2&&r(ve,{...e}),e.src&&r("noscript",{dangerouslySetInnerHTML:`<img src="${e.src}" />`})],[k]:{children:!1}})},"s_CeBwVbBfyYc")),lt=v(p(()=>{const e=J("LEHV6nWB2yk8pyo0adR*.7kCMdnj");return b("div",{children:[r("h1",{children:"blurhash"}),r(ve,{get hash(){return e.value},[k]:{hash:L(e,"value")}}),b("p",{children:["Paste your own hash here:"," ",r("input",{get value(){return e.value},onInput$:p(t=>{const[n]=x();return n.value=t.target.value},"s_oECTRAGqk7A",[e]),[k]:{value:L(e,"value")}})]}),r(ct,{hash:"LEHV6nWB2yk8pyo0adR*.7kCMdnj",src:"https://blurha.sh/12c2aca29ea896a628be.jpg",[k]:{hash:!0,src:!0}})]})},"s_xYL1qOwPyDI")),dt={title:"Qwik Blurhash"},ut=Object.freeze(Object.defineProperty({__proto__:null,default:lt,head:dt},Symbol.toStringTag,{value:"Module"})),ht=z("qc-c"),qe=z("qc-ic"),je=z("qc-h"),ke=z("qc-l"),xe=z("qc-n"),pt=v(p(()=>{const{contents:e}=$(qe);if(e&&e.length>0){const t=e.length;let n=null;for(let s=t-1;s>=0;s--)n=_e(e[s].default,{children:n});return n}return Je},"RouterOutlet_component_nd8yk3KO22c")),ee=new WeakMap,ft=async(e,t,n,s)=>{if(Array.isArray(e))for(const o of e){const a=o[0].exec(s);if(a){const i=o[1],c=yt(o[2],a),l=o[4],d=new Array(i.length),u=[],m=mt(t,s);let h;return i.forEach((f,y)=>{te(f,u,j=>d[y]=j,n)}),te(m,u,f=>h=f==null?void 0:f.default,n),u.length>0&&await Promise.all(u),[c,d,h,l]}}return null},te=(e,t,n,s)=>{if(typeof e=="function"){const o=ee.get(e);if(o)n(o);else{const a=e();typeof a.then=="function"?t.push(a.then(i=>{s!==!1&&ee.set(e,i),n(i)})):a&&n(a)}}},mt=(e,t)=>{if(e){const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},yt=(e,t)=>{const n={};if(e)for(let s=0;s<e.length;s++)n[e[s]]=t?t[s+1]:"";return n},gt=(e,t,n)=>{const s=Ce(),o={data:e?e.body:null,head:s,...t};for(let a=n.length-1;a>=0;a--){const i=n[a]&&n[a].head;i&&(typeof i=="function"?ne(s,i(o)):typeof i=="object"&&ne(s,i))}return o.head},ne=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),Q(e.meta,t.meta),Q(e.links,t.links),Q(e.styles,t.styles),Object.assign(e.frontmatter,t.frontmatter)},Q=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(o=>o.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},Ce=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),_t=()=>$(je),X=()=>$(ke),bt=()=>$(xe),wt=()=>we(be("qwikcity")),Y=e=>e.pathname+e.search+e.hash,I=(e,t)=>new URL(e,t.href),Le=(e,t)=>e.origin===t.origin,Ne=(e,t)=>e.pathname+e.search===t.pathname+t.search,vt=(e,t)=>e.pathname===t.pathname,se=(e,t)=>Le(e,t)&&!Ne(e,t),qt=e=>e+(e.endsWith("/")?"":"/")+"q-data.json",jt=(e,t)=>{const n=e.href;if(typeof n=="string"&&n.trim()!==""&&typeof e.target!="string")try{const s=I(n,t),o=I("",t);if(Le(s,o))return Y(s)}catch(s){console.error(s)}return null},kt=(e,t,n)=>{if(e.prefetch&&t){const s=I(t,n);if(!vt(s,I("",n)))return s+""}return null},xt=(e,t)=>{const n=e.location,s=I(t.path,n);se(n,s)&&(oe(e,n,s),e.history.pushState("","",Y(s))),e[re]||(e[re]=1,e.addEventListener("popstate",()=>{const o=e.location,a=I(t.path,o);se(o,a)&&(oe(e,a,o),t.path=Y(o))}))},oe=async(e,t,n)=>{const s=e.document,o=n.hash;if(Ne(t,n))t.hash!==o&&(await K(),o?ae(s,o):e.scrollTo(0,0));else if(o)for(let a=0;a<24&&(await K(),!ae(s,o));a++);else await K(),e.scrollTo(0,0)},K=()=>new Promise(e=>setTimeout(e,12)),ae=(e,t)=>{const n=t.slice(1),s=e.getElementById(n);return s&&s.scrollIntoView(),s},ie=e=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:e}))},re=Symbol(),Ie=async e=>{const t=new URL(e).pathname,n=qt(t);ie({links:[t]});const s=await fetch(n),o=s.headers.get("content-type")||"";if(s.ok&&o.includes("json")){const a=await s.json();return ie({bundles:a.prefetch,links:[t]}),a}},Ct=v(p(()=>{const e=wt();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const t=be("url");if(!t)throw new Error("Missing Qwik URL Env Data");const n=new URL(t),s=N({href:n.href,pathname:n.pathname,query:Object.fromEntries(n.searchParams.entries()),params:e.params}),o=N({path:Y(n)}),a=N(Ce),i=N({headings:void 0,menu:void 0}),c=N({contents:void 0});return H(ht,i),H(qe,c),H(je,a),H(ke,s),H(xe,o),Ze(p(async({track:l})=>{const[d,u,m,h,f,y]=x(),{routes:j,menus:R,cacheModules:V}=await Promise.resolve().then(()=>St),T=l(y,"path"),_=new URL(T,f.href),g=_.pathname,U=ft(j,R,V,g),D=at?h.response:Ie(_.href),q=await U;if(q){const[C,Ve,Ue]=q,B=Ve,De=B[B.length-1];f.href=_.href,f.pathname=g,f.params={...C},f.query=Object.fromEntries(_.searchParams.entries()),d.headings=De.headings,d.menu=Ue,u.contents=we(B);const Qe=await D,E=gt(Qe,f,B);m.links=E.links,m.meta=E.meta,m.styles=E.styles,m.title=E.title,m.frontmatter=E.frontmatter,it&&xt(window,y)}},"QwikCity_component_useWatch_AaAlzKH0KlQ",[i,c,a,e,s,o])),r(F,{})},"QwikCity_component_z1nvHyEppoI"));p(e=>{const t=bt(),n=X(),s=e.href,o={...e},a=jt(o,n),i=kt(e,a,n);return o["preventdefault:click"]=!!a,o.href=a||s,r("a",{...o,onClick$:p(()=>{const[c,l,d]=x();c&&(d.path=l.href)},"Link_component_a_onClick_hA9UPaY8sNQ",[a,o,t]),"data-prefetch":i,onMouseOver$:p((c,l)=>ce(l),"Link_component_a_onMouseOver_skxgNVWVOT8"),onQVisible$:p((c,l)=>ce(l,!0),"Link_component_a_onQVisible_uVE5iM9H73c"),children:r(F,{})})},"Link_component_mYsiJcA4IBc");const ce=(e,t)=>{var s;const n=(s=e==null?void 0:e.dataset)==null?void 0:s.prefetch;n&&(M||(M=window.innerWidth),(!t||t&&M<520)&&Ie(n))};let M=0;const Lt='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',Nt=()=>_e("script",{dangerouslySetInnerHTML:Lt}),It=`.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 135deg;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}input{width:100%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,Et=v(p(()=>{W(p(It,"s_p4UiTwsJc7c"));const e=X(),t=N({count:0,number:20});return Z(p(({cleanup:n})=>{const[s]=x(),o=setTimeout(()=>s.count=1,500);n(()=>clearTimeout(o));const a=setInterval(()=>s.count++,7e3);n(()=>clearInterval(a))},"s_V0Y6u0VD1eY",[t])),b(G,{children:[r("input",{type:"range",get value(){return t.number},max:50,onInput$:p(n=>{const[s]=x();s.number=n.target.valueAsNumber},"s_dznIGAlrcag",[t]),[k]:{value:L(t,"number")}}),r("div",{style:{"--state":`${t.count*.1}`},class:{host:!0,pride:e.query.pride==="true"},children:Array.from({length:t.number},(n,s)=>r("div",{class:{square:!0,odd:s%2===0},style:{"--index":`${s+1}`}},s)).reverse()})]})},"s_OW4nu0I1yZ8")),Ht={title:"Qwik Flower"},Pt=Object.freeze(Object.defineProperty({__proto__:null,default:Et,head:Ht},Symbol.toStringTag,{value:"Module"})),le=()=>ot,Ee=[[/^\/$/,[le,()=>ut],void 0,"/",["q-f8f578ea.js","q-c60e3ed5.js"]],[/^\/flower\/?$/,[le,()=>Pt],void 0,"/flower",["q-f8f578ea.js","q-c0ae5350.js"]]],He=[],Pe=!1,Se="/",Ae=!0,ze={routes:Ee,menus:He,trailingSlash:Pe,basePathname:Se,cacheModules:Ae},St=Object.freeze(Object.defineProperty({__proto__:null,routes:Ee,menus:He,trailingSlash:Pe,basePathname:Se,cacheModules:Ae,default:ze},Symbol.toStringTag,{value:"Module"}));var w=Symbol("headers"),de,At=class{constructor(){this[de]={}}[(de=w,Symbol.iterator)](){return this.entries()}*keys(){for(const e of Object.keys(this[w]))yield e}*values(){for(const e of Object.values(this[w]))yield e}*entries(){for(const e of Object.keys(this[w]))yield[e,this.get(e)]}get(e){return this[w][P(e)]||null}set(e,t){const n=P(e);this[w][n]=typeof t!="string"?String(t):t}append(e,t){const n=P(e),s=this.has(n)?`${this.get(n)}, ${t}`:t;this.set(e,s)}delete(e){if(!this.has(e))return;const t=P(e);delete this[w][t]}all(){return this[w]}has(e){return this[w].hasOwnProperty(P(e))}forEach(e,t){for(const n in this[w])this[w].hasOwnProperty(n)&&e.call(t,this[w][n],n,this)}},zt=/[^a-z0-9\-#$%&'*+.^_`|~]/i;function P(e){if(typeof e!="string"&&(e=String(e)),zt.test(e)||e.trim()==="")throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function O(){return new(typeof Headers=="function"?Headers:At)}var A=class extends Error{constructor(e,t){super(t),this.status=e}};function Ot(e){return Re(e,new A(404,"Not Found"))}function Oe(e,t){const s=Te(500,t),o=O();return o.set("Content-Type","text/html; charset=utf-8"),e.response(500,o,async a=>{a.write(s)},t)}function Re(e,t){const n=Be(t.status,t.message,t.stack),s=O();return s.set("Content-Type","text/html; charset=utf-8"),e.response(t.status,s,async o=>{o.write(n)},t)}function Te(e,t){let n="Server Error",s;return t!=null&&(typeof t=="object"?(typeof t.message=="string"&&(n=t.message),t.stack!=null&&(s=String(t.stack))):n=String(t)),Be(e,n,s)}function Be(e,t,n){const s=typeof t=="string"?"600px":"300px",o=e>=500?Tt:Rt;return e<500&&(n=""),`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}"/>
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${o}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${o}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${o}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p>
    <strong>${e}</strong>
    <span>${t}</span>
  </p>
  ${n?`<pre><code>${n}</code></pre>`:""}
</body>
</html>
`}var Rt="#006ce9",Tt="#713fc2",ue=new WeakMap,Bt=async(e,t,n,s)=>{if(Array.isArray(e))for(const o of e){const a=o[0].exec(s);if(a){const i=o[1],c=$t(o[2],a),l=o[4],d=new Array(i.length),u=[],m=Yt(t,s);let h;return i.forEach((f,y)=>{he(f,u,j=>d[y]=j,n)}),he(m,u,f=>h=f==null?void 0:f.default,n),u.length>0&&await Promise.all(u),[c,d,h,l]}}return null},he=(e,t,n,s)=>{if(typeof e=="function"){const o=ue.get(e);if(o)n(o);else{const a=e();typeof a.then=="function"?t.push(a.then(i=>{s!==!1&&ue.set(e,i),n(i)})):a&&n(a)}}},Yt=(e,t)=>{if(e){const n=e.find(s=>s[0]===t||t.startsWith(s[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},$t=(e,t)=>{const n={};if(e)for(let s=0;s<e.length;s++)n[e[s]]=t?t[s+1]:"";return n},S=class{constructor(e,t,n){this.url=e,this.location=e,this.status=Ye(t)?t:302,this.headers=n||O(),this.headers.set("Location",this.location),this.headers.delete("Cache-Control")}};function Vt(e,t){return e.response(t.status,t.headers,async()=>{})}function Ye(e){return typeof e=="number"&&e>=301&&e<=308}async function Ut(e,t,n,s,o="/"){if(n.length===0)throw new A(404,"Not Found");const{request:a,url:i,platform:c}=e,{pathname:l}=i,d=Dt(n),u=d&&a.headers.get("Accept")==="application/json",m=u?"pagedata":d?"pagehtml":"endpoint",h={type:m,url:i,params:t,status:200,headers:O(),resolvedBody:void 0,pendingBody:void 0,aborted:!1};let f=!1;if(d&&l!==o){if(s){if(!l.endsWith("/"))throw new S(l+"/"+i.search,302)}else if(l.endsWith("/"))throw new S(l.slice(0,l.length-1)+i.search,302)}let y=-1;const j=()=>{y=fe},R=(_,g)=>new S(_,g,h.headers),V=(_,g)=>new A(_,g),T=async()=>{for(y++;y<n.length;){const _=n[y];let g;switch(a.method){case"GET":{g=_.onGet;break}case"POST":{g=_.onPost;break}case"PUT":{g=_.onPut;break}case"PATCH":{g=_.onPatch;break}case"OPTIONS":{g=_.onOptions;break}case"HEAD":{g=_.onHead;break}case"DELETE":{g=_.onDelete;break}}if(g=g||_.onRequest,typeof g=="function"){f=!0;const U={get status(){return h.status},set status(C){h.status=C},get headers(){return h.headers},redirect:R,error:V},D={request:a,url:new URL(i),params:{...t},response:U,platform:c,next:T,abort:j},q=g(D);if(typeof q=="function")h.pendingBody=pe(q);else if(q!==null&&typeof q=="object"&&typeof q.then=="function"){const C=await q;typeof C=="function"?h.pendingBody=pe(C):h.resolvedBody=C}else h.resolvedBody=q}y++}};if(await T(),h.aborted=y>=fe,!u&&Ye(h.status)&&h.headers.has("Location"))throw new S(h.headers.get("Location"),h.status,h.headers);if(m==="endpoint"&&!f)throw new A(405,"Method Not Allowed");return h}function pe(e){return new Promise((t,n)=>{try{const s=e();s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(t,n):t(s)}catch(s){n(s)}})}function Dt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function Qt(e,t){let n=e.url.pathname;if(n.endsWith($e)){e.request.headers.set("Accept","application/json");const s=n.length-Kt+(t?1:0);n=n.slice(0,s),n===""&&(n="/"),e.url.pathname=n}}var $e="/q-data.json",Kt=$e.length,fe=999999999;function Mt(e,t){const{pendingBody:n,resolvedBody:s,status:o,headers:a}=t,{response:i}=e;if(n===void 0&&s===void 0)return i(o,a,Wt);a.has("Content-Type")||a.set("Content-Type","application/json; charset=utf-8");const c=a.get("Content-Type").includes("json");return i(o,a,async({write:l})=>{const d=n!==void 0?await n:s;if(d!==void 0)if(c)l(JSON.stringify(d));else{const u=typeof d;l(u==="string"?d:u==="number"||u==="boolean"?String(d):d)}})}var Wt=async()=>{};function Ft(e,t,n,s,o){const{status:a,headers:i}=t,{response:c}=e,l=t.type==="pagedata";return l?i.set("Content-Type","application/json; charset=utf-8"):i.has("Content-Type")||i.set("Content-Type","text/html; charset=utf-8"),c(l?200:a,i,async d=>{try{const u=await n({stream:l?Gt:d,envData:Zt(t),...s});l?d.write(JSON.stringify(await me(t,u,o))):(typeof u).html==="string"&&d.write(u.html),typeof d.clientData=="function"&&d.clientData(await me(t,u,o))}catch(u){const m=Te(500,u);d.write(m)}})}async function me(e,t,n){var s;const o=Jt(t,n),a=!((s=t.snapshotResult)!=null&&s.resources.some(c=>c._cache!==1/0));return{body:e.pendingBody?await e.pendingBody:e.resolvedBody,status:e.status!==200?e.status:void 0,redirect:e.status>=301&&e.status<=308&&e.headers.get("location")||void 0,isStatic:a,prefetch:o.length>0?o:void 0}}function Jt(e,t){const n=[],s=c=>{c&&!n.includes(c)&&n.push(c)},o=c=>{if(Array.isArray(c))for(const l of c){const d=l.url.split("/").pop();d&&!n.includes(d)&&(s(d),o(l.imports))}};o(e.prefetchResources);const a=e.manifest||e._manifest,i=e._symbols;if(a&&i)for(const c of i){const l=a.symbols[c];l&&l.ctxName==="component$"&&s(a.mapping[c])}if(t)for(const c of t)s(c);return n}function Zt(e){const{url:t,params:n,pendingBody:s,resolvedBody:o,status:a}=e;return{url:t.href,qwikcity:{params:{...n},response:{body:s||o,status:a}}}}var Gt={write:()=>{}};async function Xt(e,t){try{const{render:n,qwikCityPlan:s}=t,{routes:o,menus:a,cacheModules:i,trailingSlash:c,basePathname:l}=s;Qt(e,c);const d=await Bt(o,a,i,e.url.pathname);if(d){const[u,m,h,f]=d,y=await Ut(e,u,m,c,l);return y.aborted?null:y.type==="endpoint"?await Mt(e,y):await Ft(e,y,n,t,f)}}catch(n){return n instanceof S?Vt(e,n):n instanceof A?Re(e,n):Oe(e,n)}return null}function ye(e){const t=e.socket.encrypted||e.connection.encrypted?"https":"http";return new URL(e.url||"/",`${t}://${e.headers.host}`)}function ge(e,t,n){const s=O(),o=t.headers;for(const c in o){const l=o[c];if(typeof l=="string")s.set(c,l);else if(Array.isArray(l))for(const d of l)s.append(c,d)}const a=async()=>{const c=[];for await(const l of t)c.push(l);return Buffer.concat(c).toString()};return{request:{headers:s,formData:async()=>new URLSearchParams(await a()),json:async()=>JSON.parse(await a()),method:t.method||"GET",text:a,url:e.href},response:async(c,l,d)=>(n.statusCode=c,l.forEach((u,m)=>n.setHeader(m,u)),d({write:u=>{n.write,n.write(u)}}).finally(()=>{n.end()}),n),url:e,platform:{ssr:!0,node:process.versions.node}}}function en(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch||(globalThis.fetch=Ke,globalThis.Headers=Me,globalThis.Request=We,globalThis.Response=Fe))}function tn(e){return en(),{router:async(s,o,a)=>{try{const i=ge(ye(s),s,o);try{await Xt(i,e)||a()}catch(c){await Oe(i,c)}}catch(i){console.error(i),a(i)}},notFound:async(s,o,a)=>{try{const i=ge(ye(s),s,o);await Ot(i)}catch(i){console.error(i),a(i)}}}}function nn(e,t){return tn({render:e,qwikCityPlan:ze,...t})}const sn={symbols:{s_hA9UPaY8sNQ:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onClick",canonicalFilename:"s_ha9upay8snq",hash:"hA9UPaY8sNQ",ctxKind:"event",ctxName:"onClick$",captures:!0,parent:"s_mYsiJcA4IBc"},s_skxgNVWVOT8:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onMouseOver",canonicalFilename:"s_skxgnvwvot8",hash:"skxgNVWVOT8",ctxKind:"event",ctxName:"onMouseOver$",captures:!1,parent:"s_mYsiJcA4IBc"},s_dznIGAlrcag:{origin:"routes/flower/index.tsx",displayName:"flower_component__Fragment_input_onInput",canonicalFilename:"s_dznigalrcag",hash:"dznIGAlrcag",ctxKind:"event",ctxName:"onInput$",captures:!0,parent:"s_OW4nu0I1yZ8"},s_oECTRAGqk7A:{origin:"routes/index.tsx",displayName:"routes_component_div_p_input_onInput",canonicalFilename:"s_oectragqk7a",hash:"oECTRAGqk7A",ctxKind:"event",ctxName:"onInput$",captures:!0,parent:"s_xYL1qOwPyDI"},s_bezLmPWiehU:{origin:"components/blurhash.tsx",displayName:"BlurHashImg_component_div_img_onLoad",canonicalFilename:"s_bezlmpwiehu",hash:"bezLmPWiehU",ctxKind:"event",ctxName:"onLoad$",captures:!0,parent:"s_CeBwVbBfyYc"},s_uVE5iM9H73c:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onQVisible",canonicalFilename:"s_uve5im9h73c",hash:"uVE5iM9H73c",ctxKind:"event",ctxName:"onQVisible$",captures:!1,parent:"s_mYsiJcA4IBc"},s_AaAlzKH0KlQ:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCity_component_useWatch",canonicalFilename:"s_aaalzkh0klq",hash:"AaAlzKH0KlQ",ctxKind:"function",ctxName:"useWatch$",captures:!0,parent:"s_z1nvHyEppoI"},s_JnarRIpOv3s:{origin:"components/blurhash.tsx",displayName:"BlurHashImg_component_useClientEffect",canonicalFilename:"s_jnarripov3s",hash:"JnarRIpOv3s",ctxKind:"function",ctxName:"useClientEffect$",captures:!0,parent:"s_CeBwVbBfyYc"},s_QiJjPi2YJQ0:{origin:"components/blurhash.tsx",displayName:"BlurHash_component_useClientEffect",canonicalFilename:"s_qijjpi2yjq0",hash:"QiJjPi2YJQ0",ctxKind:"function",ctxName:"useClientEffect$",captures:!0,parent:"s_gP1QAN9HrUE"},s_V0Y6u0VD1eY:{origin:"routes/flower/index.tsx",displayName:"flower_component_useClientEffect",canonicalFilename:"s_v0y6u0vd1ey",hash:"V0Y6u0VD1eY",ctxKind:"function",ctxName:"useClientEffect$",captures:!0,parent:"s_OW4nu0I1yZ8"},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1},s_CeBwVbBfyYc:{origin:"components/blurhash.tsx",displayName:"BlurHashImg_component",canonicalFilename:"s_cebwvbbfyyc",hash:"CeBwVbBfyYc",ctxKind:"function",ctxName:"component$",captures:!1},s_OW4nu0I1yZ8:{origin:"routes/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_ow4nu0i1yz8",hash:"OW4nu0I1yZ8",ctxKind:"function",ctxName:"component$",captures:!1},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1},s_ceU05TscGYE:{origin:"components/header/header.tsx",displayName:"header_component",canonicalFilename:"s_ceu05tscgye",hash:"ceU05TscGYE",ctxKind:"function",ctxName:"component$",captures:!1},s_gP1QAN9HrUE:{origin:"components/blurhash.tsx",displayName:"BlurHash_component",canonicalFilename:"s_gp1qan9hrue",hash:"gP1QAN9HrUE",ctxKind:"function",ctxName:"component$",captures:!1},s_mYsiJcA4IBc:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_mysijca4ibc",hash:"mYsiJcA4IBc",ctxKind:"function",ctxName:"component$",captures:!1},s_nd8yk3KO22c:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_nd8yk3ko22c",hash:"nd8yk3KO22c",ctxKind:"function",ctxName:"component$",captures:!1},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1},s_z1nvHyEppoI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCity_component",canonicalFilename:"s_z1nvhyeppoi",hash:"z1nvHyEppoI",ctxKind:"function",ctxName:"component$",captures:!1},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1},s_LNWfwKJu6Rc:{origin:"components/blurhash.tsx",displayName:"BlurHashImg_component_useStylesScoped",canonicalFilename:"s_lnwfwkju6rc",hash:"LNWfwKJu6Rc",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_CeBwVbBfyYc"},s_N39ca0w8E8Y:{origin:"components/header/header.tsx",displayName:"header_component_useStylesScoped",canonicalFilename:"s_n39ca0w8e8y",hash:"N39ca0w8E8Y",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_ceU05TscGYE"},s_p4UiTwsJc7c:{origin:"routes/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_p4uitwsjc7c",hash:"p4UiTwsJc7c",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_OW4nu0I1yZ8"}},mapping:{s_hA9UPaY8sNQ:"q-ea2bff1f.js",s_skxgNVWVOT8:"q-ea2bff1f.js",s_dznIGAlrcag:"q-762729ab.js",s_oECTRAGqk7A:"q-28b5cdae.js",s_bezLmPWiehU:"q-e14c189e.js",s_uVE5iM9H73c:"q-ea2bff1f.js",s_AaAlzKH0KlQ:"q-2bbe7585.js",s_JnarRIpOv3s:"q-e14c189e.js",s_QiJjPi2YJQ0:"q-594b146f.js",s_V0Y6u0VD1eY:"q-762729ab.js",s_3sccYCDd1Z0:"q-b7a3cf43.js",s_CeBwVbBfyYc:"q-e14c189e.js",s_OW4nu0I1yZ8:"q-762729ab.js",s_VkLNXphUh5s:"q-c9943ab1.js",s_ceU05TscGYE:"q-8572ed64.js",s_gP1QAN9HrUE:"q-594b146f.js",s_mYsiJcA4IBc:"q-ea2bff1f.js",s_nd8yk3KO22c:"q-dcabc819.js",s_xYL1qOwPyDI:"q-28b5cdae.js",s_z1nvHyEppoI:"q-2bbe7585.js",s_zrbrqoaqXSY:"q-261f0ac2.js",s_LNWfwKJu6Rc:"q-e14c189e.js",s_N39ca0w8E8Y:"q-8572ed64.js",s_p4UiTwsJc7c:"q-762729ab.js"},bundles:{"q-1d4e3858.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-261f0ac2.js":{size:1093,imports:["q-2846e790.js","q-b7a3cf43.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-2846e790.js":{size:64114,dynamicImports:["q-b7a3cf43.js"],origins:["\0vite/preload-helper","node_modules/@builder.io/qwik/core.mjs","src/global.css","src/root.tsx"]},"q-28b5cdae.js":{size:2080,imports:["q-2846e790.js"],dynamicImports:["q-594b146f.js","q-e14c189e.js"],origins:["node_modules/fast-blurhash/index.js","src/components/blurhash.tsx","src/entry_routes.js","src/s_oectragqk7a.js","src/s_xyl1qowpydi.js"],symbols:["s_oECTRAGqk7A","s_xYL1qOwPyDI"]},"q-2bbe7585.js":{size:1451,imports:["q-2846e790.js","q-b7a3cf43.js"],dynamicImports:["q-ae216b22.js"],origins:["@builder.io/qwik/build","src/entry_QwikCity.js","src/s_aaalzkh0klq.js","src/s_z1nvhyeppoi.js"],symbols:["s_AaAlzKH0KlQ","s_z1nvHyEppoI"]},"q-594b146f.js":{size:641,imports:["q-2846e790.js","q-28b5cdae.js"],origins:["src/entry_BlurHash.js","src/s_gp1qan9hrue.js","src/s_qijjpi2yjq0.js"],symbols:["s_gP1QAN9HrUE","s_QiJjPi2YJQ0"]},"q-762729ab.js":{size:2506,imports:["q-2846e790.js","q-b7a3cf43.js"],origins:["src/entry_flower.js","src/routes/flower/flower.css?used&inline","src/s_dznigalrcag.js","src/s_ow4nu0i1yz8.js","src/s_p4uitwsjc7c.js","src/s_v0y6u0vd1ey.js"],symbols:["s_dznIGAlrcag","s_OW4nu0I1yZ8","s_p4UiTwsJc7c","s_V0Y6u0VD1eY"]},"q-8572ed64.js":{size:4135,imports:["q-2846e790.js"],origins:["src/components/header/header.css?used&inline","src/components/icons/qwik.tsx","src/entry_header.js","src/s_ceu05tscgye.js","src/s_n39ca0w8e8y.js"],symbols:["s_ceU05TscGYE","s_N39ca0w8E8Y"]},"q-ae216b22.js":{size:504,imports:["q-2846e790.js"],dynamicImports:["q-c0ae5350.js","q-c60e3ed5.js","q-c93bc33b.js","q-f8f578ea.js"],origins:["@qwik-city-plan"]},"q-b7a3cf43.js":{size:4215,imports:["q-2846e790.js"],dynamicImports:["q-261f0ac2.js","q-2bbe7585.js","q-dcabc819.js","q-ea2bff1f.js"],origins:["node_modules/@builder.io/qwik-city/index.qwik.mjs","src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-c0ae5350.js":{size:192,imports:["q-2846e790.js"],dynamicImports:["q-762729ab.js"],origins:["src/routes/flower/index.tsx"]},"q-c60e3ed5.js":{size:207,imports:["q-2846e790.js"],dynamicImports:["q-28b5cdae.js"],origins:["src/routes/index.tsx"]},"q-c93bc33b.js":{size:128,imports:["q-2846e790.js"],dynamicImports:["q-1d4e3858.js"],origins:["@qwik-city-entries"]},"q-c9943ab1.js":{size:393,imports:["q-2846e790.js"],dynamicImports:["q-8572ed64.js"],origins:["src/components/header/header.tsx","src/entry_layout.js","src/s_vklnxphuh5s.js"],symbols:["s_VkLNXphUh5s"]},"q-dcabc819.js":{size:269,imports:["q-2846e790.js","q-b7a3cf43.js"],origins:["src/entry_RouterOutlet.js","src/s_nd8yk3ko22c.js"],symbols:["s_nd8yk3KO22c"]},"q-e14c189e.js":{size:1466,imports:["q-2846e790.js","q-28b5cdae.js","q-2bbe7585.js","q-b7a3cf43.js"],origins:["src/entry_BlurHashImg.js","src/s_bezlmpwiehu.js","src/s_cebwvbbfyyc.js","src/s_jnarripov3s.js","src/s_lnwfwkju6rc.js"],symbols:["s_bezLmPWiehU","s_CeBwVbBfyYc","s_JnarRIpOv3s","s_LNWfwKJu6Rc"]},"q-ea2bff1f.js":{size:891,imports:["q-2846e790.js","q-b7a3cf43.js"],origins:["src/entry_Link.js","src/s_ha9upay8snq.js","src/s_mysijca4ibc.js","src/s_skxgnvwvot8.js","src/s_uve5im9h73c.js"],symbols:["s_hA9UPaY8sNQ","s_mYsiJcA4IBc","s_skxgNVWVOT8","s_uVE5iM9H73c"]},"q-f3c99c7c.js":{size:58,imports:["q-2846e790.js"]},"q-f8f578ea.js":{size:153,imports:["q-2846e790.js"],dynamicImports:["q-c9943ab1.js"],origins:["src/routes/layout.tsx"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-0ea8883c.css"}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"0.12.1",vite:"",rollup:"2.79.1",env:"node",os:"linux",node:"16.14.2"}},on=v(p(()=>{const e=_t(),t=X();return b(G,{children:[r("title",{children:L(e,"title")}),r("link",{rel:"canonical",get href(){return t.href},[k]:{href:L(t,"href")}}),r("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),r("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),r("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),r("link",{media:"print",onload:"this.onload=null;this.removeAttribute('media');",href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap",rel:"stylesheet"}),r("meta",{property:"og:site_name",content:"Qwik"}),r("meta",{name:"twitter:site",content:"@QwikDev"}),r("meta",{name:"twitter:title",content:"Qwik"}),e.meta.map(n=>r("meta",{...n})),e.links.map(n=>r("link",{...n})),e.styles.map(n=>r("style",{...n.props,get dangerouslySetInnerHTML(){return n.style},[k]:{dangerouslySetInnerHTML:L(n,"style")}}))]})},"s_zrbrqoaqXSY"));const an=v(p(()=>b(Ct,{children:[b("head",{children:[r("meta",{charSet:"utf-8"}),r(on,{})]}),b("body",{lang:"en",children:[r(pt,{}),r(Nt,{})]})]}),"s_3sccYCDd1Z0"));function rn(e){return Xe(r(an,{}),{manifest:sn,...e,prefetchStrategy:{implementation:{linkInsert:null,workerFetchInsert:null,prefetchEvent:"always"}}})}const pn=nn(rn);export{pn as default};