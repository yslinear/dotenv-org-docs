(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5177],{9159:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/frameworks/angular/vercel",function(){return e(9565)}])},9061:function(n,s,e){"use strict";e.d(s,{N:function(){return a}});var o=e(5893);function a(n){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{className:"flex-grow",children:(0,o.jsxs)("h5",{children:[(0,o.jsx)("a",{href:"/docs#frameworks",children:"Frameworks"})," ",n.framework?(0,o.jsxs)("span",{children:["› ",(0,o.jsx)("a",{href:n.url,children:n.framework})]}):(0,o.jsx)("span",{})]})}),(0,o.jsx)("div",{className:"flex flex-shrink justify-end gap-2",children:n.icon})]})})}},5404:function(n,s,e){"use strict";e.d(s,{X:function(){return a}});var o=e(5893);function a(n){return(0,o.jsx)("p",{className:"lead mt-1",children:n.lead})}},1370:function(n,s,e){"use strict";e.d(s,{c:function(){return r}});var o=e(5893),a=e(5675),t=e.n(a);function r(n){return(0,o.jsx)("div",{className:"w-full p-7 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md",children:(0,o.jsxs)("div",{className:"border border-zinc-300 dark:border-zinc-800 text-zinc-100 text-sm subpixel-antialiased rounded-lg leading-normal overflow-hidden shadow-lg",children:[(0,o.jsx)("div",{className:"p-0 bg-zinc-200 dark:bg-black border-b border-zinc-300 dark:border-zinc-800",children:(0,o.jsxs)("div",{className:"flex py-1 px-2",children:[(0,o.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,o.jsx)("span",{className:"h-2 w-2 bg-red-500/70 dark:bg-red-500/30 rounded-full"}),(0,o.jsx)("span",{className:"h-2 w-2 bg-orange-300/70 dark:bg-orange-300/30 rounded-full"}),(0,o.jsx)("span",{className:"h-2 w-2 bg-green-500/70 dark:bg-green-500/30 rounded-full"})]}),(0,o.jsx)("div",{className:"text-right w-full text-zinc-400 text-xs",children:n.www})]})}),(0,o.jsx)("div",{className:"p-0",children:(0,o.jsx)("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"hover:brightness-105",children:(0,o.jsx)(t(),{src:n.url,width:"0",height:"0",alt:"",className:"p-0 m-0 w-full",unoptimized:!0})})})]})})}},3413:function(n,s,e){"use strict";e.d(s,{Q:function(){return a}});var o=e(5893);function a(n){return(0,o.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",...n,children:(0,o.jsx)("path",{d:"M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"})})}},1212:function(n,s,e){"use strict";e.d(s,{K:function(){return a}});var o=e(5893);function a(n){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",...n,children:(0,o.jsx)("path",{d:"M24 22.525H0l12-21.05 12 21.05z"})})}},9565:function(n,s,e){"use strict";e.r(s),e.d(s,{__N_SSG:function(){return h}});var o=e(5893),a=e(1151),t=e(1490),r=e(1370),l=e(9061),p=e(5404),i=e(3413),c=e(1212);function d(n){let s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a"},(0,a.ah)(),n.components),{Note:e}=s;return e||function(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.N,{framework:"Angular.js",url:"/docs/frameworks/angular",icon:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Q,{className:"h-9 w-9 text-[#DD0031]"}),(0,o.jsx)(c.K,{className:"h-9 w-9 text-[#000000] dark:invert"})]})}),"\n",(0,o.jsx)(s.h1,{children:"Deploy a Angular.js App to Vercel"}),"\n",(0,o.jsx)(p.X,{lead:"Deploy an Angular.js app with an encrypted .env.vault file to Vercel."}),"\n",(0,o.jsx)(e,{children:(0,o.jsxs)(s.p,{children:["Find a complete ",(0,o.jsx)("a",{href:"https://github.com/dotenv-org/examples/tree/master/angular/vercel",children:"code example on GitHub"})," for this guide."]})}),"\n",(0,o.jsx)(s.h2,{id:"initial-setup",children:"Initial setup"}),"\n",(0,o.jsx)(s.p,{children:"Create an Angular.js application."}),"\n",(0,o.jsx)(s.pre,{language:"bash",code:"npx @angular/cli new\n",children:(0,o.jsx)(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">npx @angular/cli new</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"This will create a handful of files."}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"ls -1\nREADME.md\nangular.json\nnode_modules/\npackage-lock.json\npackage.json\nsrc/\ntsconfig.app.json\ntsconfig.json\ntsconfig.spec.json\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">ls -1</span></span>\n<span><span style="color: var(--shiki-color-text)">README.md</span></span>\n<span><span style="color: var(--shiki-color-text)">angular.json</span></span>\n<span><span style="color: var(--shiki-color-text)">node_modules/</span></span>\n<span><span style="color: var(--shiki-color-text)">package-lock.json</span></span>\n<span><span style="color: var(--shiki-color-text)">package.json</span></span>\n<span><span style="color: var(--shiki-color-text)">src/</span></span>\n<span><span style="color: var(--shiki-color-text)">tsconfig.app.json</span></span>\n<span><span style="color: var(--shiki-color-text)">tsconfig.json</span></span>\n<span><span style="color: var(--shiki-color-text)">tsconfig.spec.json</span></span>\n<span></span>'})}),"\n",(0,o.jsxs)(s.p,{children:["Add ",(0,o.jsx)(s.a,{href:"https://github.com/chihab/ngx-env",children:(0,o.jsx)(s.code,{children:"@ngx-env/builder"})})," so we can get ",(0,o.jsx)(s.code,{children:"process.env"})," support in Angular."]}),"\n",(0,o.jsx)(s.pre,{language:"bash",code:"npx @angular/cli add @ngx-env/builder\n",children:(0,o.jsx)(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">npx @angular/cli add @ngx-env/builder</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"Generate the environment files (for Angular 16 and greater)."}),"\n",(0,o.jsx)(s.pre,{language:"bash",code:"npx @angular/cli generate environments\n",children:(0,o.jsx)(s.code,{className:"language-bash",children:'<span><span style="color: var(--shiki-color-text)">npx @angular/cli generate environments</span></span>\n<span></span>'})}),"\n",(0,o.jsxs)(s.p,{children:["Edit ",(0,o.jsx)(s.code,{children:"src/app/app.component.ts"})," to include the environment variable ",(0,o.jsx)(s.code,{children:"NG_APP_HELLO"}),"."]}),"\n",(0,o.jsx)(s.pre,{language:"js",code:"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n  title = 'vercel';\n  NG_APP_HELLO = process.env['NG_APP_HELLO']\n}\n",children:(0,o.jsx)(s.code,{className:"language-js",children:'<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { Component } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@angular/core&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">@</span><span style="color: var(--shiki-token-function)">Component</span><span style="color: var(--shiki-color-text)">({</span></span>\n<span><span style="color: var(--shiki-color-text)">  selector</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;app-root&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  templateUrl</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;./app.component.html&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  styleUrls</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;./app.component.css&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">class</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">AppComponent</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  title </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vercel&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span><span style="color: var(--shiki-color-text)">  NG_APP_HELLO </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">process</span><span style="color: var(--shiki-color-text)">.env[</span><span style="color: var(--shiki-token-string-expression)">&#39;NG_APP_HELLO&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'}),title:"src/app/app.component.ts"}),"\n",(0,o.jsxs)(s.p,{children:["Change ",(0,o.jsx)(s.code,{children:"src/app/app.component.html"})," to a simple ",(0,o.jsx)(s.code,{children:"Hello {{ NG_APP_HELLO }}"}),"."]}),"\n",(0,o.jsx)(s.pre,{language:"js",code:"Hello {{ NG_APP_HELLO }}.\n",children:(0,o.jsx)(s.code,{className:"language-js",children:'<span><span style="color: var(--shiki-color-text)">Hello {{ </span><span style="color: var(--shiki-token-constant)">NG_APP_HELLO</span><span style="color: var(--shiki-color-text)"> }}.</span></span>\n<span></span>'}),title:"src/app/app.component.html"}),"\n",(0,o.jsxs)(s.p,{children:["Add ",(0,o.jsx)(s.code,{children:".vercelignore"})," file."]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:".env*\n.flaskenv*\n!.env.project\n!.env.vault\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">.env</span><span style="color: var(--shiki-token-keyword)">*</span></span>\n<span><span style="color: var(--shiki-color-text)">.flaskenv</span><span style="color: var(--shiki-token-keyword)">*</span></span>\n<span><span style="color: var(--shiki-token-keyword)">!</span><span style="color: var(--shiki-color-text)">.env.project</span></span>\n<span><span style="color: var(--shiki-token-keyword)">!</span><span style="color: var(--shiki-color-text)">.env.vault</span></span>\n<span></span>'}),title:".vercelignore"}),"\n",(0,o.jsx)(s.p,{children:"Commit that to code and deploy it to Vercel."}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npx vercel@latest deploy --prod\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npx vercel@latest deploy --prod</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(r.c,{url:"/assets/img/docs/hello-blank.png",www:"yourapp.vercel.app"}),"\n",(0,o.jsxs)(s.p,{children:["Once deployed, your app will say ",(0,o.jsx)(s.code,{children:"'Hello .'"})," as it doesn't have a way to access the environment variable yet. Let's do that next."]}),"\n",(0,o.jsx)(s.h2,{id:"preload-dotenv",children:"Preload dotenv"}),"\n",(0,o.jsxs)(s.p,{children:["Install ",(0,o.jsx)(s.a,{href:"https://github.com/motdotla/dotenv",children:(0,o.jsx)(s.code,{children:"dotenv"})}),"."]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npm install dotenv --save # Requires dotenv >= 16.1.0\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npm install dotenv --save </span><span style="color: var(--shiki-token-comment)"># Requires dotenv &gt;= 16.1.0</span></span>\n<span></span>'})}),"\n",(0,o.jsxs)(s.p,{children:["Create a ",(0,o.jsx)(s.code,{children:".env"})," file in the root of your project."]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:'# .env\nNG_APP_HELLO="World"\n',children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-token-comment)"># .env</span></span>\n<span><span style="color: var(--shiki-color-text)">NG_APP_HELLO=</span><span style="color: var(--shiki-token-string-expression)">&quot;World&quot;</span></span>\n<span></span>'}),title:".env"}),"\n",(0,o.jsx)(s.p,{children:"Preload Angular.js scripts using dotenv. This will inject environment variables ahead of Angular.js."}),"\n",(0,o.jsx)(s.pre,{language:"json",code:'"scripts": {\n  "scripts": {\n    "ng": "node -r dotenv/config ./node_modules/.bin/ng",\n    "start": "node -r dotenv/config ./node_modules/.bin/ng serve",\n    "build": "node -r dotenv/config ./node_modules/.bin/ng build",\n    "watch": "node -r dotenv/config ./node_modules/.bin/ng build --watch --configuration development",\n    "test": "node -r dotenv/config ./node_modules/.bin/ng test"\n  },\n},\n',children:(0,o.jsx)(s.code,{className:"language-json",children:'<span><span style="color: var(--shiki-token-string-expression)">&quot;scripts&quot;</span><span style="color: var(--shiki-color-text)">: {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;scripts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;ng&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;node -r dotenv/config ./node_modules/.bin/ng&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;start&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;node -r dotenv/config ./node_modules/.bin/ng serve&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;build&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;node -r dotenv/config ./node_modules/.bin/ng build&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;watch&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;node -r dotenv/config ./node_modules/.bin/ng build --watch --configuration development&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;test&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;node -r dotenv/config ./node_modules/.bin/ng test&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">},</span></span>\n<span></span>'}),title:"package.json"}),"\n",(0,o.jsx)(s.p,{children:"Try running it locally."}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npm run start\n# Angular Live Development Server is listening on localhost:4200\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npm run start</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Angular Live Development Server is listening on localhost:4200</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"It will say 'Hello World'."}),"\n",(0,o.jsx)(r.c,{url:"/assets/img/docs/nextjs-hello-world.png"}),"\n",(0,o.jsxs)(s.p,{children:["Great! ",(0,o.jsx)(s.code,{children:"process.env"})," now has the keys and values you defined in your ",(0,o.jsx)(s.code,{children:".env"})," file."]}),"\n",(0,o.jsx)(s.p,{children:"That covers local simulation of production. Let's solve for the real production environment next."}),"\n",(0,o.jsx)(s.h2,{id:"build-env-vault",children:"Build .env.vault"}),"\n",(0,o.jsxs)(s.p,{children:["Push your latest ",(0,o.jsx)(s.code,{children:".env"})," file changes and edit your CI secrets. ",(0,o.jsx)(s.a,{href:"/docs/tutorials/sync",children:"Learn more about syncing"})]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npx dotenv-vault@latest push\nnpx dotenv-vault@latest open production\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npx dotenv-vault@latest push</span></span>\n<span><span style="color: var(--shiki-color-text)">npx dotenv-vault@latest open production</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"Use the UI to configure those secrets per environment."}),"\n",(0,o.jsx)(r.c,{url:"/assets/img/docs/edit-production-value.gif",www:"www.dotenv.org"}),"\n",(0,o.jsxs)(s.p,{children:["Then build your encrypted ",(0,o.jsx)(s.code,{children:".env.vault"})," file."]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npx dotenv-vault@latest build\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npx dotenv-vault@latest build</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"Its contents should look something like this."}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:'#/-------------------.env.vault---------------------/\n#/         cloud-agnostic vaulting standard         /\n#/   [how it works](https://dotenv.org/env-vault)   /\n#/--------------------------------------------------/\n\n# development\nDOTENV_VAULT_DEVELOPMENT="/HqNgQWsf6Oh6XB9pI/CGkdgCe6d4/vWZHgP50RRoDTzkzPQk/xOaQs="\nDOTENV_VAULT_DEVELOPMENT_VERSION=2\n\n# production\nDOTENV_VAULT_PRODUCTION="x26PuIKQ/xZ5eKrYomKngM+dO/9v1vxhwslE/zjHdg3l+H6q6PheB5GVDVIbZg=="\nDOTENV_VAULT_PRODUCTION_VERSION=2\n',children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-token-comment)">#/-------------------.env.vault---------------------/</span></span>\n<span><span style="color: var(--shiki-token-comment)">#/         cloud-agnostic vaulting standard         /</span></span>\n<span><span style="color: var(--shiki-token-comment)">#/   [how it works](https://dotenv.org/env-vault)   /</span></span>\n<span><span style="color: var(--shiki-token-comment)">#/--------------------------------------------------/</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># development</span></span>\n<span><span style="color: var(--shiki-color-text)">DOTENV_VAULT_DEVELOPMENT=</span><span style="color: var(--shiki-token-string-expression)">&quot;/HqNgQWsf6Oh6XB9pI/CGkdgCe6d4/vWZHgP50RRoDTzkzPQk/xOaQs=&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">DOTENV_VAULT_DEVELOPMENT_VERSION=2</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)"># production</span></span>\n<span><span style="color: var(--shiki-color-text)">DOTENV_VAULT_PRODUCTION=</span><span style="color: var(--shiki-token-string-expression)">&quot;x26PuIKQ/xZ5eKrYomKngM+dO/9v1vxhwslE/zjHdg3l+H6q6PheB5GVDVIbZg==&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">DOTENV_VAULT_PRODUCTION_VERSION=2</span></span>\n<span></span>'}),title:".env.vault"}),"\n",(0,o.jsx)(s.h2,{id:"set-dotenv-key",children:"Set DOTENV_KEY"}),"\n",(0,o.jsxs)(s.p,{children:["Fetch your production ",(0,o.jsx)(s.code,{children:"DOTENV_KEY"}),"."]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npx dotenv-vault@latest keys production\n# outputs: dotenv://:key_4567@dotenv.org/vault/.env.vault?environment=production\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npx dotenv-vault@latest keys production</span></span>\n<span><span style="color: var(--shiki-token-comment)"># outputs: dotenv://:key_4567@dotenv.org/vault/.env.vault?environment=production</span></span>\n<span></span>'})}),"\n",(0,o.jsxs)(s.p,{children:["Set ",(0,o.jsx)(s.code,{children:"DOTENV_KEY"})," on Vercel using the CLI."]}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npx vercel@latest env add DOTENV_KEY\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npx vercel@latest env add DOTENV_KEY</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"? What’s the value of DOTENV_KEY? dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=production\n✅  Added Environment Variable DOTENV_KEY to Project nodejs-vercel [94ms]\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-token-keyword)">?</span><span style="color: var(--shiki-color-text)"> What’s the value of DOTENV_KEY</span><span style="color: var(--shiki-token-keyword)">?</span><span style="color: var(--shiki-color-text)"> dotenv://:key_1234@dotenv.org/vault/.env.vault</span><span style="color: var(--shiki-token-keyword)">?</span><span style="color: var(--shiki-color-text)">environment=production</span></span>\n<span><span style="color: var(--shiki-color-text)">✅  Added Environment Variable DOTENV_KEY to Project nodejs-vercel [94ms]</span></span>\n<span></span>'})}),"\n",(0,o.jsx)(s.p,{children:"Or use Vercel's UI."}),"\n",(0,o.jsx)(r.c,{url:"/assets/img/cloudinary/integrations-vercel-envs_y43bwi.gif",www:"vercel.com"}),"\n",(0,o.jsx)(s.h2,{id:"deploy",children:"Deploy"}),"\n",(0,o.jsx)(s.p,{children:"Commit those changes safely to code and deploy."}),"\n",(0,o.jsx)(s.pre,{language:"shell",code:"npx vercel@latest deploy --prod\n",children:(0,o.jsx)(s.code,{className:"language-shell",children:'<span><span style="color: var(--shiki-color-text)">npx vercel@latest deploy --prod</span></span>\n<span></span>'})}),"\n",(0,o.jsxs)(s.p,{children:["That's it! On deploy, your ",(0,o.jsx)(s.code,{children:".env.vault"})," file will be decrypted and its production secrets injected as environment variables – just in time."]}),"\n",(0,o.jsx)(r.c,{url:"/assets/img/docs/hello-production.png",www:"yourapp.vercel.app"}),"\n",(0,o.jsx)(t.default,{})]})}var h=!0;s.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.ah)(),n.components);return s?(0,o.jsx)(s,Object.assign({},n,{children:(0,o.jsx)(d,n)})):d(n)}},1490:function(n,s,e){"use strict";e.r(s),e.d(s,{__N_SSG:function(){return r}});var o=e(5893),a=e(1151);function t(n){let s=Object.assign({p:"p"},(0,a.ah)(),n.components),{Note:e}=s;return e||function(n,s){throw Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),(0,o.jsx)(e,{children:(0,o.jsx)(s.p,{children:"You succesfully used the new .env.vault standard to encrypt and deploy your secrets. This is much safer than scattering your secrets across multiple third-party platforms and tools. Whenever you need to add or change a secret, just rebuild your .env.vault file and redeploy."})})}var r=!0;s.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.ah)(),n.components);return s?(0,o.jsx)(s,Object.assign({},n,{children:(0,o.jsx)(t,n)})):t(n)}}},function(n){n.O(0,[5675,9774,2888,179],function(){return n(n.s=9159)}),_N_E=n.O()}]);