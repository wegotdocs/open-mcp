import { z } from "zod"

export const inputParamsSchema = {
  "menuId": z.number().int(),
  "enable": z.number().int()
}