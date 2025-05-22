import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The user's id. ('me' can be used if you are using a user level API key)")
}