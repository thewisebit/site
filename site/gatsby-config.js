module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'WiseBit',
    name: 'WiseBit',
    description: 'My site description...',
    address: 'Melbourne, Australia',
    email: 'info@wisebit.com',
    phone: '',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/thewisebit'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'About Us',
        slug: '/about-us'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'About Us',
            slug: '/about'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [

        ]
      }
    ]
  }
}
