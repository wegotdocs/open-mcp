import { z } from "zod"

export const inputParamsSchema = {
  "taskId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "message": z.string().max(1048576),
  "startDate": z.number().int().optional(),
  "includeInTimeline": z.number().int().optional(),
  "attachments": z.array(z.string().base64()).describe("ignored with json content, use a multipart if you want to pass attachments").optional()
}