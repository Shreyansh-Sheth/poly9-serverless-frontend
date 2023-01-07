import { z } from "zod";
import Genders from "../const/gender";

const user = z.object({
  name: z.string().min(2).max(100),
  gender: z.enum(Object.values(Genders)),
});

const createUser = user.strict();

const updateUser = user.partial().strict();

export { createUser, updateUser };
