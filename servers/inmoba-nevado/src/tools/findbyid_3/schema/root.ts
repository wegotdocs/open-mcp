import { z } from "zod"

export const inputParamsSchema = {
  "typeId": z.number().int()
}