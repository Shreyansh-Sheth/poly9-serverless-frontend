import { Button, Group, Stack } from "@mantine/core";
import { Link } from "react-router-dom";
import UserList from "../components/user/List";

export default function IndexPage() {
  return (
    <Stack spacing={"md"}>
      <Group position="center">
        <Link to="/user/add">
          <Button>Create User</Button>
        </Link>
      </Group>
      <UserList />
    </Stack>
  );
}
