import { z } from "zod"

export const inputParamsSchema = {
  "service_id": z.string(),
  "size": z.number().int(),
  "offset": z.number().int()
}