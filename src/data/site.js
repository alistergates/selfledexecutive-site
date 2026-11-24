// Shared site settings, navigation and footer links.
export const SITE = 'https://selfledexecutive.com';
export const NAME = 'The Self-Led Executive';
export const EMAIL = 'me@alistergates.com';
// Google Analytics measurement ID. Leave empty until a GA4 property exists for this site;
// the cookie banner and analytics only appear once it's set.
export const GA_ID = '';

export const nav = [
  { label: 'Approach', href: '/approach/' },
  { label: 'Work with me', href: '/work-with-me/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'About', href: '/about/' },
];

export const cta = { label: 'Book a call', href: '/contact/' };

export const footer = [
  { head: 'The work', links: [
    ['Approach', '/approach/'],
    ['Work with me', '/work-with-me/'],
    ['Book a 20-minute call', '/contact/'],
  ]},
  { head: 'Read', links: [
    ['Journal', '/journal/'],
    ['About Alister', '/about/'],
    ['Field Notes (email)', '/#field-notes'],
  ]},
  { head: 'Elsewhere', links: [
    ['Couples & individual counselling ↗', 'https://alistergates.com/'],
  ]},
];
