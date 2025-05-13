import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().describe("Current page of the collection. Default is 1.").optional(),
  "per_page": z.number().int().describe("Maximum number of items to be returned in result set. Default is 10.").optional(),
  "after": z.string().describe("Limit response to resources published after a given ISO8601 compliant date (eg. 2023-05-07T10:00:00).").optional(),
  "before": z.string().describe("Limit response to resources published before a given ISO8601 compliant date (eg. 2023-10-07T12:10:16).").optional(),
  "modified_after": z.string().describe("Limit response to resources modified after a given ISO8601 compliant date. (eg. 2023-05-07T10:00:00).").optional(),
  "status": z.array(z.enum(["any","pending","processing","on-hold","completed","cancelled","refunded","failed","trash"])).describe("Limit result set to orders assigned a specific status. Options: any, pending, processing, on-hold, completed, cancelled, refunded, failed and trash. Default is any.").optional(),
  "order": z.enum(["asc","desc"]).describe("Order sort attribute ascending or descending. Options: asc and desc. Default is desc.").optional()
}