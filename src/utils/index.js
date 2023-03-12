// API Constants
export const API_KEY = process.env.API_KEY;
export const API_URL = process.env.API_URL;
export const API_IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
export const API_BASE_URL = 'https://api.themoviedb.org/3/';
//Fetcher for SWR
export const fetcher = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//
