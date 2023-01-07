import { UserServiceAxios } from "../../../utils/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QueryKeys from "../../../const/queryKeys";
export default function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation((user) => UserServiceAxios.post("/user", user), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
    },
  });
}
