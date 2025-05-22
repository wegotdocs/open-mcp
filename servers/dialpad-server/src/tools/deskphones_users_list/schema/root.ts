import { z } from "zod"

export const inputParamsSchema = {
  "parent_id": z.number().int().describe("The user's id. ('me' can be used if you are using a user level API key)")
}