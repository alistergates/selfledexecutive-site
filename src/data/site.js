// Shared site settings, navigation and footer links.
export const SITE = 'https://selfledexecutive.com';
export const NAME = 'The Self-Led Executive';
export const EMAIL = 'me@alistergates.com';
// Google Analytics measurement ID. Leave empty until a GA4 property exists for this site;
// the cookie banner and analytics only appear once it's set.
export const GA_ID = '';

export const nav = [
  { label: 'What is IFS?', href: '/what-is-ifs/' },
  { label: 'How I work', href: '/how-i-work/' },
  { label: 'Outcomes', href: '/outcomes/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'About', href: '/about/' },
];

export const cta = { label: 'Book a call', href: '/contact/' };

export const footer = [
  { head: 'The work', links: [
    ['How I work', '/how-i-work/'],
    ['The programme', '/how-i-work/#programme'],
    ['Outcomes', '/outcomes/'],
    ['Book a 20-minute call', '/contact/'],
  ]},
  { head: 'IFS for leaders', links: [
    ['What is IFS?', '/what-is-ifs/'],
    ['IFS glossary', '/ifs-glossary/'],
    ['Journal', '/journal/'],
    ['Field Notes (email)', '/#field-notes'],
    ['About Alister', '/about/'],
  ]},
  { head: 'Elsewhere', links: [
    ['Couples & individual counselling ↗', 'https://alistergates.com/'],
  ]},
];
