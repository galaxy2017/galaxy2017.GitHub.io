// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '胖螺',
  tagline: '胖螺的小屋',
  url: 'https://blog.luomoe.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img.up.cdn.nahida.cn/2020/03/cropped-logo2-1.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '胖螺', // Usually your GitHub org/user name.
  projectName: '胖螺的小屋', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  deploymentBranch: 'gh-pages',
  //plugins: ['@docusaurus/theme-live-codeblock'],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '胖螺',
        logo: {
          alt: '胖螺',
          src: 'https://img.up.cdn.nahida.cn/2020/03/cropped-logo2-1.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '笔记',
          },
          {
            to: '/blog/welcome', 
            label: '博客', 
            position: 'right'
          },
          {
            to: '/blog/links', 
            label: '友链', 
            position: 'right'
          },
        ],
      },
      docs: {
      sidebar: {
        hideable: true,
      },
    },
      footer: {
        style: 'dark',
        copyright: `Copyright © 胖螺 2020-${new Date().getFullYear()} . <br>
                    <a href="https://www.nahida.cn/" target="_blank" style="color:#fff">纳西妲 世界第一可爱</a> <br>
                  <span style="text-align: center">  本网站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank"><img src="https://img.up.cdn.nahida.cn/icon/upyun_logo5.png" width="53px" style="vertical-align: middle; display: inline-block;"></a>提供CDN加速/云存储服务</span>

        `
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
