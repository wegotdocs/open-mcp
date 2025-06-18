import { z } from "zod"

export const inputParamsSchema = {
  "status": z.enum(["uploading","completed","cancelled","failed"]).optional(),
  "statuses[]": z.array(z.enum(["uploading","completed","cancelled","failed"])).optional(),
  "institution_id": z.string().uuid().describe("Institution id querystring parameter").optional()
}