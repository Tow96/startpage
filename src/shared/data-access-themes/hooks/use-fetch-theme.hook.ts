import { useQuery } from "@tanstack/react-query";
import { Themes } from "../themes.utils";
import { fetchTheme } from "../themes.api";

function useFetchTheme(theme: Themes) {
  return useQuery(['theme'], fetchTheme(theme));
}

export default useFetchTheme;
