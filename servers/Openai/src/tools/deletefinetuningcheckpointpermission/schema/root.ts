import { z } from "zod"

export const inputParamsSchema = {
  "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint permission to delete.\n")
}