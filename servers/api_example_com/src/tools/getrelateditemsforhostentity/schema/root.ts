import { z } from "zod"

export const inputParamsSchema = {
  "entityType": z.enum(["ORGANIZATION","DOCUMENT","LOCATION","NODE","CHECKLIST","KB_DOCUMENT","END_USER"]),
  "entityId": z.number().int(),
  "scope": z.enum(["ALL","HOSTING","HOSTED_BY"]).optional()
}