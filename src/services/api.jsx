import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const apiKey = "16769549-77e013c4c462af3357f93945e";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.data.hits);
};

export default fetchImagesWithQuery;
