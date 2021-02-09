module.exports = {
  title: 'Thelia documentation',
  tagline: 'Your OpenSource E-commerce tool',
  url: 'https://thelia.net',
  baseUrl: '/thelia_doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  organizationName: 'real-goatoo', // Usually your GitHub org/user name.
  projectName: 'thelia_doc', // Usually your repo name.
  plugins: [
    'docusaurus-plugin-sass'
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        lightIcon: '☀'
      }
    },
    algolia: {
      apiKey: '4fc5100cca8dc75708da13ec6d76050a',
      indexName: 'thelia',
      contextualSearch: false,
      searchParameters: {
        'facetFilters': [['type:content', 'type:lvl1']]
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Thelia',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'modules', label: 'Modules', position: 'left'},
        {
          href: 'https://github.com/thelia/thelia',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/thelia',
            },
            {
              label: 'Forum',
              href: 'https://forum.thelia.net/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/theliaecommerce',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Thelia',
              href: 'https://github.com/thelia/thelia',
            },
            {
              label: 'Thelia project',
              href: 'https://github.com/thelia/thelia-project',
            },
            {
              label: 'Modules',
              href: 'https://github.com/thelia-modules/',
            },
          ],
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/real-goatoo/thelia_doc/edit/master/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')]
        },
      },
    ],
  ],
};
