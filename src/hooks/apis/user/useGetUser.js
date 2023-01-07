import { useQuery } from "@tanstack/react-query";
import QueryKeys from "../../../const/queryKeys";
import { UserServiceAxios } from "../../../utils/axiosClient";
export default function useGetUser(page, limit) {
  return useQuery(
    [QueryKeys.USER, page],
    async () =>
      await UserServiceAxios.get(`/user?limit=${limit}&skip=${page * limit}`)
  );
}
