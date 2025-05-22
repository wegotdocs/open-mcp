import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The user's id. ('me' can be used if you are using a user level API key)"),
  "number": z.string().nullable().describe("A phone number to unassign. (e164-formatted)")
}