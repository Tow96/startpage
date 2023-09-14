import axios from 'axios';
import { Themes } from './themes.utils';


const api = axios.create({
    baseURL: '/themes'
})


export const fetchTheme = (theme: Themes) => async () => {
  const {data} = await api.get(`/${theme}/styles.css`);
  return data;
}

