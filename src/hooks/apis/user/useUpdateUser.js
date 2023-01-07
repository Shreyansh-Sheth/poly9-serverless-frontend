import { useMutation } from "@tanstack/react-query";
import { UserServiceAxios } from "../../../utils/axiosClient";
export default function useUpdateUser() {
  return useMutation(async (user) => {
    const { _id, ...userPutData } = user;
    const { data } = await UserServiceAxios.put(`/user/${_id}`, userPutData);
    return data;
  });
}
