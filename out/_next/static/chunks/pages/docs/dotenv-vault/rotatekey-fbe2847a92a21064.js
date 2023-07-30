(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4072],{1381:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/dotenv-vault/rotatekey",function(){return t(5167)}])},1370:function(e,n,t){"use strict";t.d(n,{c:function(){return a}});var o=t(5893),r=t(5675),d=t.n(r);function a(e){return(0,o.jsx)("div",{className:"w-full p-7 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md",children:(0,o.jsxs)("div",{className:"border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg",children:[(0,o.jsx)("div",{className:"p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800",children:(0,o.jsxs)("div",{className:"flex py-1 px-2",children:[(0,o.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,o.jsx)("span",{className:"h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"}),(0,o.jsx)("span",{className:"h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"}),(0,o.jsx)("span",{className:"h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"})]}),(0,o.jsx)("div",{className:"text-right w-full text-zinc-400 text-xs",children:e.www})]})}),(0,o.jsx)("div",{className:"p-0",children:(0,o.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"hover:brightness-105",children:(0,o.jsx)(d(),{src:e.url,width:"0",height:"0",alt:"",className:"p-0 m-0 w-full",unoptimized:!0})})})]})})}},5167:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return l}});var o=t(5893),r=t(1151),d=t(1370);function a(e){let n=Object.assign({h5:"h5",h1:"h1",p:"p",h2:"h2",h4:"h4",pre:"pre",code:"code",strong:"strong",hr:"hr"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h5,{children:"CLI"}),"\n",(0,o.jsx)(n.h1,{children:"dotenv-vault rotatekey"}),"\n",(0,o.jsx)(n.p,{children:"Rotate a project environment's DOTENV_KEY."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h4,{children:"1. Run rotatekey command"}),"\n",(0,o.jsx)(n.p,{children:"Specify the environment. In the example below, we're rotating our production DOTENV_KEY."}),"\n",(0,o.jsx)(n.pre,{code:"$ npx dotenv-vault rotatekey production\nremote:   Rotating decryption key... done\ndotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production\n\n1. Update DOTENV_KEY by comma-appending the new value\n2. Rebuild and deploy your .env.vault file\n3. Update DOTENV_KEY by removing the old value\n\nExample:\nDOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production,dotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production'\n",children:(0,o.jsx)(n.code,{children:"$ npx dotenv-vault rotatekey production\nremote:   Rotating decryption key... done\ndotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production\n\n1. Update DOTENV_KEY by comma-appending the new value\n2. Rebuild and deploy your .env.vault file\n3. Update DOTENV_KEY by removing the old value\n\nExample:\nDOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production,dotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production'\n"})}),"\n",(0,o.jsx)(d.c,{url:"/assets/img/cloudinary/rotatekeys_axduqs.gif"}),"\n",(0,o.jsx)(n.h4,{children:"2. Append the new DOTENV_KEY"}),"\n",(0,o.jsxs)(n.p,{children:["Open your server where you have previously set your ",(0,o.jsx)(n.strong,{children:"DOTENV_KEY"})," value. Comma-append the new value."]}),"\n",(0,o.jsx)(n.p,{children:"For example, here is how you might set it on Heroku."}),"\n",(0,o.jsx)(n.pre,{code:"heroku config:set DOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production,dotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production' \n",children:(0,o.jsx)(n.code,{children:"heroku config:set DOTENV_KEY='dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production,dotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production' \n"})}),"\n",(0,o.jsx)(n.p,{children:"Note that the new value comes after the old one. The order doesn't matter, but we recommend placing the new value at the end so that you remember to delete the old (leading) value after you deploy."}),"\n",(0,o.jsx)(n.h4,{children:"3. Build and deploy"}),"\n",(0,o.jsx)(n.p,{children:"Next, we need to rebuild our encrypted .env.vault file with the new encryption key. Run dotenv-vault build."}),"\n",(0,o.jsx)(n.pre,{code:"$ npx dotenv-vault build\n",children:(0,o.jsx)(n.code,{children:"$ npx dotenv-vault build\n"})}),"\n",(0,o.jsx)(n.p,{children:"Commit those changes safely to code and deploy."}),"\n",(0,o.jsx)(n.p,{children:"That's it! Your code will now be running off the new DOTENV_KEY."}),"\n",(0,o.jsx)(n.h4,{children:"4. Clean up old value"}),"\n",(0,o.jsx)(n.p,{children:"It is a good idea to clean up the old value."}),"\n",(0,o.jsxs)(n.p,{children:["Return to your server and remove the old value inside the comma-separated list ",(0,o.jsx)(n.strong,{children:"DOTENV_KEY"}),". In heroku, it might look like this:"]}),"\n",(0,o.jsx)(n.pre,{code:"heroku config:set DOTENV_KEY='dotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production' \n",children:(0,o.jsx)(n.code,{children:"heroku config:set DOTENV_KEY='dotenv://:key_5678@dotenv.org/vault/.env.vault?environment=production' \n"})}),"\n",(0,o.jsx)(n.p,{children:"Nice work rotating your keys! If you really want to go the extra mile you can automate this into your CI/CD process. That way you rotate your decryption key on some set schedule - every quarter for example."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"command-details",children:"Command Details"}),"\n",(0,o.jsx)(n.p,{children:"For more information on the rotatekey command, run dotenv-vault help rotatekey."}),"\n",(0,o.jsx)(n.pre,{code:"$ npx dotenv-vault help rotatekey\nRotate DOTENV_KEY\n\nUSAGE\n  $ dotenv-vault rotatekey [ENVIRONMENT] [-m <value>] [-y]\n\nARGUMENTS\n  ENVIRONMENT  Set environment to rotate. Required.\n\nFLAGS\n  -m, --dotenvMe=<value>  Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)\n  -y, --yes               Automatic yes to prompts. Assume yes to all prompts and run non-interactively.\n\nDESCRIPTION\n  Rotate DOTENV_KEY\n\nEXAMPLES\n  $ dotenv-vault rotatekey\n",children:(0,o.jsx)(n.code,{children:"$ npx dotenv-vault help rotatekey\nRotate DOTENV_KEY\n\nUSAGE\n  $ dotenv-vault rotatekey [ENVIRONMENT] [-m <value>] [-y]\n\nARGUMENTS\n  ENVIRONMENT  Set environment to rotate. Required.\n\nFLAGS\n  -m, --dotenvMe=<value>  Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)\n  -y, --yes               Automatic yes to prompts. Assume yes to all prompts and run non-interactively.\n\nDESCRIPTION\n  Rotate DOTENV_KEY\n\nEXAMPLES\n  $ dotenv-vault rotatekey\n"})})]})}var l=!0;n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[5675,9774,2888,179],function(){return e(e.s=1381)}),_N_E=e.O()}]);