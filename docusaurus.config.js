module.exports = {
  title: 'Fathym LowCodeUnit',
  tagline: 'Experience application hosting in minutes.',
  url: 'https://www.lowcodeunit.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lowcodeunit', // Usually your GitHub org/user name.
  projectName: 'public-web', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-M1YCMB8N02',
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true
    },
    navbar: {
      title: 'LowCodeUnit',
      logo: {
        alt: 'Fathym',
        src: 'img/Fathym-logo-aqua-01.png',
      },
      items: [
        {
         to: 'docs/',
         activeBasePath: 'docs',
         label: 'Docs',
         position: 'left',
        },
        // {
        //  to: 'api-docs/',
        //  activeBasePath: 'api-docs',
        //  label: 'API Docs',
        //  position: 'left',
        // },
        {
          href: 'https://www.lowcodeunit.com/dashboard',
          label: 'Sign In',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Next Steps',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Pricing',
              to: 'docs/',
            },
            {
              label: 'Support',
              to: 'docs/introduction/support',
            }            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/lowcodeunit',
            },
            //{
            //  label: 'Discord',
            //  href: 'https://discordapp.com/invite/lowcodeunit',
            //},
            {
              label: 'Twitter',
              href: 'https://twitter.com/lowcodeunit',
            },
          ],
        },
        {
          title: 'Powered by Fathym',
          items: [
            {
              label: 'Learn More',
              href: 'https://www.fathym.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fathym, Inc`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        'api-docs': {
          sidebarPath: require.resolve('./sidebars.js'),
          // The lowcodeunit website repo
          editUrl: 'https://github.com/lowcodeunit/public-web/edit/master/website/',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // The lowcodeunit website repo
          editUrl: 'https://github.com/lowcodeunit/public-web/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // The lowcodeunit website blog repo
          editUrl: 'https://github.com/lowcodeunit/public-web/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
