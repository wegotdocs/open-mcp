import { z } from "zod"

export const inputParamsSchema = {
  "areaId": z.number().int()
}