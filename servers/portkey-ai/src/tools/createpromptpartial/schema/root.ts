import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string().describe("Required for Admin keys").optional(),
  "name": z.string(),
  "string": z.string().describe("Prompt partial template in string format"),
  "version_description": z.string().optional()
}