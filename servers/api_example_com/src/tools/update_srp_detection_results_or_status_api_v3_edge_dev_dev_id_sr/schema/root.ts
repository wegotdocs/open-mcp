import { z } from "zod"

export const inputParamsSchema = {
  "dev_id": z.number().int(),
  "srp_name": z.string(),
  "access-code": z.string()
}