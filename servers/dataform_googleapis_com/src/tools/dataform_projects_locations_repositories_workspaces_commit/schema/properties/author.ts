import { z } from "zod"

export const inputParamsSchema = {
  "emailAddress": z.string().describe("Required. The commit author's email address.").optional(),
  "name": z.string().describe("Required. The commit author's name.").optional()
}