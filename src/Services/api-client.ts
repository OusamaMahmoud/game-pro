import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1f00dfb782f44e1394d0f1856da3901c",
  },
});
