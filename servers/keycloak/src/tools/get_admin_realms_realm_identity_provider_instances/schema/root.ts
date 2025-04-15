import { z } from "zod"

export const inputParamsSchema = {
  "briefRepresentation": z.boolean().describe("Boolean which defines whether brief representations are returned (default: false)").optional(),
  "first": z.number().int().describe("Pagination offset").optional(),
  "max": z.number().int().describe("Maximum results size (defaults to 100)").optional(),
  "realmOnly": z.boolean().describe("Boolean which defines if only realm-level IDPs (not associated with orgs) should be returned (default: false)").optional(),
  "search": z.string().describe("Filter specific providers by name. Search can be prefix (name*), contains (*name*) or exact (\"name\"). Default prefixed.").optional()
}