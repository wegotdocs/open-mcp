import { z } from "zod"

export const inputParamsSchema = {
  "pageIndex": z.number().int(),
  "pageSize": z.number().int()
}