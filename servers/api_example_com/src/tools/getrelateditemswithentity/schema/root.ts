import { z } from "zod"

export const inputParamsSchema = {
  "relEntityType": z.enum(["ORGANIZATION","DOCUMENT","LOCATION","NODE","ATTACHMENT","TECHNICIAN","CREDENTIAL","CHECKLIST","END_USER","CONTACT","KB_DOCUMENT"]),
  "relEntityId": z.number().int()
}