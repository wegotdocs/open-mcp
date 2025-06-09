import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "waybillId": z.number().int(),
  "date": z.string()
}