import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PageState, getLinksFromStorage, setLinksIntoStorage } from './links.utils';

const usePageLinkStore = create<PageState>()(
  devtools(set => ({
    links: getLinksFromStorage(),
    update: (i, val) => set(state => setLinksIntoStorage(state, i, val)),
  }))
);

export default usePageLinkStore;
