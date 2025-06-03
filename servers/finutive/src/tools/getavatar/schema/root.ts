import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().describe("ID of the user"),
  "inline": z.boolean().describe("Whether to display inline or as attachment").optional()
}