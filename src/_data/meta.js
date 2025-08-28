export const url = process.env.URL || 'http://localhost:8080';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Kyles Tech Korner';
export const siteDescription = 'My life and journey through this world of technology. A blog about tech, cybersecurity, and everything in between.';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Kyle Reddoch', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/assets/images/logo/logo.png', // path to the author's avatar. In this case just using a favicon.
  email: 'kyle@kylereddoch.me', // i.e. hola@lenesaile.com - email of the author
  website: 'https://www.kylereddoch.me', // i.e. https.://www.lenesaile.com - the personal site of the author
  fediverse: '@beardedtechguy@infosec.exchange' // used for highlighting journalism on the fediverse. Can be Mastodon, Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, etc. https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/
};
export const creator = {
  name: 'Kyle Reddoch', // i.e. Lene Saile - creator's (developer) name.
  email: 'kyle@kylereddoch.me',
  website: 'https://www.kylereddoch.me',
  social: 'https://infosec.exchange/@beardedtechguy' // i.e. creator's social media account
};
export const pathToSvgLogo = '/assets/images/logo/logo.png'; // used for favicon generation
export const themeColor = '#dd4462'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Kyle's Tech Korner - My life and journey through this world of technology. A blog about tech, cybersecurity, and everything in between."; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Kyles Tech Korner',
  description: 'My life and journey through this world of technology. A blog about tech, cybersecurity, and everything in between.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Posts with tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: false,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
