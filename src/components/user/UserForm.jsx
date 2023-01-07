import { Button, Container, Select, Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import Genders from "../../const/gender";
import useCreateUser from "../../hooks/apis/user/useCreateUser";
import useUpdateUser from "../../hooks/apis/user/useUpdateUser";
import { createUser, updateUser } from "../../validation/user.validation";
import { redirect, useNavigate } from "react-router-dom";
export default function UserForm({ defaultValues }) {
  //Forms
  const { getInputProps, onSubmit } = useForm({
    validate: zodResolver(defaultValues ? updateUser : createUser),
    initialValues: defaultValues
      ? { name: defaultValues.name, gender: defaultValues.gender }
      : undefined,
  });

  //Mutation Hooks
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  //Form Submit Logic
  const navigate = useNavigate();
  const submitForm = onSubmit(async (data) => {
    if (defaultValues) {
      await updateUserMutation.mutateAsync({
        _id: defaultValues._id,
        ...data,
      });
    } else {
      await createUserMutation.mutateAsync(data);
    }
    navigate("/");
  });

  return (
    <Container>
      <form onSubmit={submitForm}>
        <Stack>
          <TextInput label="Name" {...getInputProps("name")} />
          <Select
            {...getInputProps("gender")}
            label="Gender"
            data={Object.values(Genders).map((e) => ({
              label: e.toLocaleLowerCase(),
              value: e,
            }))}
          />
          <Button
            loading={
              createUserMutation.isLoading || updateUserMutation.isLoading
            }
            type="submit"
            fullWidth
          >
            {defaultValues ? "Update User" : "Create User"}
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
