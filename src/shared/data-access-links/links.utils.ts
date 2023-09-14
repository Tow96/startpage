const storageKey = 'Startpage-links';

export enum LinkType {
  HEADER = 0,
  REFERENCE = 1,
}

export interface PageLink {
  type: LinkType;
  name: string;
  ref?: string;
}

export interface PageState {
  links: PageLink[];
  update: (i: number, val: PageLink) => void;
}

export const getLinksFromStorage = (): PageLink[] => {
  const stored = JSON.parse(localStorage.getItem(storageKey) || '[]') as PageLink[];

  if (stored.length === 20) return stored;

  return [
    { type: LinkType.HEADER, name: 'Daily' },
    { type: LinkType.REFERENCE, name: 'Youtube', ref: 'https://youtube.com' },
    { type: LinkType.REFERENCE, name: 'Github', ref: 'https://github.com' },
    { type: LinkType.REFERENCE, name: 'Whatsapp', ref: 'https://web.whatsapp.com' },
    { type: LinkType.REFERENCE, name: 'Telegram', ref: 'https://https://web.telegram.org' },
    { type: LinkType.HEADER, name: 'Social' },
    { type: LinkType.REFERENCE, name: 'Twitter', ref: 'https://twitter.com' },
    { type: LinkType.REFERENCE, name: 'Reddit', ref: 'https://reddit.com' },
    { type: LinkType.REFERENCE, name: 'Instagram', ref: 'https://instagram.com' },
    { type: LinkType.REFERENCE, name: 'Discord', ref: 'https://discord.com' },
    { type: LinkType.HEADER, name: 'Coding' },
    { type: LinkType.REFERENCE, name: 'W3Schools', ref: 'https://www.w3schools.com/' },
    { type: LinkType.REFERENCE, name: 'LeetCode', ref: 'https://leetcode.com/' },
    { type: LinkType.REFERENCE, name: 'HackerRank', ref: 'https://www.hackerrank.com/' },
    { type: LinkType.REFERENCE, name: 'FreeCodeCamp', ref: 'https://www.freecodecamp.org/' },
    { type: LinkType.HEADER, name: 'Google' },
    { type: LinkType.REFERENCE, name: 'Gmail', ref: 'https://mail.google.com' },
    { type: LinkType.REFERENCE, name: 'Drive', ref: 'https://mail.google.com' },
    { type: LinkType.REFERENCE, name: 'Maps', ref: 'https://maps.google.com' },
    { type: LinkType.REFERENCE, name: 'Youtube', ref: 'https://mail.google.com' },
  ];
};

export const setLinksIntoStorage = (state: PageState, id: number, link: PageLink): PageState => {
  const links = state.links.map((l, idx) => (id === idx ? link : l));
  localStorage.setItem(storageKey, JSON.stringify(links));

  return { ...state, links };
};
