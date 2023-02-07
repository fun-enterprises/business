import { createRequire } from 'module'
import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

let pluginOptions = {
  // ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};

export default {
    title: 'Fun Enterprises',
    description: 'A live business catalog',
    base: '/business',
    lastUpdated: true,
    cleanUrls: true,
    head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
    markdown: {
      headers: {
        level: [0, 0]
      }
    },
    lang: 'en-US',
    ignoreDeadLinks: true,
    i18nRouting: true,
    locales: {
        root: {
          label: 'English',
          lang: 'en',
          // link: '/en/',
          themeConfig: {
            nav: nav(''),
            sidebar: {
              '/guide/': sidebarGuide(''),
              '/config/': sidebarConfig('')
            },
            editLink: {
              pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
              text: 'Edit this page on GitHub'
            },
            socialLinks: [
              { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
            ],
            footer: {
              message: 'Released under the MIT License.',
              copyright: 'Copyright © 2019-present Evan You'
            },
            // algolia: {
            //   appId: '8J64VVRP8K',
            //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            //   indexName: 'vitepress'
            // },
            carbonAds: {
              code: 'CEBDT27Y',
              placement: 'vuejsorg'
            },
            // plugins: [SearchPlugin(pluginOptions)],
          },
        },
        es: {
          label: 'Español',
          lang: 'es', // optional, will be added  as `lang` attribute on `html` tag
          link: '/es/', // default /es/ -- shows on navbar translations menu, can be external
          // other locale specific properties...
          themeConfig: {
            nav: nav('es'),
            sidebar: {
              '/es/guide/': sidebarGuide('es'),
              '/es/config/': sidebarConfig('es')
            },
            editLink: {
              pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
              text: 'Edit this page on GitHub'
            },
            socialLinks: [
              { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
            ],
            footer: {
              message: 'Released under the MIT License.',
              copyright: 'Copyright © 2019-present Evan You'
            },
            // algolia: {
            //   appId: '8J64VVRP8K',
            //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            //   indexName: 'vitepress'
            // },
            // plugins: [SearchPlugin(pluginOptions)],
            carbonAds: {
              code: 'CEBDT27Y',
              placement: 'vuejsorg'
            }
          },
        },
        it: {
            label: 'Italiano',
            lang: 'it', // optional, will be added  as `lang` attribute on `html` tag
            link: '/it/', // default /es/ -- shows on navbar translations menu, can be external
            // other locale specific properties...
            themeConfig: {
                nav: nav('it'),
                sidebar: {
                  '/it/guide/': sidebarGuide('it'),
                  '/it/config/': sidebarConfig('it')
                },
                editLink: {
                  pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
                  text: 'Edit this page on GitHub'
                },
                socialLinks: [
                  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
                ],
                footer: {
                  message: 'Released under the MIT License.',
                  copyright: 'Copyright © 2019-present Evan You'
                },
                // algolia: {
                //   appId: '8J64VVRP8K',
                //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
                //   indexName: 'vitepress'
                // },
                // plugins: [SearchPlugin(pluginOptions)],
                carbonAds: {
                  code: 'CEBDT27Y',
                  placement: 'vuejsorg'
                }
              },
        }
    }
    ,
    plugins: [SearchPlugin(pluginOptions)],
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ["../.."],
      },
    },
}

function nav(lang) {
    if (lang=='it'){
        return [
            { text: 'Guide', link: '/it/guide/what-is-vitepress', activeMatch: '/it/guide/' },
            { text: 'Configs', link: '/it/config/introduction', activeMatch: '/it/config/' },
            {
              text: pkg.version,
              items: [
                {
                  text: 'Changelog',
                  link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                  text: 'Contributing',
                  link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                }
              ]
            }
          ]
    }
    if (lang=='es'){
        return [
            { text: 'Guide', link: '/es/guide/what-is-vitepress', activeMatch: '/es/guide/' },
            { text: 'Configs', link: '/es/config/introduction', activeMatch: '/es/config/' },
            {
              text: pkg.version,
              items: [
                {
                  text: 'Changelog',
                  link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                  text: 'Contributing',
                  link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                }
              ]
            }
          ]
    }
    // if (lang=='en'){
    //     return [
    //         { text: 'Guide', link: '/en/guide/what-is-vitepress', activeMatch: '/en/guide/' },
    //         { text: 'Configs', link: '/en/config/introduction', activeMatch: '/en/config/' },
    //         {
    //           text: pkg.version,
    //           items: [
    //             {
    //               text: 'Changelog',
    //               link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //             },
    //             {
    //               text: 'Contributing',
    //               link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //             }
    //           ]
    //         }
    //       ]
    // }
    if (lang==''){
      return [
          { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
          { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
          {
            text: pkg.version,
            items: [
              {
                text: 'Changelog',
                link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
              },
              {
                text: 'Contributing',
                link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
              }
            ]
          }
        ]
  }

  }
  
function sidebarGuide(lang) {
    if (lang=='it'){
        return [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                { text: 'What is VitePress?', link: '/it/guide/what-is-vitepress' },
                { text: 'Getting Started', link: '/it/guide/getting-started' },
                { text: 'Configuration', link: '/it/guide/configuration' },
                { text: 'Routing', link: '/it/guide/routing' },
                { text: 'Deploying', link: '/it/guide/deploying' },
                { text: 'Internationalization', link: '/it/guide/i18n' }
              ]
            },
            {
              text: 'Writing',
              collapsed: false,
              items: [
                { text: 'Markdown', link: '/it/guide/markdown' },
                { text: 'Asset Handling', link: '/it/guide/asset-handling' },
                { text: 'Frontmatter', link: '/it/guide/frontmatter' },
                { text: 'Using Vue in Markdown', link: '/it/guide/using-vue' },
                { text: 'API Reference', link: '/it/guide/api' }
              ]
            },
            {
              text: 'Theme',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/it/guide/theme-introduction' },
                { text: 'Nav', link: '/it/guide/theme-nav' },
                { text: 'Sidebar', link: '/it/guide/theme-sidebar' },
                { text: 'Prev Next Link', link: '/it/guide/theme-prev-next-link' },
                { text: 'Edit Link', link: '/it/guide/theme-edit-link' },
                { text: 'Last Updated', link: '/it/guide/theme-last-updated' },
                { text: 'Layout', link: '/it/guide/theme-layout' },
                { text: 'Home Page', link: '/it/guide/theme-home-page' },
                { text: 'Team Page', link: '/it/guide/theme-team-page' },
                { text: 'Badge', link: '/it/guide/theme-badge' },
                { text: 'Footer', link: '/it/guide/theme-footer' },
                { text: 'Search', link: '/it/guide/theme-search' },
                { text: 'Carbon Ads', link: '/it/guide/theme-carbon-ads' }
              ]
            },
            {
              text: 'Migrations',
              collapsed: false,
              items: [
                {
                  text: 'Migration from VuePress',
                  link: '/it/guide/migration-from-vuepress'
                },
                {
                  text: 'Migration from VitePress 0.x',
                  link: '/it/guide/migration-from-vitepress-0'
                }
              ]
            }
          ]
    }
    if (lang=='es'){
        return [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                { text: 'What is VitePress?', link: '/es/guide/what-is-vitepress' },
                { text: 'Getting Started', link: '/es/guide/getting-started' },
                { text: 'Configuration', link: '/es/guide/configuration' },
                { text: 'Routing', link: '/es/guide/routing' },
                { text: 'Deploying', link: '/es/guide/deploying' },
                { text: 'Internationalization', link: '/es/guide/i18n' }
              ]
            },
            {
              text: 'Writing',
              collapsed: false,
              items: [
                { text: 'Markdown', link: '/es/guide/markdown' },
                { text: 'Asset Handling', link: '/es/guide/asset-handling' },
                { text: 'Frontmatter', link: '/es/guide/frontmatter' },
                { text: 'Using Vue in Markdown', link: '/es/guide/using-vue' },
                { text: 'API Reference', link: '/es/guide/api' }
              ]
            },
            {
              text: 'Theme',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/es/guide/theme-introduction' },
                { text: 'Nav', link: '/es/guide/theme-nav' },
                { text: 'Sidebar', link: '/es/guide/theme-sidebar' },
                { text: 'Prev Next Link', link: '/es/guide/theme-prev-next-link' },
                { text: 'Edit Link', link: '/es/guide/theme-edit-link' },
                { text: 'Last Updated', link: '/es/guide/theme-last-updated' },
                { text: 'Layout', link: '/es/guide/theme-layout' },
                { text: 'Home Page', link: '/es/guide/theme-home-page' },
                { text: 'Team Page', link: '/es/guide/theme-team-page' },
                { text: 'Badge', link: '/es/guide/theme-badge' },
                { text: 'Footer', link: '/es/guide/theme-footer' },
                { text: 'Search', link: '/es/guide/theme-search' },
                { text: 'Carbon Ads', link: '/es/guide/theme-carbon-ads' }
              ]
            },
            {
              text: 'Migrations',
              collapsed: false,
              items: [
                {
                  text: 'Migration from VuePress',
                  link: '/es/guide/migration-from-vuepress'
                },
                {
                  text: 'Migration from VitePress 0.x',
                  link: '/es/guide/migration-from-vitepress-0'
                }
              ]
            }
          ]
        
    }
    if (lang==''){
        return [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Configuration', link: '/guide/configuration' },
                { text: 'Routing', link: '/guide/routing' },
                { text: 'Deploying', link: '/guide/deploying' },
                { text: 'Internationalization', link: '/guide/i18n' }
              ]
            },
            {
              text: 'Writing',
              collapsed: false,
              items: [
                { text: 'Markdown', link: '/guide/markdown' },
                { text: 'Asset Handling', link: '/guide/asset-handling' },
                { text: 'Frontmatter', link: '/guide/frontmatter' },
                { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
                { text: 'API Reference', link: '/guide/api' }
              ]
            },
            {
              text: 'Theme',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/guide/theme-introduction' },
                { text: 'Nav', link: '/guide/theme-nav' },
                { text: 'Sidebar', link: '/guide/theme-sidebar' },
                { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
                { text: 'Edit Link', link: '/guide/theme-edit-link' },
                { text: 'Last Updated', link: '/guide/theme-last-updated' },
                { text: 'Layout', link: '/guide/theme-layout' },
                { text: 'Home Page', link: '/guide/theme-home-page' },
                { text: 'Team Page', link: '/guide/theme-team-page' },
                { text: 'Badge', link: '/guide/theme-badge' },
                { text: 'Footer', link: '/guide/theme-footer' },
                { text: 'Search', link: '/guide/theme-search' },
                { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
              ]
            },
            {
              text: 'Migrations',
              collapsed: false,
              items: [
                {
                  text: 'Migration from VuePress',
                  link: '/guide/migration-from-vuepress'
                },
                {
                  text: 'Migration from VitePress 0.x',
                  link: '/guide/migration-from-vitepress-0'
                }
              ]
            }
          ]
        
    }
}
  
function sidebarConfig(lang) {
    if (lang=='it'){
        return [
            {
              text: 'Config',
              items: [
                { text: 'Introduction', link: '/it/config/introduction' },
                { text: 'App Configs', link: '/it/config/app-configs' },
                { text: 'Theme Configs', link: '/it/config/theme-configs' },
                { text: 'Frontmatter Configs', link: '/it/config/frontmatter-configs' }
              ]
            }
          ]
    }
    if (lang=='es'){
        return [
            {
              text: 'Config',
              items: [
                { text: 'Introduction', link: '/es/config/introduction' },
                { text: 'App Configs', link: '/es/config/app-configs' },
                { text: 'Theme Configs', link: '/es/config/theme-configs' },
                { text: 'Frontmatter Configs', link: '/es/config/frontmatter-configs' }
              ]
            }
          ]
    }
    if (lang==''){
        return [
            {
              text: 'Config',
              items: [
                { text: 'Introduction', link: '/config/introduction' },
                { text: 'App Configs', link: '/config/app-configs' },
                { text: 'Theme Configs', link: '/config/theme-configs' },
                { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
              ]
            }
          ]
    }

}
