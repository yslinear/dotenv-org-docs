(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2768],{7070:function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/tutorials/sync",function(){return l(3575)}])},1370:function(n,e,l){"use strict";l.d(e,{c:function(){return i}});var r=l(5893),o=l(5675),t=l.n(o);function i(n){return(0,r.jsx)("div",{className:"w-full p-7 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md",children:(0,r.jsxs)("div",{className:"border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg",children:[(0,r.jsx)("div",{className:"p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800",children:(0,r.jsxs)("div",{className:"flex py-1 px-2",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,r.jsx)("span",{className:"h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"}),(0,r.jsx)("span",{className:"h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"}),(0,r.jsx)("span",{className:"h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"})]}),(0,r.jsx)("div",{className:"text-right w-full text-zinc-400 text-xs",children:n.www})]})}),(0,r.jsx)("div",{className:"p-0",children:(0,r.jsx)("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"hover:brightness-105",children:(0,r.jsx)(t(),{src:n.url,width:"0",height:"0",alt:"",className:"p-0 m-0 w-full",unoptimized:!0})})})]})})}},3575:function(n,e,l){"use strict";l.r(e),l.d(e,{__N_SSG:function(){return u}});var r=l(5893),o=l(1151),t=l(1370);function i(n){let e=Object.assign({h5:"h5",h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h5,{children:"Tutorials"}),"\n",(0,r.jsx)(e.h1,{children:"Sync .env files"}),"\n",(0,r.jsx)("iframe",{className:"aspect-video border-2 border-zinc-500 rounded-lg",src:"https://www.youtube.com/embed/z-lBjxfhWeY",title:"1 Minute Overview",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,r.jsx)(e.h2,{id:"run-dotenv-vault-new",children:"Run dotenv-vault new"}),"\n",(0,r.jsx)(e.p,{children:"Open terminal, enter your project's root directory (where you keep your .env file), and run dotenv-vault new."}),"\n",(0,r.jsx)(e.pre,{code:"$ npx dotenv-vault new\n",children:(0,r.jsx)(e.code,{children:"$ npx dotenv-vault new\n"})}),"\n",(0,r.jsx)("small",{children:"FYI: npx is a very powerful command that lets you run code built with NodeJS and published through the npm registry."}),"\n",(0,r.jsx)(e.h2,{id:"name-your-project",children:"Name your project"}),"\n",(0,r.jsx)(e.p,{children:"On the page that opens, name your project (typically prefilled for you), and enter your email address."}),"\n",(0,r.jsx)(t.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-07-28_at_5.55.15_PM_jnnhto.png"}),"\n",(0,r.jsx)(e.h2,{id:"view-env-vault-file-optional",children:"View .env.vault file (optional)"}),"\n",(0,r.jsx)(e.p,{children:"A .env.vault was generated for your project. It uniquely identifies your project in dotenv-vault. Think of it like a unique git url at GitHub. It identifies your project so that you (and your teammates) pull the correct .env from dotenv-vault."}),"\n",(0,r.jsx)(e.p,{children:"Run ls -al to view it."}),"\n",(0,r.jsx)(e.pre,{code:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 27 14:51 .env\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\nJul 27 14:49 index.js\nJul 27 14:12 node_modules\nJul 27 14:48 package-lock.json\nJul 27 14:12 package.json\n",children:(0,r.jsx)(e.code,{children:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 27 14:51 .env\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\nJul 27 14:49 index.js\nJul 27 14:12 node_modules\nJul 27 14:48 package-lock.json\nJul 27 14:12 package.json\n"})}),"\n",(0,r.jsx)(t.c,{url:"/assets/img/cloudinary/Screen_Shot_2022-07-28_at_6.46.24_PM_s5qd3s.png"}),"\n",(0,r.jsx)(e.h2,{id:"run-dotenv-vault-login",children:"Run dotenv-vault login"}),"\n",(0,r.jsx)(e.p,{children:"Next, authenticate your machine by running dotenv-vault login."}),"\n",(0,r.jsx)(e.pre,{code:"$ npx dotenv-vault login\n",children:(0,r.jsx)(e.code,{children:"$ npx dotenv-vault login\n"})}),"\n",(0,r.jsx)(e.h2,{id:"click-log-in",children:"Click log in"}),"\n",(0,r.jsx)(e.p,{children:"On the next screen, follow the login process and click 'Log in'."}),"\n",(0,r.jsx)(t.c,{url:"/assets/img/cloudinary/dotenv-vault-login-2_vdb9sq.png"}),"\n",(0,r.jsx)(e.h2,{id:"view-env-me-file-optional",children:"View .env.me file (optional)"}),"\n",(0,r.jsx)(e.p,{children:"You now have a .env.me file in the root of your project. The .env.me file uniquely authorizes you to access a project's shared .env file. You can think of it like your unique SSH key at GitHub."}),"\n",(0,r.jsx)(e.p,{children:"Run ls -al to view it."}),"\n",(0,r.jsx)(e.pre,{code:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 27 14:51 .env\nJul 28 18:11 .env.me\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\nJul 27 14:49 index.js\nJul 27 14:12 node_modules\nJul 27 14:48 package-lock.json\nJul 27 14:12 package.json\n",children:(0,r.jsx)(e.code,{children:"$ ls -al\nJul 28 17:54 .\nJul 27 13:46 ..\nJul 27 14:51 .env\nJul 28 18:11 .env.me\nJul 28 18:09 .env.vault\nJul 28 17:54 .gitignore\nJul 27 14:49 index.js\nJul 27 14:12 node_modules\nJul 27 14:48 package-lock.json\nJul 27 14:12 package.json\n"})}),"\n",(0,r.jsx)(t.c,{url:"/assets/img/cloudinary/dotenv-me_bsffi2.png"}),"\n",(0,r.jsx)(e.h2,{id:"run-dotenv-vault-push",children:"Run dotenv-vault push"}),"\n",(0,r.jsx)(e.p,{children:"Return one last time to terminal and run dotenv-vault push."}),"\n",(0,r.jsx)(e.p,{children:"This will securely push your .env file to dotenv-vault. Each time you change your .env file, run dotenv-vault push."}),"\n",(0,r.jsx)(e.pre,{code:"$ npx dotenv-vault push\n\nremote:   Securely pushing (.env)... done\nremote:   Securely pushed development (.env)\n\nRun npx dotenv-vault open to view in the ui\n",children:(0,r.jsx)(e.code,{children:"$ npx dotenv-vault push\n\nremote:   Securely pushing (.env)... done\nremote:   Securely pushed development (.env)\n\nRun npx dotenv-vault open to view in the ui\n"})}),"\n",(0,r.jsx)(e.p,{children:"Congratulations \uD83C\uDF89, you just pushed (and secured) your first .env file in dotenv-vault."}),"\n",(0,r.jsx)("small",{children:"ProTip: For a list of all available commands, run npx dotenv-vault help."}),"\n",(0,r.jsx)(e.h2,{id:"run-dotenv-vault-open-bonus",children:"Run dotenv-vault open (bonus)"}),"\n",(0,r.jsx)(e.p,{children:"Let's check out the UI. Run dotenv-vault open."}),"\n",(0,r.jsx)(e.pre,{code:"$ npx dotenv-vault open\n",children:(0,r.jsx)(e.code,{children:"$ npx dotenv-vault open\n"})}),"\n",(0,r.jsx)(t.c,{url:"/assets/img/cloudinary/dotenv-vault-ui_ep5nrs.png"}),"\n",(0,r.jsx)(e.p,{children:"That's it! Thanks for using dotenv-vault."})]})}var u=!0;e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i(n)}}},function(n){n.O(0,[5675,9774,2888,179],function(){return n(n.s=7070)}),_N_E=n.O()}]);