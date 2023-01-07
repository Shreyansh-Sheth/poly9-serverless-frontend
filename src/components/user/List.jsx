import { Center, Loader, Pagination, Stack, Table } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useState } from "react";
import useGetUser from "../../hooks/apis/user/useGetUser";
import ListRow from "./ListRow";
export default function UserList() {
  const LIMIT = 2;
  const [page, setPage] = useState(1);
  const { data: userData, isLoading: userDataLoading } = useGetUser(
    page - 1,
    LIMIT
  );
  if (userDataLoading)
    return (
      <Center>
        <Loader />
      </Center>
    );
  return (
    <Stack>
      <Table m="lg">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Last Change</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData?.data.userList.map((user, idx) => (
            <ListRow
              key={user._id}
              user={user}
              index={(page - 1) * LIMIT + idx + 1}
            />
          ))}
        </tbody>
      </Table>
      <Pagination
        onChange={(page) => setPage(page)}
        page={page}
        total={Math.ceil(userData.data.totalCount / LIMIT)}
      />
    </Stack>
  );
}
