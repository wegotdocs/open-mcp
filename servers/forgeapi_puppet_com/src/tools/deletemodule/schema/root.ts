import { z } from "zod"

export const inputParamsSchema = {
  "module_slug": z.string().regex(new RegExp("^[a-zA-Z0-9]+[-\\/][a-zA-Z][a-zA-Z0-9_]*$")).describe("Unique textual identifier (slug) of the Module resource to retrieve"),
  "reason": z.string().describe("Reason for deletion")
}