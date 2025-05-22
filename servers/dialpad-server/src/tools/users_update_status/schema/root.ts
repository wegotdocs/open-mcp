import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "expiration": z.number().int().nullable().describe("The expiration of this status. None for no expiration.").optional(),
  "status_message": z.string().nullable().describe("The status message for the user.").optional()
}