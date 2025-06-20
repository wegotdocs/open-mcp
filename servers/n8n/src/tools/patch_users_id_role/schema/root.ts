import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID or email of the user."),
  "newRoleName": z.enum(["global:admin","global:member"])
}