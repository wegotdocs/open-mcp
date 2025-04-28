import { z } from "zod"

export const inputParamsSchema = {
  "dev_id": z.number().int(),
  "display_name": z.string(),
  "filename": z.string(),
  "access-code": z.string()
}