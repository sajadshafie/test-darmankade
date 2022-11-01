import axios from "axios";

const config = {
  utoken: null,
  baseURL: "https://medicative.darmankade.com/",
  axiosHandler: () => {
    return axios.create({
      headers: { Authorization: config.utoken },
      baseURL: config.baseURL,
    });
  },
};

export default config;
