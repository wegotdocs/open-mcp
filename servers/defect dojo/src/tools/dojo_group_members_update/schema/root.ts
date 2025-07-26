import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this dojo_ group_ member."),
  "group": z.number().int(),
  "user": z.number().int(),
  "role": z.number().int().describe("This role determines the permissions of the user to manage the group.")
}