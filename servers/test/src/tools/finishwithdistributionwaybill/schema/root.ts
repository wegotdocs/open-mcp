import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "waybillId": z.number()
}