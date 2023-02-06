import{_ as s,o as a,c as n,a as e}from"./app.2cc04486.js";const F=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/frontmatter.md","lastUpdated":1675725950000}'),t={name:"es/guide/frontmatter.md"},l=e(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a></h1><p>Any Markdown file that contains a YAML frontmatter block will be processed by <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><p>Between the triple-dashed lines, you can set <a href="./../config/frontmatter-configs">predefined variables</a>, or even create custom ones of your own. These variables can be used via the special <code>$frontmatter</code> variable.</p><p>Here&#39;s an example of how you could use it in your Markdown file:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">{{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Guide content</span></span>
<span class="line"></span></code></pre></div><h2 id="alternative-frontmatter-formats" tabindex="-1">Alternative Frontmatter Formats <a class="header-anchor" href="#alternative-frontmatter-formats" aria-hidden="true">#</a></h2><p>VitePress also supports JSON frontmatter syntax, starting and ending in curly braces:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Blogging Like a Hacker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editLink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div>`,9),o=[l];function p(r,c,i,d,y,D){return a(),n("div",null,o)}const m=s(t,[["render",p]]);export{F as __pageData,m as default};
