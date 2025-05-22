import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "office_id": z.number().int().nullable().describe("The user's office id. When provided, the user will be moved to this office.").optional()
}