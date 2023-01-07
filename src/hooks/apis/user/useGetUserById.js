import { useQuery } from "@tanstack/react-query";
import QueryKeys from "../../../const/queryKeys";
import { UserServiceAxios } from "../../../utils/axiosClient";

export default function useGetUserById(id) {
  return useQuery(
    [QueryKeys.USER, id],
    async () => await UserServiceAxios.get(`/user/${id}`)
  );
}
