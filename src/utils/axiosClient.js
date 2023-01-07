import Axios from "axios";

const UserServiceAxios = Axios.create({
  baseURL: "http://localhost:3000/dev",
});

export { UserServiceAxios };
