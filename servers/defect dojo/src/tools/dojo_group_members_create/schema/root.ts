import { z } from "zod"

export const inputParamsSchema = {
  "group": z.number().int(),
  "user": z.number().int(),
  "role": z.number().int().describe("This role determines the permissions of the user to manage the group.")
}