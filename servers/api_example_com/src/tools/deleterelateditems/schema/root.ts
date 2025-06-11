import { z } from "zod"

export const inputParamsSchema = {
  "entityType": z.enum(["ORGANIZATION","DOCUMENT","LOCATION","NODE","ATTACHMENT","TECHNICIAN","CREDENTIAL","CHECKLIST","END_USER","CONTACT","KB_DOCUMENT"]),
  "entityId": z.number().int()
}