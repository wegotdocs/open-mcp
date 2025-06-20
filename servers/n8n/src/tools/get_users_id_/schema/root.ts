import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID or email of the user."),
  "includeRole": z.boolean().describe("Whether to include the user's role or not.").optional()
}