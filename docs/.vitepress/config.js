import { createRequire } from 'module'
import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

let options = {
  // encode: function (str) {
  //   return segment.doSegment(str, {simple: true});
  // },
  // tokenize: "forward",
  // previewLength: 62,
  // buttonLabel: "Search",
  // placeholder: "Search docs",
};

export default {

    plugins: [SearchPlugin(options)],
    // server: {
    //   fs: {
    //     // Allow serving files from one level up to the project root
    //     allow: ["../.."],
    //   },
    // },
    
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
              '/opportunities/': sidebarGuide(''),
              // '/config/': sidebarConfig(''),

              '/structure/': sidebarStructure(''),
              '/principles/': sidebarPrinciples(''),
              '/team/': sidebarTeam(''),
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
              '/es/opportunities/': sidebarGuide('es'),
              // '/es/config/': sidebarConfig('es'),

              '/structure/': sidebarStructure('es'),
              '/principles/': sidebarPrinciples('es'),
              '/team/': sidebarTeam('es'),
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
                  '/it/opportunities/': sidebarGuide('it'),
                  // '/it/config/': sidebarConfig('it'),

                  '/structure/': sidebarStructure('it'),
                  '/principles/': sidebarPrinciples('it'),
                  '/team/': sidebarTeam('it'),
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
    
}

