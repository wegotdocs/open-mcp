import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "state": z.enum(["active","all","cancelled","deleted","pending","suspended"]).describe("Filter results by the specified user state (e.g. active, suspended, deleted)").optional(),
  "company_admin": z.boolean().describe("If provided, filter results by the specified value to return only company admins or only non-company admins.").optional(),
  "email": z.string().describe("The user's email.").optional(),
  "number": z.string().describe("The user's phone number.").optional()
}