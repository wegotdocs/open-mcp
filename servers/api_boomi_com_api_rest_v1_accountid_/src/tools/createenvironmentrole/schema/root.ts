import { z } from "zod"

export const inputParamsSchema = {
  "environmentId": z.string().describe("The environment ID.").optional(),
  "id": z.string().describe("The object’s conceptual ID, which is synthesized from the role and environment IDs.").optional(),
  "roleId": z.string().describe("The ID of the role.").optional()
}