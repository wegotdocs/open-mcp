import { z } from "zod"

export const inputParamsSchema = {
  "entityType": z.enum(["TICKET","NODE","DOCUMENT","RELATED_ITEM","CHECKLIST","AUTOMATION","LOCATION","ORGANIZATION","TRIGGER","TECHNICIAN"]).optional()
}