import { ActionIcon, Group } from "@mantine/core";
import { TiUserDeleteOutline, TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import useDeleteUser from "../../hooks/apis/user/useDeleteUser";
export default function ListRow({ user, index }) {
  const deleteUserMutation = useDeleteUser();
  return (
    <tr>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.gender}</td>
      <td>{new Date(user.updatedAt).toLocaleString()}</td>
      <td>
        <Group>
          <ActionIcon
            loading={deleteUserMutation.isLoading}
            color="red"
            onClick={() => {
              deleteUserMutation.mutate(user._id);
            }}
          >
            <TiUserDeleteOutline />
          </ActionIcon>
          <Link to={`/user/edit/${user._id}`}>
            <ActionIcon>
              <TiEdit />
            </ActionIcon>
          </Link>
        </Group>
      </td>
    </tr>
  );
}
