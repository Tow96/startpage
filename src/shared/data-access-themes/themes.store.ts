import { devtools } from 'zustand/middleware';
import { Themes } from './themes.utils';
import { StateCreator } from 'zustand';

const storageKey = 'startpage-theme';

export interface ThemeState {
  theme: Themes;
  update: (wth: Themes) => void;
}

export const store: StateCreator<ThemeState, [], [['zustand/devtools', never]]> = devtools(set => ({
  theme: (localStorage.getItem(storageKey) || Themes.BLUE) as Themes,
  update: wth => set(state => setTheme(wth, state)),
}));


function setTheme(theme: Themes, state: ThemeState) {
  localStorage.setItem(storageKey, theme.toString());
  return {...state, theme}
}
