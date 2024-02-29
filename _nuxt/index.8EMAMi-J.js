import{g as b,r as w,h as x,i as k,j as y,o as i,c,a as t,F as v,k as C,u as r,n as h,l as B,m as F,_,b as g,w as u,e as E,d as m}from"./entry.9AU3nr1y.js";const I={class:"grid grid-cols-3 gap-1 p-2"},S=["onClick","aria-label","aria-pressed"],A=["src"],T={key:0},V=["src"],$=b({__name:"Apps",setup(p){const l=Object.entries({checkers:{name:"Vanilla TS Checkers",href:"https://netanel-haber.github.io/checkers/",background:"linear-gradient(rgba(115, 104, 122, 0.709), rgb(93, 20, 133))",image:"/checkers.webp",height:"775px"},chatgpt:{name:"My ChatGPT Custom Instructions",href:"https://netanel-haber.github.io/chatgpt-custom-instructions/",background:"radial-gradient(circle, rgb(216, 200, 200) 0%, #00a67fae 100%)",image:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",height:"950px"},nyan:{name:"Tiny React Infinite Scroll",href:"https://codesandbox.io/embed/78wnx?view=preview&module=%2Fsrc%2Fuseinfinitescroll.js&hidenavigation=1",background:"linear-gradient(60deg, #ff0084, #ffce00, #29adff, #ff77a8, #ffccaa)",image:"/nyan.gif",height:"500px",class:"nyan"},resume:{name:"Resume",href:"https://www.netanel.dev/resume.pdf",background:"radial-gradient(circle, rgba(67,149,162,0.7570621468926554) 7%, rgba(249,212,72,0.8418079096045198) 45%, rgba(124,166,85,0.9491525423728814) 100%)",image:"/resume.webp",height:"850px"},password:{name:"Chrome Strong Password Generator",href:"https://netanel.dev/pwd",background:"radial-gradient(circle at 20% 4%, #4A90E2 0%, #4A90E2 25%, #DB4437 50%, #DB4437 75%, #F4B400 100%), radial-gradient(circle at 4% 4%, #4A90E2 0%, #4A90E2 25%, #0F9D58 50%, #F4B400 75%, #F4B400 100%)",image:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",height:"300px"},wiki:{name:"Friend Reaches 500 Wiki Edits",href:"https://www.netanel.dev/talor-wiki",background:"radial-gradient(circle, #d6cab9 20%, #8da7b9 60%, #2d5f73 100%)",image:"/globe.webp",height:"850px"}}).map(([e,a])=>({...a,hash:e})),n=w(window==null?void 0:window.location.hash.slice(1)),o=x(()=>l.find(e=>e.hash===n.value)),d=e=>{var a;return((a=o.value)==null?void 0:a.hash)===e.hash},f=e=>{n.value=d(e)?"":e.hash};return k(n,e=>{window.location&&(window.location.hash=e)}),y(()=>{var e;(e=document.getElementById("app"))==null||e.scrollIntoView(),window.addEventListener("hashchange",()=>{var a;(a=document.getElementById("app"))==null||a.scrollIntoView({behavior:"smooth"}),n.value=window.location.hash.slice(1)})}),(e,a)=>(i(),c("div",null,[t("section",I,[(i(!0),c(v,null,C(r(l),s=>(i(),c("button",{key:s.hash,class:F([s.class,"flex flex-1 flex-col w-full rounded-md p-1 justify-between"]),onClick:q=>f(s),"aria-label":s.name,style:h({backgroundImage:s.background}),"aria-pressed":d(s)},[t("img",{src:s.image,class:"w-full h-auto p-1",style:h({boxShadow:d(s)?"rgba(0, 0, 0, 0.75) 3px 3px 6px -1px":"unset"})},null,12,A)],14,S))),128))]),r(o)?(i(),c("section",T,[(i(),c("iframe",{id:"app",key:r(o).hash,class:"w-full my-4 border",allow:"clipboard-write",style:h({height:r(o).height}),src:r(o).href},null,12,V))])):B("",!0)]))}}),N=_($,[["__scopeId","data-v-4efcb271"]]),j={},G={class:"mx-auto flex flex-col"},P={class:"mb-3 flex flex-col gap-3"},D={class:"p-1"},R={class:"mb-2"},z=t("div",{class:"text-sm text-gray-600"},"Yes, Python has threads (*Sigh*)",-1),L=t("hr",null,null,-1),M={class:"p-1"},J={class:"mb-2"},O=t("div",{class:"text-sm text-gray-600"},"Notepad -> Notepad++",-1),W=t("hr",null,null,-1);function Y(p,l){const n=E,o=N;return i(),c("main",G,[t("section",P,[t("article",null,[t("div",D,[t("div",R,[g(n,{class:"text-blue-600 text-lg",to:"/concurrency"},{default:u(()=>[m(" Concurrency ")]),_:1})]),z]),L]),t("article",null,[t("div",M,[t("div",J,[g(n,{class:"text-blue-600 text-lg",to:"/typescript-typesystems-and-javascript"},{default:u(()=>[m(" TypeScript, TypeSystems and JavaScript ")]),_:1})]),O]),W])]),g(o)])}const K=_(j,[["render",Y]]);export{K as default};
