import useFetchTheme from './use-fetch-theme.hook';
import useStoreTheme from './use-store-theme.hook';
import { useEffect } from 'react';

function useTheme() {
  const { theme, update: setTheme } = useStoreTheme(s => s);
  const { data, isLoading, refetch, isFetching } = useFetchTheme(theme);

  // TODO: Convert to useCallback or useRef
  useEffect(() => {
    refetch();
  }, [theme, refetch]);


  // TODO: Remove previous style
  const styleElement = document.createElement('style');
  styleElement.id = 'theme-css'
  styleElement.textContent = data;
  document.head.appendChild(styleElement);

  // TODO: Add 20ms debounce to spinner

  return { theme, setTheme, spinner: (isFetching || isLoading) };
}

export default useTheme;
