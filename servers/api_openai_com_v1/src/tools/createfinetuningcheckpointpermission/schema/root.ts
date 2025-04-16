import { z } from "zod"

export const inputParamsSchema = {
  "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint to create a permission for.\n"),
  "project_ids": z.array(z.string()).describe("The project identifiers to grant access to.")
}