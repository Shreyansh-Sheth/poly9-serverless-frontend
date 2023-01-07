import { ActionIcon, Center, Group, Loader, Stack, Title } from "@mantine/core";
import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import UserForm from "../../components/user/UserForm";
import useGetUserById from "../../hooks/apis/user/useGetUserById";

export default function EditUerPage() {
  const { id } = useParams();

  const { data: user, isLoading } = useGetUserById(id);

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Stack>
      <Group position="center">
        <Link to="/">
          <ActionIcon>
            <TiArrowBack />
          </ActionIcon>
        </Link>
        <Title>Edit Form</Title>
      </Group>
      <UserForm defaultValues={user.data} />;
    </Stack>
  );
}
