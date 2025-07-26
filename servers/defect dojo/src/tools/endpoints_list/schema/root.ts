import { z } from "zod"

export const inputParamsSchema = {
  "fragment": z.string().optional(),
  "has_tags": z.boolean().describe("Has tags").optional(),
  "host": z.string().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "not_tag": z.string().describe("Not Tag name contains").optional(),
  "not_tags": z.array(z.string()).describe("Comma separated list of exact tags not present on model").optional(),
  "o": z.array(z.enum(["-host","-id","-product","host","id","product"])).describe("Ordering\n\n* `host` - Host\n* `-host` - Host (descending)\n* `product` - Product\n* `-product` - Product (descending)\n* `id` - Id\n* `-id` - Id (descending)").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "path": z.string().optional(),
  "port": z.number().int().optional(),
  "product": z.number().int().optional(),
  "protocol": z.string().optional(),
  "query": z.string().optional(),
  "tag": z.string().describe("Tag name contains").optional(),
  "tags": z.array(z.string()).describe("Comma separated list of exact tags (uses OR for multiple values)").optional(),
  "tags__and": z.array(z.string()).describe("Comma separated list of exact tags to match with an AND expression").optional(),
  "userinfo": z.string().optional()
}