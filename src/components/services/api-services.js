import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImage = async (searchQuery, page) => {
  const API_KEY = `22619356-ee7eba8b5a411fda9a95fba73`;
  const SEARCH_PARAMS = `image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
  const { data } = await axios.get(
    `/?key=${API_KEY}&q=${searchQuery}&${SEARCH_PARAMS}`
  );
  return data;
};
