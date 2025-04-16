import { z } from "zod"

export const inputParamsSchema = {
  "permission_id": z.string().describe("The ID of the fine-tuned model checkpoint to get permissions for.\n"),
  "project_id": z.string().describe("The ID of the project to get permissions for.").optional(),
  "after": z.string().describe("Identifier for the last permission ID from the previous pagination request.").optional(),
  "limit": z.number().int().describe("Number of permissions to retrieve.").optional(),
  "order": z.enum(["ascending","descending"]).describe("The order in which to retrieve permissions.").optional()
}