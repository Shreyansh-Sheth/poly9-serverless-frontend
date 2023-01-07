import { useMutation, useQueryClient } from "@tanstack/react-query";
import QueryKeys from "../../../const/queryKeys";
import { UserServiceAxios } from "../../../utils/axiosClient";
export default function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation((id) => UserServiceAxios.delete(`/user/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
    },
  });
}
