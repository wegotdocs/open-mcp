import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "id_edit": z.string(),
  "type": z.enum(["CLIENT","PROVIDER","TPV"])
}