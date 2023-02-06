import{_ as s,o as a,c as e,a as n}from"./app.2cc04486.js";const h=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"it/guide/configuration.md","lastUpdated":1675725950000}'),o={name:"it/guide/configuration.md"},t=n(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><p>Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let&#39;s first create a <code>.vitepress</code> directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The essential file for configuring a VitePress site is <code>.vitepress/config.js</code>, which should export a JavaScript object:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just playing around.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>In the above example, the site will have the title of <code>VitePress</code>, and <code>Just playing around.</code> as the description meta tag.</p><p>Learn everything about VitePress features at <a href="./theme-introduction">Theme: Introduction</a> to find how to configure specific features within this config file.</p><p>You may also find all configuration references at <a href="./../config/introduction">Configs</a>.</p>`,8),i=[t];function l(p,c,r,d,u,y){return a(),e("div",null,i)}const D=s(o,[["render",l]]);export{h as __pageData,D as default};
