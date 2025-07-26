import { z } from "zod"

export const inputParamsSchema = {
  "cwe": z.number().int().optional(),
  "description": z.string().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "mitigation": z.string().optional(),
  "not_tag": z.string().describe("Not Tag name contains").optional(),
  "not_tags": z.array(z.string()).describe("Comma separated list of exact tags not present on model").optional(),
  "o": z.array(z.enum(["-cwe","-title","cwe","title"])).describe("Ordering\n\n* `title` - Title\n* `-title` - Title (descending)\n* `cwe` - Cwe\n* `-cwe` - Cwe (descending)").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "severity": z.string().optional(),
  "tag": z.string().describe("Tag name contains").optional(),
  "tags": z.array(z.string()).describe("Comma separated list of exact tags (uses OR for multiple values)").optional(),
  "tags__and": z.array(z.string()).describe("Comma separated list of exact tags to match with an AND expression").optional(),
  "title": z.string().optional()
}