import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().min(1).max(500).describe("This dismissable message will be displayed on all pages for authenticated users. It can contain basic html tags, for example <a href='https://www.fred.com' style='color: #337ab7;' target='_blank'>https://example.com</a>").optional(),
  "style": z.enum(["info","success","warning","danger"]).describe("The style of banner to display. (info, success, warning, danger)\n\n* `info` - Info\n* `success` - Success\n* `warning` - Warning\n* `danger` - Danger").optional(),
  "dismissable": z.boolean().describe("Ticking this box allows users to dismiss the current announcement").optional()
}