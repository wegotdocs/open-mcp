import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "org_id": z.number().int(),
  "dev_id_list": z.array(z.number().int())
}