import{g as u,r as w,h as x,i as k,j as y,o as n,c as i,a as t,F as _,k as f,n as v,l as m,u as r,m as C,_ as F,b as p,w as B,d as E,t as g,e as I}from"./entry.xzzNj3gb.js";const S={class:"flex gap-2 p-1 flex-wrap justify-center"},A=["onClick","aria-label","aria-pressed"],T=["src"],V={key:0},$=["src"],N=u({__name:"Apps",setup(b){const l=Object.entries({checkers:{name:"Vanilla TS Checkers",href:"https://netanel-haber.github.io/checkers/",background:"linear-gradient(rgba(115, 104, 122, 0.709), rgb(93, 20, 133))",image:"/checkers.webp",height:"775px"},chatgpt:{name:"My ChatGPT Custom Instructions",href:"https://netanel-haber.github.io/chatgpt-custom-instructions/",background:"radial-gradient(circle, rgb(216, 200, 200) 0%, #00a67fae 100%)",image:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",height:"950px"},nyan:{name:"Tiny React Infinite Scroll",href:"https://codesandbox.io/embed/78wnx?view=preview&module=%2Fsrc%2Fuseinfinitescroll.js&hidenavigation=1",background:"linear-gradient(60deg, #ff0084, #ffce00, #29adff, #ff77a8, #ffccaa)",image:"/nyan.gif",height:"500px",class:"nyan"},resume:{name:"Resume",href:"https://www.netanel.dev/resume.pdf",background:"radial-gradient(circle, rgba(67,149,162,0.7570621468926554) 7%, rgba(249,212,72,0.8418079096045198) 45%, rgba(124,166,85,0.9491525423728814) 100%)",image:"/resume.webp",height:"850px"},password:{name:"Chrome Strong Password Generator",href:"https://netanel.dev/pwd",background:"radial-gradient(circle at 20% 4%, #4A90E2 0%, #4A90E2 25%, #DB4437 50%, #DB4437 75%, #F4B400 100%), radial-gradient(circle at 4% 4%, #4A90E2 0%, #4A90E2 25%, #0F9D58 50%, #F4B400 75%, #F4B400 100%)",image:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",height:"300px"},wiki:{name:"Friend Reaches 500 Wiki Edits",href:"/talor-wiki.html",background:"radial-gradient(circle, #d6cab9 20%, #8da7b9 60%, #2d5f73 100%)",image:"/globe.webp",height:"850px"},"mac-apps":{name:"Friend Reaches 500 Wiki Edits",href:"/mac-apps.html",background:"linear-gradient(90deg, rgb(240 238 234) 46%, rgb(141, 167, 185) 54%, rgb(55 144 179) 100%)",image:"/mac-logo.png",height:"375px"}}).map(([e,a])=>({...a,hash:e})),c=w(window==null?void 0:window.location.hash.slice(1)),o=x(()=>l.find(e=>e.hash===c.value)),d=e=>{var a;return((a=o.value)==null?void 0:a.hash)===e.hash},h=e=>{c.value=d(e)?"":e.hash};return k(c,e=>{window.location&&(window.location.hash=e)}),y(()=>{var e;(e=document.getElementById("app"))==null||e.scrollIntoView(),window.addEventListener("hashchange",()=>{var a;(a=document.getElementById("app"))==null||a.scrollIntoView({behavior:"smooth"}),c.value=window.location.hash.slice(1)})}),(e,a)=>(n(),i("div",null,[t("section",S,[(n(!0),i(_,null,f(r(l),s=>(n(),i("button",{key:s.hash,class:v([s.class,"w-[135px] h-[135px] rounded-md focus:shadow-[rgba(0,_0,_0,_0.75)_3px_3px_6px_-1px]"]),onClick:M=>h(s),"aria-label":s.name,style:m({backgroundImage:s.background}),"aria-pressed":d(s)},[t("img",{src:s.image,class:"w-full h-full p-1 rounded-md"},null,8,T)],14,A))),128))]),r(o)?(n(),i("section",V,[(n(),i("iframe",{id:"app",key:r(o).hash,class:"w-full my-4 border",allow:"clipboard-write",style:m({height:r(o).height}),src:r(o).href},null,12,$))])):C("",!0)]))}}),j=F(N,[["__scopeId","data-v-07833b6c"]]),D={class:"mx-auto flex flex-col"},G={class:"mb-3 flex flex-col gap-3"},P={class:"p-1"},R={class:"mb-2"},z={class:"text-sm text-gray-600"},L=t("hr",null,null,-1),W=u({__name:"index",setup(b){const l=[{title:"Ok, Sometimes Async-Await",description:"I'll concede in 3 cases",to:"/ok-sometimes-async-await"},{title:"Concurrency",description:"Yes, Python has threads (*Sigh*)",to:"/concurrency"},{title:"TypeScript, TypeSystems and JavaScript",description:"Notepad -> Notepad++",to:"/typescript-typesystems-and-javascript"}];return(c,o)=>{const d=I,h=j;return n(),i("main",D,[t("section",G,[(n(),i(_,null,f(l,e=>t("article",null,[t("div",P,[t("div",R,[p(d,{class:"text-blue-600 text-lg",to:e.to},{default:B(()=>[E(g(e.title),1)]),_:2},1032,["to"])]),t("div",z,g(e.description),1)]),L])),64))]),p(h)])}}});export{W as default};