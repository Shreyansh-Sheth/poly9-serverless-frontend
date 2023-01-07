import { ActionIcon, Group, Paper, Stack, Title } from "@mantine/core";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import UserForm from "../../components/user/UserForm";

export default function AddUserPage() {
  return (
    <Stack>
      <Group position="center">
        <Link to="/">
          <ActionIcon>
            <TiArrowBack />
          </ActionIcon>
        </Link>
        <Title>Add User</Title>
      </Group>
      <UserForm />
    </Stack>
  );
}
