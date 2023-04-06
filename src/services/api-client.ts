import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "bf1495d54ff94b829392fbc592c76e19" },
});