function nav(lang) {
    if (lang=='it'){
        return [
            { text: 'Opportunities', link: '/it/opportunities/getting-started', activeMatch: '/it/opportunities/' },
            // { text: 'Configs', link: '/it/config/introduction', activeMatch: '/it/config/' },
            { text: 'Structure', link: '/it/structure/introduction', activeMatch: '/it/structure/' },
            { text: 'Principles', link: '/it/principles/introduction', activeMatch: '/it/principles/' },
            { text: 'Team', link: '/it/team/introduction', activeMatch: '/it/team/' },
            // {
            //   text: pkg.version,
            //   items: [
            //     {
            //       text: 'Changelog',
            //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
            //     },
            //     {
            //       text: 'Contributing',
            //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
            //     }
            //   ]
            // }
          ]
    }
    if (lang=='es'){
        return [
            { text: 'Opportunities', link: '/es/opportunities/getting-started', activeMatch: '/es/opportunities/' },
            // { text: 'Configs', link: '/es/config/introduction', activeMatch: '/es/config/' },

            { text: 'Structure', link: '/es/structure/introduction', activeMatch: '/es/structure/' },
            { text: 'Principles', link: '/es/principles/introduction', activeMatch: '/es/principles/' },
            { text: 'Team', link: '/es/team/introduction', activeMatch: '/es/team/' },

            // {
            //   text: pkg.version,
            //   items: [
            //     {
            //       text: 'Changelog',
            //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
            //     },
            //     {
            //       text: 'Contributing',
            //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
            //     }
            //   ]
            // }
          ]
    }
    if (lang==''){
      return [
          { text: 'Opportunities', link: '/opportunities/getting-started', activeMatch: '/opportunities/' },
          // { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },


          { text: 'Structure', link: '/structure/introduction', activeMatch: '/structure/' },
          { text: 'Principles', link: '/principles/introduction', activeMatch: '/principles/' },
          { text: 'Team', link: '/team/introduction', activeMatch: '/team/' },


          // {
          //   text: pkg.version,
          //   items: [
          //     {
          //       text: 'Changelog',
          //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
          //     },
          //     {
          //       text: 'Contributing',
          //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
          //     }
          //   ]
          // }
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
              { text: 'Getting Started', link: '/it/opportunities/getting-started' },
            ]
          },
          {
              text: 'Real State',
              collapsed: true,
              items: [
                { text: 'Airbnb Rental', link: '/it/opportunities/airbnb-rental' },
                { text: 'House, Flat Rental', link: '/it/opportunities/house-flat-rental' },
                { text: 'Commercial Rental', link: '/it/opportunities/commercial-rental' },
                // { text: 'What is VitePress?', link: '/it/opportunities/what-is-vitepress' },
                // { text: 'Getting Started', link: '/it/opportunities/getting-started' },
                // { text: 'Configuration', link: '/it/opportunities/configuration' },
                // { text: 'Routing', link: '/it/opportunities/routing' },
                // { text: 'Deploying', link: '/it/opportunities/deploying' },
                // { text: 'Internationalization', link: '/it/opportunities/i18n' }
              ]
            },
            {
              text: 'Retail & eCommerce',
              collapsed: true,
              items: [
                { text: 'Breverages', link: '/it/opportunities/breverages' },
                { text: 'Food', link: '/it/opportunities/food' },
                { text: 'Health, Wellness, Fitness', link: '/it/opportunities/health-wellness-and-fitness' },
                { text: 'Clothes', link: '/it/opportunities/clothes' },
                { text: 'Art', link: '/it/opportunities/art' },
                { text: 'Music Instruments', link: '/it/opportunities/music-instruments' },
                { text: 'Machines & Gadgets`', link: '/it/opportunities/machines' },
                { text: 'Games', link: '/it/opportunities/games' },
                { text: 'Outdoor Recreation Tools', link: '/it/opportunities/outdoor-recreation-tools' },
                // { text: 'Weapons', link: '/it/opportunities/weapons' },
                { text: 'Jewelry', link: '/it/opportunities/jewelry' },
                { text: 'Education', link: '/it/opportunities/education' }
              ]
            },
            {
              text: 'IT Services & Products',
              collapsed: true,
              items: [
                { text: 'Software As A Service', link: '/it/opportunities/software-as-a-service.md' },
                { text: 'Video Games', link: '/it/opportunities/video-games.md' },
                { text: 'Dating Apps', link: '/it/opportunities/dating-apps.md' },
                { text: 'Health Care Apps', link: '/it/opportunities/health-care-apps.md' },
                { text: 'Infographics', link: '/it/opportunities/infographics.md' }
              ]
            },
            {
              text: 'Multimedia Production',
              collapsed: true,
              items: [
                { text: 'Art', link: '/it/opportunities/art.md'},
                { text: 'Education', link: '/it/opportunities/education.md'},
                { text: 'Entertainment', link: '/it/opportunities/entertainment.md'},
                { text: 'News & Journalism', link: '/it/opportunities/news-and-journalism.md'},
              ]
            },
            {
              text: 'Event Organization',
              collapsed: true,
              items: [
                {
                  text: 'Live Music Festival',
                  link: '/it/opportunities/live-music-festival'
                }
              ]
            }
          ]
    }
    if (lang=='es'){
        return [
            {
              text: 'Introduction',
              collapsed: true,
              items: [
                { text: 'Getting Started', link: '/es/opportunities/getting-started' },
              ]
            },
            {
              text: 'Real State',
              collapsed: true,
              items: [
                { text: 'Airbnb Rental', link: '/es/opportunities/airbnb-rental' },
                { text: 'House, Flat Rental', link: '/es/opportunities/house-flat-rental' },
                { text: 'Commercial Rental', link: '/es/opportunities/commercial-rental' },
              ]
            },
            {
              text: 'Retail & eCommerce',
              collapsed: true,
              items: [
                { text: 'Breverages', link: '/es/opportunities/breverages' },
                { text: 'Food', link: '/es/opportunities/food' },
                { text: 'Health, Wellness, Fitness', link: '/es/opportunities/health-wellness-and-fitness' },
                { text: 'Clothes', link: '/es/opportunities/clothes' },
                { text: 'Art', link: '/es/opportunities/art' },
                { text: 'Music Instruments', link: '/es/opportunities/music-instruments' },
                { text: 'Machines & Gadgets', link: '/es/opportunities/machines' },
                { text: 'Games', link: '/es/opportunities/games' },
                { text: 'Outdoor Recreation Tools', link: '/es/opportunities/outdoor-recreation-tools' },
                // { text: 'Weapons', link: '/es/opportunities/weapons' },
                { text: 'Jewelry', link: '/es/opportunities/jewelry' },
                { text: 'Education', link: '/es/opportunities/education' }
              ]
            },
            {
              text: 'IT Services & Products',
              collapsed: true,
              items: [
                { text: 'Software As A Service', link: '/es/opportunities/software-as-a-service.md' },
                { text: 'Video Games', link: '/es/opportunities/video-games.md' },
                { text: 'Dating Apps', link: '/es/opportunities/dating-apps.md' },
                { text: 'Health Care Apps', link: '/es/opportunities/health-care-apps.md' },
                { text: 'Infographics', link: '/es/opportunities/infographics.md' }
              ]
            },
            {
              text: 'Multimedia Production',
              collapsed: true,
              items: [
                { text: 'Art', link: '/es/opportunities/art.md'},
                { text: 'Education', link: '/es/opportunities/education.md'},
                { text: 'Entertainment', link: '/es/opportunities/entertainment.md'},
                { text: 'News & Journalism', link: '/es/opportunities/news-and-journalism.md'},
              ]
            },
            {
              text: 'Event Organization',
              collapsed: true,
              items: [
                {
                  text: 'Live Music Festival',
                  link: '/es/opportunities/live-music-festival'
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
                { text: 'Getting Started', link: '/opportunities/getting-started' },
              ]
            },
            {
              text: 'Real State',
              collapsed: true,
              items: [
                { text: 'Airbnb Rental', link: '/opportunities/airbnb-rental' },
                { text: 'House, Flat Rental', link: '/opportunities/house-flat-rental' },
                { text: 'Commercial Rental', link: '/opportunities/commercial-rental' },
                // { text: 'Configuration', link: '/opportunities/configuration' },
                // { text: 'Routing', link: '/opportunities/routing' },
                // { text: 'Deploying', link: '/opportunities/deploying' },
                // { text: 'Internationalization', link: '/opportunities/i18n' }
              ]
            },
            {
              text: 'Retail & eCommerce',
              collapsed: true,
              items: [
                { text: 'Breverages', link: '/opportunities/breverages' },
                { text: 'Food', link: '/opportunities/food' },
                { text: 'Health, Wellness, Fitness', link: '/opportunities/health-wellness-and-fitness' },
                { text: 'Clothes', link: '/opportunities/clothes' },
                { text: 'Art', link: '/opportunities/art' },
                { text: 'Music Instruments', link: '/opportunities/music-instruments' },
                { text: 'Machines & Gadgets', link: '/opportunities/machines' },
                { text: 'Games', link: '/opportunities/games' },
                { text: 'Outdoor Recreation Tools', link: '/opportunities/outdoor-recreation-tools' },
                // { text: 'Weapons', link: '/opportunities/weapons' },
                { text: 'Jewelry', link: '/opportunities/jewelry' },
                { text: 'Education', link: '/opportunities/education' }
              ]
            },
            {
              text: 'IT Services & Products',
              collapsed: true,
              items: [
                { text: 'Software As A Service', link: '/opportunities/software-as-a-service.md' },
                { text: 'Video Games', link: '/opportunities/video-games.md' },
                { text: 'Dating Apps', link: '/opportunities/dating-apps.md' },
                { text: 'Health Care Apps', link: '/opportunities/health-care-apps.md' },
                { text: 'Infographics', link: '/opportunities/infographics.md' }

                // { text: 'Last Updated', link: '/opportunities/theme-last-updated' },
                // { text: 'Layout', link: '/opportunities/theme-layout' },
                // { text: 'Home Page', link: '/opportunities/theme-home-page' },
                // { text: 'Team Page', link: '/opportunities/theme-team-page' },
                // { text: 'Badge', link: '/opportunities/theme-badge' },
                // { text: 'Footer', link: '/opportunities/theme-footer' },
                // { text: 'Search', link: '/opportunities/theme-search' },
                // { text: 'Carbon Ads', link: '/opportunities/theme-carbon-ads' }
              ]
            },
            {
              text: 'Multimedia Production',
              collapsed: true,
              items: [
                { text: 'Art', link: '/opportunities/art.md'},
                { text: 'Education', link: '/opportunities/education.md'},
                { text: 'Entertainment', link: '/opportunities/entertainment.md'},
                { text: 'News & Journalism', link: '/opportunities/news-and-journalism.md'},
              ]
            },
            {
              text: 'Event Organization',
              collapsed: true,
              items: [
                {
                  text: 'Live Music Festival',
                  link: '/opportunities/live-music-festival'
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

function sidebarStructure(lang){
    if (lang=='it'){
      return [
          {
            text: 'Business Structure',
            items: [
              { text: 'Introduction', link: '/it/structure/introduction' },
              // { text: 'App Configs', link: '/it/structure/app-configs' },
              // { text: 'Theme Configs', link: '/it/structure/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/it/structure/frontmatter-configs' }
            ]
          }
        ]
  }
  if (lang=='es'){
      return [
          {
            text: 'Business Structure',
            items: [
              { text: 'Introduction', link: '/es/structure/introduction' },
              // { text: 'App Configs', link: '/es/structure/app-configs' },
              // { text: 'Theme Configs', link: '/es/structure/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/es/structure/frontmatter-configs' }
            ]
          }
        ]
  }
  if (lang==''){
      return [
          {
            text: 'Business Structure',
            items: [
              { text: 'Introduction', link: '/structure/introduction' },
              // { text: 'App Configs', link: '/structure/app-configs' },
              // { text: 'Theme Configs', link: '/structure/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/structure/frontmatter-configs' }
            ]
          }
        ]
  }
}
function sidebarPrinciples(lang){
    if (lang=='it'){
      return [
          {
            text: 'Guiding Principles',
            items: [
              { text: 'Introduction', link: '/it/principles/introduction' },
              // { text: 'App Configs', link: '/it/principles/app-configs' },
              // { text: 'Theme Configs', link: '/it/principles/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/it/principles/frontmatter-configs' }
            ]
          }
        ]
  }
  if (lang=='es'){
      return [
          {
            text: 'Guiding Principles',
            items: [
              { text: 'Introduction', link: '/es/principles/introduction' },
              // { text: 'App Configs', link: '/es/principles/app-configs' },
              // { text: 'Theme Configs', link: '/es/principles/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/es/principles/frontmatter-configs' }
            ]
          }
        ]
  }
  if (lang==''){
      return [
          {
            text: 'Guiding Principles',
            items: [
              { text: 'Introduction', link: '/principles/introduction' },
              // { text: 'App Configs', link: '/principles/app-configs' },
              // { text: 'Theme Configs', link: '/principles/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/principles/frontmatter-configs' }
            ]
          }
        ]
  }
}
function sidebarTeam(lang){
    if (lang=='it'){
      return [
          {
            text: 'Team',
            items: [
              { text: 'Introduction', link: '/it/team/introduction' },
              // { text: 'App Configs', link: '/it/team/app-configs' },
              // { text: 'Theme Configs', link: '/it/team/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/it/team/frontmatter-configs' }
            ]
          }
        ]
  }
  if (lang=='es'){
      return [
          {
            text: 'Equipo',
            items: [
              { text: 'Introduction', link: '/es/team/introduction' },
              // { text: 'App Configs', link: '/es/team/app-configs' },
              // { text: 'Theme Configs', link: '/es/team/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/es/team/frontmatter-configs' }
            ]
          }
        ]
  }
  if (lang==''){
      return [
          {
            text: 'Team',
            items: [
              { text: 'Introduction', link: '/team/introduction' },
              // { text: 'App Configs', link: '/team/app-configs' },
              // { text: 'Theme Configs', link: '/team/theme-configs' },
              // { text: 'Frontmatter Configs', link: '/team/frontmatter-configs' }
            ]
          }
        ]
  }
}
  // ...flexSearchIndexOptions,
  // lang: 'zh',
  // encode: str => str.replace(/[\x00-\x7F]/g, "").split(""),
  // tokenize: "full",

  // encode: false,
  // tokenize: "full",