import{_ as e,o as t,c as s,a}from"./app.3189fbf6.js";const v=JSON.parse(`{"title":"Cos'è VitePress?","description":"","frontmatter":{},"headers":[],"relativePath":"opportunities/what-is-vitepress.md","lastUpdated":1675813750000}`),i={name:"opportunities/what-is-vitepress.md"},r=a('<h1 id="cos-e-vitepress" tabindex="-1">Cos&#39;è VitePress? <a class="header-anchor" href="#cos-e-vitepress" aria-hidden="true">#</a></h1><p>VitePress is <a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress</a>&#39; little brother, built on top of <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>VitePress is currently in <code>alpha</code> status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.</p></div><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-hidden="true">#</a></h2><p>We love VuePress v1, but being built on top of Webpack, the time it takes to spin up the dev server for a simple doc site with a few pages is just becoming unbearable. Even HMR updates can take up to seconds to reflect in the browser!</p><p>Fundamentally, this is because VuePress v1 is a Webpack app under the hood. Even with just two pages, it&#39;s a full on Webpack project (including all the theme source files) being compiled. It gets even worse when the project has many pages - every page must first be fully compiled before the server can even display anything!</p><p>Incidentally, Vite solves these problems really well: nearly instant server start, an on-demand compilation that only compiles the page being served, and lightning-fast HMR. Plus, there are a few additional design issues I have noted in VuePress v1 over time but never had the time to fix due to the amount of refactoring it would require.</p><p>Now, with Vite and Vue 3, it is time to rethink what a &quot;Vue-powered static site generator&quot; can really be.</p><h2 id="improvements-over-vuepress-v1" tabindex="-1">Improvements over VuePress v1 <a class="header-anchor" href="#improvements-over-vuepress-v1" aria-hidden="true">#</a></h2><p>There&#39;re couple of things that are improved from VuePress v1....</p><h3 id="it-uses-vue-3" tabindex="-1">It uses Vue 3 <a class="header-anchor" href="#it-uses-vue-3" aria-hidden="true">#</a></h3><p>Leverages Vue 3&#39;s improved template static analysis to stringify static content as much as possible. Static content is sent as string literals instead of JavaScript render function code - the JS payload is therefore much cheaper to parse, and hydration also becomes faster.</p><p>Note the optimization is applied while still allowing the user to freely mix Vue components inside markdown content - the compiler does the static/dynamic separation for you automatically and you never need to think about it.</p><h3 id="it-uses-vite-under-the-hood" tabindex="-1">It uses Vite under the hood <a class="header-anchor" href="#it-uses-vite-under-the-hood" aria-hidden="true">#</a></h3><ul><li>Faster dev server start</li><li>Faster hot updates</li><li>Faster build (uses Rollup internally)</li></ul><h3 id="lighter-page-weight" tabindex="-1">Lighter page weight <a class="header-anchor" href="#lighter-page-weight" aria-hidden="true">#</a></h3><p>Vue 3 tree-shaking + Rollup code splitting</p><ul><li>Does not ship metadata for every page on every request. This decouples page weight from total number of pages. Only the current page&#39;s metadata is sent. Client side navigation fetches the new page&#39;s component and metadata together.</li><li>Does not use vue-router because the need of VitePress is very simple and specific - a simple custom router (under 200 LOC) is used instead.</li></ul><h3 id="other-differences" tabindex="-1">Other differences <a class="header-anchor" href="#other-differences" aria-hidden="true">#</a></h3><p>VitePress is more opinionated and less configurable: VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots.</p><p>VitePress is future oriented: VitePress only targets browsers that support native ES module imports. It encourages the use of native JavaScript without transpilation, and CSS variables for theming.</p><h2 id="will-this-become-the-next-vuepress-in-the-future" tabindex="-1">Will this become the next vuepress in the future? <a class="header-anchor" href="#will-this-become-the-next-vuepress-in-the-future" aria-hidden="true">#</a></h2><p>We already have <a href="https://github.com/vuepress/vuepress-next" target="_blank" rel="noreferrer">vuepress-next</a>, which would be the next major version of VuePress. It also makes lots of improvements over VuePress v1, and also supports Vite now.</p><p>VitePress is not compatible with the current VuePress ecosystem (mostly themes and plugins). The overall idea is that VitePress will have a drastically more minimal theming API (preferring JavaScript APIs instead of file layout conventions) and likely no plugins (all customization is done in themes).</p><p>There is an <a href="https://github.com/vuejs/vitepress/discussions/548" target="_blank" rel="noreferrer">ongoing discussion</a> about this topic. If you&#39;re curious, please leave your thoughts!</p>',25),o=[r];function n(h,l,u,p,d,c){return t(),s("div",null,o)}const f=e(i,[["render",n]]);export{v as __pageData,f as default};
