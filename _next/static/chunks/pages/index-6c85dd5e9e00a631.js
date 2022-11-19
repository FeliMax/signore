(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4256)}])},4256:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return B}});var a=s(5893),i=s(9008),l=s.n(i),r=s(7294),o=s(7814);let n=e=>{let{tooltipName:t}=e;return(0,a.jsx)("div",{className:"pointer-events-none absolute left-1/2 top-[calc(100%+.5rem)] z-20 hidden w-28 -translate-x-1/2 rounded-lg bg-gray-700 p-2 text-center text-xs text-white opacity-0 duration-300 group-hover:opacity-100 xl:block",children:t})},c=e=>{let{iconName:t,className:s,url:i,tooltip:l}=e;return(0,a.jsxs)("a",{className:"group relative "+(void 0===i?"pointer-events-none":""),href:i,target:void 0===i?"":"_blank",rel:"noreferrer",children:[void 0!==l&&(0,a.jsx)(n,{tooltipName:l}),(0,a.jsx)(o.G,{className:s,icon:t})]})};var m=JSON.parse('{"logo":"LOGO","items":[{"text":"About me","icon":"fa-solid fa-person","url":"about"},{"text":"Skills","icon":"fa-solid fa-book","url":"skills"},{"text":"Projects","icon":"fa-solid fa-code","url":"projects"}]}'),d=s(6261);let h=e=>{let{to:t,className:s,children:i,onClick:l}=e;return(0,a.jsx)(d.rU,{to:t,className:s,smooth:!0,duration:700,spy:!0,activeClass:"text-secondary",offset:-40,onClick:l,children:i})};var p=s(1058),x={src:".//_next/static/media/logo.fbf56f8e.svg",height:338,width:934};let g=()=>(0,a.jsx)(p.Z,{alt:"Logo",className:"transition:all h-12 w-auto duration-300 hover:scale-105",src:x,placeholder:"empty"}),u=()=>{let[e,t]=(0,r.useState)(!1),s=()=>{t(e=>!e)};return(0,a.jsx)("header",{className:"fixed z-20 h-fit w-full bg-white px-2 shadow-md",children:(0,a.jsxs)("nav",{className:"container flex items-center justify-between gap-12 text-gray-500",children:[(0,a.jsx)(h,{to:"/",className:"py-2 hover:cursor-pointer",children:(0,a.jsx)(g,{})}),(0,a.jsx)("ul",{className:" font-bold md:flex md:flex-row "+(e?"opacity-1 absolute inset-0 top-full flex h-screen max-h-[100vh] flex-col items-start gap-8 overflow-hidden bg-white bg-gray-200 px-8 pt-12 duration-700 ease-in-out":"max-h-0 overflow-hidden font-bold md:gap-12 md:overflow-visible"),children:m.items.map((t,i)=>{var l;return(0,a.jsx)("li",{className:"group flex cursor-pointer items-center gap-2 text-xl duration-100 hover:text-secondary",children:(0,a.jsxs)(h,{to:null!==(l=t.url)&&void 0!==l?l:"",className:"flex space-x-2",onClick:e?s:void 0,children:[(0,a.jsx)(o.G,{className:"h-6 w-6 duration-700 group-hover:rotate-[360deg]",icon:t.icon}),(0,a.jsx)("span",{children:t.text})]})},i)})}),(0,a.jsx)("button",{className:"block md:hidden",onClick:s,children:(0,a.jsx)(c,{className:"h-8 w-8",iconName:e?"x":"bars"})})]})})};var f=JSON.parse('{"title":"Hello, I\'m Signore","subtitle":"Welcome to my website","imageUrl":"./images/avatar.png","iconList":[{"iconName":"fab fa-github","url":"https://github.com","tooltip":"Github"},{"iconName":"fab fa-linkedin","url":"https://linkedin.com","tooltip":"Linkedin"},{"iconName":"fab fa-gitlab","url":"https://gitlab.com","tooltip":"Gitlab"}],"tags":["#nextjs","#react"]}');let b=e=>{let{icons:t,className:s,iconClassName:i}=e;return(0,a.jsx)("div",{className:"flex "+s,children:null==t?void 0:t.map((e,t)=>(0,a.jsx)(c,{iconName:e.iconName,url:e.url,className:i,tooltip:e.tooltip},t))})},j=()=>(0,a.jsx)("section",{id:"/",className:" flex h-[100vh] flex-col justify-start",children:(0,a.jsxs)("div",{className:"container flex flex-col items-center pt-24 text-primary md:pt-44 ",children:[(0,a.jsx)("h1",{className:"mb-4 text-center font-bold",children:f.title}),(0,a.jsx)("h5",{className:"mb-8 text-center",children:f.subtitle}),void 0!==f.imageUrl&&(0,a.jsx)("div",{className:"min-w-auto relative h-64 w-64 overflow-clip rounded-full",children:(0,a.jsx)(p.Z,{src:f.imageUrl,alt:"Profile",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",placeholder:"empty"})}),(0,a.jsx)(b,{icons:f.iconList,className:"my-12 gap-10 text-primary",iconClassName:"h-12 w-12 hover:scale-105 duration-300 hover:text-secondary"}),(0,a.jsx)("h4",{children:f.tags.join(" ")})]})});var N=s(3985);let w=e=>{let[t,s]=(0,r.useState)("");return(0,r.useEffect)(()=>{fetch(e).then(async e=>{let t=await e.text();s(t)})}),t},v=()=>{let e=w("content/about.md");return(0,a.jsx)("section",{id:"about",className:"bg-primary pb-12 pt-12 md:pb-20 lg:pt-24",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"mb-4 flex items-end gap-2 text-white lg:mb-10",children:[(0,a.jsx)(c,{iconName:"person",className:"mb-2 h-8 w-8 hover:scale-110 md:h-10 md:w-10"}),(0,a.jsx)("h2",{children:"About me"})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between ",children:[(0,a.jsx)("div",{className:"mb-8 w-full text-4xl text-white lg:mb-0 lg:w-1/2 ",children:(0,a.jsx)(N.D,{className:"prose text-white prose-h4:text-white",children:e})}),(0,a.jsx)("div",{className:"relative h-[25rem] w-[25rem] self-center overflow-hidden overflow-clip rounded-full md:h-[30rem] md:w-[30rem] lg:block",children:(0,a.jsx)(p.Z,{className:"relative z-10 object-cover delay-100 duration-300 md:hover:scale-110 md:hover:transition",src:"./images/avatar.png",alt:"Profile",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",placeholder:"empty"})})]})]})})};var A=JSON.parse('[{"iconName":"terminal","heading":"Programming","description":"I like to learn one new programming language each year.,","skill":[{"skillHeading":"Programming languages","skillDescription":"HTML, CSS, Javascript/Typescript, Python, C++, Dart"},{"skillHeading":"Tech Tools","skillDescription":"Microsoft Office"},{"skillHeading":"Design Tools","skillDescription":"Figma, Photoshop, Blender"}]},{"iconName":"book","heading":"Interrests","description":"Besides coding, I also have other hobbies, which I spend time on in my free time.","skill":[{"skillHeading":"Sports","skillDescription":"Water polo, golf, windsurfing, kitesurfing"},{"skillHeading":"Other interests","skillDescription":"Crypto trading, partying, car racing, Formula 1"}]}]');let y=()=>(0,a.jsxs)("section",{id:"skills",className:"mb-24",children:[(0,a.jsx)("div",{className:"h-24 bg-primary md:h-48"}),(0,a.jsx)("div",{className:"mx-4",children:(0,a.jsxs)("div",{className:"container -mt-20 w-full rounded-2xl bg-white px-3 py-16 text-center text-gray-800 shadow md:-mt-36 md:px-12",children:[(0,a.jsx)("h2",{className:"mb-16",children:"Skills and Interests"}),(0,a.jsx)("div",{className:"flex flex-col md:flex-row md:flex-wrap md:justify-start md:gap-x-40 md:gap-y-20",children:A.map((e,t)=>(0,a.jsxs)("div",{className:"mb-8 flex flex-1 flex-col items-center text-center",children:[(0,a.jsx)("div",{className:"mb-4 rounded-full bg-primary p-4 md:mb-8",children:(0,a.jsx)(c,{iconName:e.iconName,className:"h-6 w-6 text-white"})}),(0,a.jsx)("h4",{className:"text-portfolio-blue-dark mb-4",children:e.heading}),(0,a.jsx)("p",{className:"mb-6",children:e.description}),(0,a.jsx)("h5",{className:"text-portfolio-blue mb-2"}),e.skill.map((e,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"mb-1",children:e.skillHeading}),(0,a.jsx)("p",{className:"mb-6",children:e.skillDescription})]},"".concat(t,"-").concat(s)))]},t))})]})})]}),k=e=>{let{name:t,description:s,year:i,image:l,type:r,references:o}=e;return(0,a.jsxs)("article",{className:"relative z-10 min-h-[20rem] w-[18rem] rounded-lg bg-white py-4 shadow-md duration-300 md:hover:scale-105 md:hover:shadow-lg",children:[(0,a.jsx)("p",{className:"absolute top-0 left-0 z-10 p-2 text-base font-bold",children:i}),(0,a.jsx)("div",{className:"absolute inset-0 top-0 h-[6rem] rounded-t-lg bg-gray-300"}),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,a.jsx)("div",{className:"relative z-10 mt-4 h-24 w-24",children:(0,a.jsx)(p.Z,{className:"object-contain",src:l,alt:"Project image",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",placeholder:"empty"})}),(0,a.jsxs)("div",{className:"mt-auto px-8 pb-8 text-center ",children:[(0,a.jsx)("h6",{className:"mb-2",children:null==t?void 0:t.toUpperCase()}),(0,a.jsx)("p",{className:"text-sm font-semibold text-gray-500",children:s})]})]}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg bg-gray-300 py-1 px-2 text-sm font-semibold",children:r}),(0,a.jsx)(b,{icons:o,className:"absolute top-0 right-0 z-10 flex gap-3 p-2",iconClassName:"w-6 h-6 text-gray-700 xl:hover:scale-110 hover:text-gray-500"})]})};var S=JSON.parse('[{"name":"signore Template","description":"This webpage has been built using nextjs and react. It serves as a template that can by used by anyone.","image":"./favicon.ico","year":2022,"type":"Portfolio Template","references":[{"iconName":"fab fa-github","url":"https://github.com/FeliMax/signore","tooltip":"Show on Github"},{"iconName":"fa-solid fa-globe","url":"https://FeliMax.github.io/signore","tooltip":"Show on Github"}]},{"name":"DressTastic","description":"A very special mobile app written in Flutter for an online shop selling clothes for women. Designed with the Material Design 3.","image":"./images/dresstastic.png","year":2020,"type":"Flutter App","references":[{"iconName":"fa-brands fa-android","url":"https://play.google.com","tooltip":"Show on Google Play Store"},{"iconName":"fa-brands fa-apple","url":"https://www.apple.com/store","tooltip":"Show on App Store"}]},{"name":"Paperwhere","description":"An incredible project for a paper company, building a website that would help them communicate with customers.","image":"./images/paperwhere.png","year":2017,"type":"Webpage","references":[{"iconName":"fa-solid fa-globe","url":"https://example.com","tooltip":"Show web page"}]}]');let C=()=>(0,a.jsx)("section",{id:"projects",className:"bg-primary py-12 md:py-24",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"mb-12 flex gap-2 text-white md:mb-20 md:gap-4",children:[(0,a.jsx)(c,{iconName:"code",className:"h-10 w-10 md:h-12 md:w-12"}),(0,a.jsx)("h2",{children:"Projects"})]}),(0,a.jsx)("div",{className:"mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-stretch md:gap-14",children:S.map((e,t)=>(0,a.jsx)(k,{...e},t))})]})});var P={src:".//_next/static/media/next-logo.779e92a6.png",height:767,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEUAAABMaXEAAAAAAAAAAAAAAAAqzB5TAAAABnRSTlMSAB4tB0iXrQ57AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nBXBgQ0AMAzCsBDY/y9PtUmWsCAVG1p5c1AFJCPnAwaCAEVXjCmwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},E=JSON.parse('{"iconList":[{"iconName":"fab fa-github","url":"https://github.com","tooltip":"Github"},{"iconName":"fab fa-linkedin","url":"https://linkedin.com","tooltip":"Linkedin"},{"iconName":"fab fa-gitlab","url":"https://gitlab.com","tooltip":"Gitlab"}],"copyrightNotice":"2022 \xb7 Created Maximilian Stelzl & Felix Wielander"}');let T=()=>(0,a.jsx)("section",{className:"py-8",children:(0,a.jsxs)("div",{className:"container flex flex-col items-center gap-4",children:[(0,a.jsx)(h,{to:"/",className:"hover:cursor-pointer",children:(0,a.jsx)(g,{})}),(0,a.jsx)(b,{icons:E.iconList,className:"gap-8 py-6 text-primary",iconClassName:"w-10 h-10 hover:scale-105 duration-300 hover:text-secondary"}),(0,a.jsx)("p",{className:"text-center text-sm",children:E.copyrightNotice}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("p",{className:"text-sm",children:"Powered by"}),(0,a.jsx)(p.Z,{alt:"Next Logo",className:"h-8 w-auto",src:P,placeholder:"empty"})]})]})}),_=()=>(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:"signore"}),(0,a.jsx)("meta",{name:"description",content:"signore - portfolio page template"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(u,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(j,{}),(0,a.jsx)(v,{}),(0,a.jsx)(y,{}),(0,a.jsx)(C,{}),(0,a.jsx)(T,{})]})]});var B=_}},function(e){e.O(0,[265,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);