import { create } from 'zustand';
import { ThemeState, store } from '../themes.store';

const useStoreTheme = create<ThemeState>()(store);

export default useStoreTheme;
