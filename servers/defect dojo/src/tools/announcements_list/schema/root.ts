import { z } from "zod"

export const inputParamsSchema = {
  "dismissable": z.boolean().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "message": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "style": z.enum(["danger","info","success","warning"]).describe("The style of banner to display. (info, success, warning, danger)\n\n* `info` - Info\n* `success` - Success\n* `warning` - Warning\n* `danger` - Danger").optional()
}