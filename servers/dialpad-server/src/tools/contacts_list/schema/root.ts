import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "include_local": z.boolean().describe("If set to True company local contacts will be included. default False.").optional(),
  "owner_id": z.string().describe("The id of the user who owns the contact.").optional()
}