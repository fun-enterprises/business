import{_ as s,o as a,c as n,a as e}from"./app.2cc04486.js";const h=JSON.parse('{"title":"Routing","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/routing.md","lastUpdated":1675725950000}'),l={name:"es/guide/routing.md"},p=e(`<h1 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-hidden="true">#</a></h1><p>VitePress is built with file system based routing, which means the directory structure of the source file corresponds to the final URL. You may customize the mapping of the directory structure and URL too. Read through this page to learn everything about the VitePress routing system.</p><h2 id="basic-routing" tabindex="-1">Basic Routing <a class="header-anchor" href="#basic-routing" aria-hidden="true">#</a></h2><p>By default, VitePress assumes your page files are stored in project root. Here you may add markdown files with the name being the URL path. For example, when you have following directory structure:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ guide</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ getting-started.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ prologue.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Then you can access the pages by the below URL.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">index.md           -&gt; /</span></span>
<span class="line"><span style="color:#A6ACCD;">prologue.md        -&gt; /prologue.html</span></span>
<span class="line"><span style="color:#A6ACCD;">guide/index.md     -&gt; /guide/</span></span>
<span class="line"><span style="color:#A6ACCD;">guide/getting-started.md -&gt; /guide/getting-started.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>As you can see, the directory structure corresponds to the final URL, as same as hosting plain HTML from a typical web server.</p><h2 id="changing-the-root-directory" tabindex="-1">Changing the Root Directory <a class="header-anchor" href="#changing-the-root-directory" aria-hidden="true">#</a></h2><p>To change the root directory for your page files, you may pass the directory name to the <code>vitepress</code> command. For example, if you want to store your page files under <code>docs</code> directory, then you should run <code>vitepress dev docs</code> command.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ getting-started.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vitepress dev docs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>This is going to map the URL as follows.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docs/index.md           -&gt; /</span></span>
<span class="line"><span style="color:#A6ACCD;">docs/getting-started.md -&gt; /getting-started.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>You may also customize the root directory in config file via <a href="/business/config/app-configs#srcdir"><code>srcDir</code></a> option too. Running <code>vitepress dev</code> with the following setting acts same as running <code>vitepress dev docs</code> command.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">srcDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./docs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="linking-between-pages" tabindex="-1">Linking Between Pages <a class="header-anchor" href="#linking-between-pages" aria-hidden="true">#</a></h2><p>When adding links in pages, omit extension from the path and use either absolute path from the root, or relative path from the page. VitePress will handle the extension according to your configuration setup.</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Do --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Getting Started</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">/guide/getting-started</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Getting Started</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">../guide/getting-started</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Don&#39;t --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Getting Started</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">/guide/getting-started.md</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Getting Started</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">/guide/getting-started.html</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>Learn more about page links and links to assets, such as link to images, at <a href="./asset-handling">Asset Handling</a>.</p><h2 id="generate-clean-url" tabindex="-1">Generate Clean URL <a class="header-anchor" href="#generate-clean-url" aria-hidden="true">#</a></h2><p>A &quot;Clean URL&quot; is commonly known as URL without <code>.html</code> extension, for example, <code>example.com/path</code> instead of <code>example.com/path.html</code>.</p><p>By default, VitePress generates the final static page files by adding <code>.html</code> extension to each file. If you would like to have clean URL, you may structure your directory by only using <code>index.html</code> file.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ getting-started</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ installation</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>However, you may also generate a clean URL by setting up <a href="/business/config/app-configs#cleanurls"><code>cleanUrls</code></a> option.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cleanUrls</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="customize-the-mappings" tabindex="-1">Customize the Mappings <a class="header-anchor" href="#customize-the-mappings" aria-hidden="true">#</a></h2><p>You may customize the mapping between directory structure and URL. It&#39;s useful when you have complex document structure. For example, let&#39;s say you have several packages and would like to place documentations along with the source files like this.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ packages</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ pkg-a</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      ├─ pkg-a-code.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │      └─ pkg-a-code.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ pkg-b</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│         ├─ pkg-b-code.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│         └─ pkg-b-code.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>And you want the VitePress pages to be generated as follows.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">packages/pkg-a/src/pkg-a-code.md -&gt; /pkg-a/pkg-a-code.md</span></span>
<span class="line"><span style="color:#A6ACCD;">packages/pkg-b/src/pkg-b-code.md -&gt; /pkg-b/pkg-b-code.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>You may configure the mapping via <a href="/business/config/app-configs#rewrites"><code>rewrites</code></a> option like this.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rewrites</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">packages/pkg-a/src/pkg-a-code.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pkg-a/pkg-a-code</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">packages/pkg-b/src/pkg-b-code.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pkg-b/pkg-b-code</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>rewrites</code> option can also have dynamic route parameters. In this example, we have fixed path <code>packages</code> and <code>src</code> which stays the same on all pages, and it might be verbose to have to list all pages in your config as you add pages. You may configure the above mapping as below and get the same result.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rewrites</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">packages/:pkg/src/:page</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:pkg/:page</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Route parameters are prefixed by <code>:</code> (e.g. <code>:pkg</code>). The name of the parameter is just a placeholder and can be anything.</p><p>In addition, you may add <code>*</code> at the end of the parameter to map all sub directories from there on.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">rewrites</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">packages/:pkg/src/:page*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:pkg/:page*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The above will create mapping as below.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">packages/pkg-a/src/pkg-a-code.md  -&gt; /pkg-a/pkg-a-code</span></span>
<span class="line"><span style="color:#A6ACCD;">packages/pkg-b/src/folder/file.md -&gt; /pkg-b/folder/file</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">You need server restart on page addition</p><p>At the moment, VitePress doesn&#39;t detect page additions to the mapped directory. You need to restart your server when adding or removing files from the directory during the dev mode. Updating the already existing files gets updated as usual.</p></div><h3 id="relative-link-handling-in-page" tabindex="-1">Relative Link Handling in Page <a class="header-anchor" href="#relative-link-handling-in-page" aria-hidden="true">#</a></h3><p>Note that when enabling rewrites, <strong>relative links in the markdown are resolved relative to the final path</strong>. For example, in order to create relative link from <code>packages/pkg-a/src/pkg-a-code.md</code> to <code>packages/pkg-b/src/pkg-b-code.md</code>, you should define link as below.</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Link to PKG B</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">../pkg-b/pkg-b-code</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,44),o=[p];function t(c,i,r,d,y,g){return a(),n("div",null,o)}const C=s(l,[["render",t]]);export{h as __pageData,C as default};
