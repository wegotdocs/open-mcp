import { z } from "zod"

export const inputParamsSchema = {
  "cursor": z.string().describe("A token used to return the next page of a previous request. Use the cursor provided in the previous response.").optional(),
  "user_id": z.string().describe("The user's id. ('me' can be used if you are using a user level API key)").optional()
}