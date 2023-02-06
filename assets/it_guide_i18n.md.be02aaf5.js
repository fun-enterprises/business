import{_ as s,o as n,c as a,a as l}from"./app.2cc04486.js";const A=JSON.parse('{"title":"Internationalization","description":"","frontmatter":{},"headers":[],"relativePath":"it/guide/i18n.md","lastUpdated":1675725950000}'),o={name:"it/guide/i18n.md"},e=l(`<h1 id="internationalization" tabindex="-1">Internationalization <a class="header-anchor" href="#internationalization" aria-hidden="true">#</a></h1><p>To use the built-in i18n features, one needs to create a directory structure as follows:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docs/</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ es/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ foo.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ fr/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ foo.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ foo.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Then in <code>docs/.vitepress/config.ts</code>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// shared properties and other top-level stuff...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">locales</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">fr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">French</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// optional, will be added  as \`lang\` attribute on \`html\` tag</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/fr/guide</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// default /fr/ -- shows on navbar translations menu, can be external</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// other locale specific properties...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>The following properties can be overridden for each locale (including root):</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LocaleSpecificConfig</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ThemeConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">lang</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dir</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">titleTemplate</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeadConfig</span><span style="color:#A6ACCD;">[] </span><span style="color:#676E95;font-style:italic;">// will be merged with existing head entries, duplicate meta tags are automatically removed</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ThemeConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// will be shallow merged, common stuff can be put in top-level themeConfig entry</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Refer <a href="https://github.com/vuejs/vitepress/blob/main/types/default-theme.d.ts" target="_blank" rel="noreferrer"><code>DefaultTheme.Config</code></a> interface for details on customizing the placeholder texts of the default theme. Don&#39;t override <code>themeConfig.algolia</code> or <code>themeConfig.carbonAds</code> at locale-level. Refer <a href="./theme-search#i18n">Algolia docs</a> for using multilingual search.</p><p><strong>Pro tip:</strong> Config file can be stored at <code>docs/.vitepress/config/index.ts</code> too. It might help you organize stuff by creating a configuration file per locale and then merge and export them from <code>index.ts</code>.</p><h2 id="separate-directory-for-each-locale" tabindex="-1">Separate directory for each locale <a class="header-anchor" href="#separate-directory-for-each-locale" aria-hidden="true">#</a></h2><p>The following is a perfectly fine structure:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docs/</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ en/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ foo.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ es/</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ foo.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ fr/</span></span>
<span class="line"><span style="color:#A6ACCD;">   ├─ foo.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>However, VitePress won&#39;t redirect <code>/</code> to <code>/en/</code> by default. You&#39;ll need to configure your server for that. For example, on Netlify, you can add a <code>docs/public/_redirects</code> file like this:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/*  /es/:splat  302  Language=es</span></span>
<span class="line"><span style="color:#A6ACCD;">/*  /fr/:splat  302  Language=fr</span></span>
<span class="line"><span style="color:#A6ACCD;">/*  /en/:splat  302</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Pro tip:</strong> If using the above approach, you can use <code>nf_lang</code> cookie to persist user&#39;s language choice. A very basic way to do this is register a watcher inside the <a href="./theme-introduction#using-a-custom-theme">setup</a> function of custom theme:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// docs/.vitepress/theme/index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">DefaultTheme</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lang</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useData</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">watchEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">inBrowser</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">nf_lang=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">lang</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="rtl-support-experimental" tabindex="-1">RTL Support (Experimental) <a class="header-anchor" href="#rtl-support-experimental" aria-hidden="true">#</a></h2><p>For RTL support, specify <code>dir: &#39;rtl&#39;</code> in config and use some RTLCSS PostCSS plugin like <a href="https://github.com/MohammadYounes/rtlcss" target="_blank" rel="noreferrer">https://github.com/MohammadYounes/rtlcss</a>, <a href="https://github.com/vkalinichev/postcss-rtl" target="_blank" rel="noreferrer">https://github.com/vkalinichev/postcss-rtl</a> or <a href="https://github.com/elchininet/postcss-rtlcss" target="_blank" rel="noreferrer">https://github.com/elchininet/postcss-rtlcss</a>. You&#39;ll need to configure your PostCSS plugin to use <code>:where([dir=&quot;ltr&quot;])</code> and <code>:where([dir=&quot;rtl&quot;])</code> as prefixes to prevent CSS specificity issues.</p>`,18),p=[e];function t(c,r,i,y,D,F){return n(),a("div",null,p)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
