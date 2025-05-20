import { z } from "zod"

export const inputParamsSchema = {
  "release_slug": z.string().regex(new RegExp("^[a-zA-Z0-9]+[-\\/][a-z][a-z0-9_]*[-\\/][0-9]+\\.[0-9]+\\.[0-9]+(?:[\\-+].+)?$")).describe("Unique textual identifier (slug) of the module release to delete"),
  "reason": z.string().describe("Reason for deletion")
}