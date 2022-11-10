(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3801)}])},3801:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return M}});var a=t(5893),l=t(9008),i=t.n(l),r=t(7294),o=t(7814);let c=e=>{let{tooltipName:s}=e;return(0,a.jsx)("div",{className:"pointer-events-none absolute left-1/2 top-[calc(100%+.5rem)] z-20 hidden w-28 -translate-x-1/2 rounded-lg bg-gray-700 p-2 text-center text-xs text-white opacity-0 duration-300 group-hover:opacity-100 xl:block",children:s})},n=e=>{let{iconName:s,className:t,url:l,tooltip:i}=e;return(0,a.jsxs)("a",{className:"group relative "+(void 0===l?"pointer-events-none":""),href:l,target:void 0===l?"":"_blank",rel:"noreferrer",children:[void 0!==i&&(0,a.jsx)(c,{tooltipName:i}),(0,a.jsx)(o.G,{className:t,icon:s})]})};var d=JSON.parse('{"logo":"LOGO","items":[{"text":"About me","icon":"fa-solid fa-person","url":"about"},{"text":"Skills","icon":"fa-solid fa-book","url":"skills"},{"text":"Projects","icon":"fa-solid fa-code","url":"projects"}]}'),m=t(6261);let h=e=>{let{to:s,className:t,children:l}=e;return(0,a.jsx)(m.rU,{to:s,className:t,smooth:!0,duration:700,spy:!0,activeClass:"text-secondary",offset:-40,children:l})};var x=t(1058),p={src:".//_next/static/media/logo.87283343.svg",height:75,width:191};let g=()=>(0,a.jsx)(x.Z,{alt:"Logo",className:"h-10 w-auto",src:p,placeholder:"empty"}),j=()=>{let[e,s]=(0,r.useState)(!1),t=()=>{s(e=>!e)};return(0,a.jsx)("header",{className:"fixed z-20 h-fit w-full bg-white px-2 py-4 shadow-md",children:(0,a.jsxs)("nav",{className:" container flex items-center justify-between gap-12 text-gray-500",children:[(0,a.jsx)(h,{to:"/",className:"hover:cursor-pointer",children:(0,a.jsx)(g,{})}),(0,a.jsx)("ul",{className:"font-bold md:flex md:flex-row "+(e?"pointer-events-none absolute inset-0 top-full flex h-screen flex-col items-start gap-8 bg-white px-8 pt-12":"hidden font-bold md:gap-12"),children:d.items.map((e,s)=>{var t;return(0,a.jsx)("li",{className:"group flex cursor-pointer items-center gap-2 text-xl duration-100 hover:text-secondary",children:(0,a.jsxs)(h,{to:null!==(t=e.url)&&void 0!==t?t:"",className:"flex space-x-2",children:[(0,a.jsx)(o.G,{className:"h-6 w-6 duration-700 group-hover:rotate-[360deg]",icon:e.icon}),(0,a.jsx)("span",{children:e.text})]})},s)})}),(0,a.jsx)("button",{className:"block md:hidden",onClick:t,children:(0,a.jsx)(n,{className:"h-8 w-8",iconName:e?"x":"bars"})})]})})};var u=JSON.parse('{"title":"Hello, I\'m Sepp","subtitle":"Welcome to my website","imageUrl":"./images/avatar.svg","iconList":[{}],"tags":["#nextjs","#react"]}');let f=e=>{let{icons:s,className:t,iconClassName:l}=e;return(0,a.jsx)("div",{className:"flex "+t,children:null==s?void 0:s.map((e,s)=>(0,a.jsx)(n,{iconName:e.iconName,url:e.url,className:l,tooltip:e.tooltip},s))})};var b={src:".//_next/static/media/next-logo.779e92a6.png",height:767,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEUAAABMaXEAAAAAAAAAAAAAAAAqzB5TAAAABnRSTlMSAB4tB0iXrQ57AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nBXBgQ0AMAzCsBDY/y9PtUmWsCAVG1p5c1AFJCPnAwaCAEVXjCmwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5};let N=[{iconName:"fab fa-github",url:"github.com",tooltip:"Github"},{iconName:"fab fa-linkedin",url:"linkedin.com",tooltip:"Linkedin"},{iconName:"fab fa-gitlab",url:"gitlab.com",tooltip:"Gitlab"}],v=()=>(0,a.jsx)("section",{className:"py-8",children:(0,a.jsxs)("div",{className:"container flex flex-col items-center gap-4",children:[(0,a.jsx)(h,{to:"/",className:"hover:cursor-pointer",children:(0,a.jsx)(g,{})}),(0,a.jsx)(f,{icons:N,className:"gap-8 py-6 text-gray-500",iconClassName:"w-10 h-10 hover:scale-110 hover:text-gray-300 duration-300"}),(0,a.jsx)("p",{className:"text-center text-sm",children:"".concat(new Date().getFullYear()," Made by Maximilian Stelzl and Felix Wielander")}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("p",{className:"text-sm",children:"Powered by"}),(0,a.jsx)(x.Z,{alt:"Next Logo",className:"h-8 w-auto",src:b,placeholder:"empty"})]})]})}),w=()=>(0,a.jsx)("section",{id:"/",className:" flex h-[100vh] flex-col justify-start",children:(0,a.jsxs)("div",{className:"container flex flex-col items-center pt-44 text-primary ",children:[(0,a.jsx)("h1",{className:"mb-4 font-bold",children:u.title}),(0,a.jsx)("h5",{className:"mb-8",children:u.subtitle}),void 0!==u.imageUrl&&(0,a.jsx)("div",{className:"min-w-auto relative h-64 w-64",children:(0,a.jsx)(x.Z,{src:u.imageUrl,alt:"Profile",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",placeholder:"empty"})}),(0,a.jsx)(f,{icons:N,iconClassName:"h-12 w-12",className:"my-12 gap-10"}),(0,a.jsx)("h4",{children:u.tags.join(" ")})]})});var A=t(3985);let y=e=>{let[s,t]=(0,r.useState)("");return(0,r.useEffect)(()=>{fetch(e).then(async e=>{let s=await e.text();t(s)})}),s},k=()=>{let e=y("content/about.md");return(0,a.jsx)("section",{id:"about",className:"bg-primary pb-12 pt-12 md:pb-20 lg:pt-24",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"mb-4 flex items-end gap-2 text-white lg:mb-10",children:[(0,a.jsx)(n,{iconName:"person",className:"mb-2 h-8 w-8 hover:scale-110 md:h-10 md:w-10"}),(0,a.jsx)("h2",{children:"About me"})]}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:justify-between ",children:[(0,a.jsx)("div",{className:"mb-8 w-full text-3xl text-white lg:mb-0 lg:w-1/2 ",children:(0,a.jsx)(A.D,{className:"prose text-white",children:e})}),(0,a.jsx)("div",{className:"relative h-80 w-80 self-center overflow-hidden lg:block",children:(0,a.jsx)(x.Z,{className:"relative z-10 object-cover delay-100 duration-300 md:hover:scale-110 md:hover:transition",src:"./images/me.jpeg",alt:"Profile",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",placeholder:"empty"})})]})]})})};var S=JSON.parse('[{"iconName":"terminal","heading":"Programming","description":"I like to code things from scratch, and enjoy bringing ideas to life in the browser.,","skill":[{"skillHeading":"Languages I speak:","skillDescription":"HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart"},{"skillHeading":"Tech Tools","skillDescription":"HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart"},{"skillHeading":"Design Tools","skillDescription":"HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart"}]},{"iconName":"book","heading":"Interrests","description":"I like to code things from scratch, and enjoy bringing ideas to life in the browser.,","skill":[{"skillHeading":"Sports","skillDescription":"HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart and a lot of other shit"},{"skillHeading":"IT-Topics","skillDescription":"HTML, CSS, Sass, Javascript/Typescript, Python, C++, Dart"}]}]');let C=()=>(0,a.jsxs)("section",{id:"skills",className:"mb-24",children:[(0,a.jsx)("div",{className:"h-24 bg-primary md:h-48"}),(0,a.jsx)("div",{className:"mx-4",children:(0,a.jsxs)("div",{className:"container -mt-20 w-full rounded-2xl bg-white px-3 py-16 text-center text-gray-800 shadow md:-mt-36 md:px-12",children:[(0,a.jsx)("h2",{className:"mb-16",children:"Skills and Interests"}),(0,a.jsx)("div",{className:" flex flex-col justify-between md:flex-row md:gap-40",children:S.map((e,s)=>(0,a.jsxs)("div",{className:"mb-8 flex flex-1 flex-col items-center text-center",children:[(0,a.jsx)("div",{className:"mb-4 rounded-full bg-primary p-4 md:mb-8",children:(0,a.jsx)(n,{iconName:e.iconName,className:"h-6 w-6 text-white"})}),(0,a.jsx)("h4",{className:"text-portfolio-blue-dark mb-4",children:e.heading}),(0,a.jsx)("p",{className:"mb-6",children:e.description}),(0,a.jsx)("h6",{className:"text-portfolio-blue mb-2"}),e.skill.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{children:e.skillHeading}),(0,a.jsx)("p",{className:"mb-6",children:e.skillDescription})]},"".concat(s,"-").concat(t)))]},s))})]})})]}),T=e=>{let{name:s,description:t,year:l,type:i,references:r}=e;return(0,a.jsxs)("article",{className:"relative z-10 min-h-[20rem] w-[18rem] rounded-lg bg-white py-4 shadow-md duration-300 md:hover:scale-105 md:hover:shadow-lg",children:[(0,a.jsx)("p",{className:"absolute top-0 left-0 z-10 p-2 font-bold",children:l}),(0,a.jsx)("div",{className:"absolute inset-0 top-0 h-[6rem] rounded-t-lg bg-gray-300"}),(0,a.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,a.jsx)("div",{className:"relative z-10 mt-4 h-24 w-24",children:(0,a.jsx)(x.Z,{className:"object-contain",src:"./images/avatar.svg",alt:"Project image",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",placeholder:"empty"})}),(0,a.jsxs)("div",{className:"mt-auto px-8 pb-8 text-center ",children:[(0,a.jsx)("h6",{className:"mb-2",children:null==s?void 0:s.toUpperCase()}),(0,a.jsx)("p",{className:"text-gray-500 ",children:t})]})]}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg bg-gray-300 py-1 px-2 text-sm",children:i}),(0,a.jsx)(f,{icons:r,className:"absolute top-0 right-0 z-10 flex gap-3 p-2",iconClassName:"w-6 h-6 text-gray-700 xl:hover:scale-110 hover:text-gray-500"})]})};var P=JSON.parse('[{"name":"This Webpage","description":"This webpage has been built using nextjs and react.","year":2022,"type":"Webpage","references":[{"iconName":"fab fa-github","url":"https://github.com/Maxwell929/signore","tooltip":"Show on Github"},{"iconName":"fa-brands fa-github","url":"https://github.com/Maxwell929/signore","tooltip":"Show on Github"}]},{"name":"Project XYZ","description":"This is the description of projeon  projct XY is the description  s the description  project XY is the description of project XYZ.","year":2022,"type":"Flutter Project","references":[{"iconName":"fa-solid fa-globe","url":"https://example.com","tooltip":"Show web page"}]},{"name":"Project XYZ","description":"This is the description of project XYZ.","year":2022,"type":"xy","references":[{"iconName":"fa-solid fa-globe","url":"https://example.com","tooltip":"Show web page"}]}]');let D=()=>(0,a.jsx)("section",{id:"projects",className:"bg-primary py-12 md:py-24",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"mb-12 flex gap-2 text-white md:mb-20 md:gap-4",children:[(0,a.jsx)(n,{iconName:"code",className:"h-10 w-10 md:h-12 md:w-12"}),(0,a.jsx)("h2",{children:"Projects"})]}),(0,a.jsx)("div",{className:"mx-auto flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:items-stretch md:gap-14",children:P.map((e,s)=>(0,a.jsx)(T,{...e},s))})]})}),E=()=>(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(j,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(w,{}),(0,a.jsx)(k,{}),(0,a.jsx)(C,{}),(0,a.jsx)(D,{}),(0,a.jsx)(v,{})]})]});var M=E}},function(e){e.O(0,[265,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);