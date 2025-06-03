import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "text": z.string().optional(),
  "docs": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "url": z.string().optional(), "type": z.enum(["VIDEO","IMAGE","AUDIO","DOCUMENT","OTHER"]).optional() })).optional(),
  "type": z.enum(["CREDENTIALS_RP","CREDENTIALS_BANK","NOT_PRIVATE"]).optional()
}