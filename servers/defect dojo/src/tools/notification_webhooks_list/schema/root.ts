import { z } from "zod"

export const inputParamsSchema = {
  "first_error": z.string().datetime({ offset: true }).optional(),
  "header_name": z.string().optional(),
  "header_value": z.string().optional(),
  "last_error": z.string().datetime({ offset: true }).optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "name": z.string().optional(),
  "note": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "owner": z.number().int().optional(),
  "status": z.enum(["active","active_tmp","inactive_permanent","inactive_tmp"]).describe("Status of the incoming webhook\n\n* `active` - Active\n* `active_tmp` - Active but 5xx (or similar) error detected\n* `inactive_tmp` - Temporary inactive because of 5xx (or similar) error\n* `inactive_permanent` - Permanently inactive").optional(),
  "url": z.string().optional()
}