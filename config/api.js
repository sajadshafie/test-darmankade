import config from "./global";

export default {
  search: (body) => {
    return config.axiosHandler().post("v2/MainSearch", body);
  },
};
