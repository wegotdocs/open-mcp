import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().describe("The ID of the user."),
  "role": z.enum(["owner","reader"]).describe("`owner` or `reader`")
}