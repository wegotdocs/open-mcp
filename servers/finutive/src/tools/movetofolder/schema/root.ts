import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "items": z.array(z.object({ "id": z.string().optional(), "type": z.enum(["folder","document"]).optional() })),
  "folder_id": z.string().optional(),
  "folder_special_type": z.enum(["TRASH","TEMP"]).optional(),
  "type": z.enum(["CLIENT","PROVIDER"]).optional()
}