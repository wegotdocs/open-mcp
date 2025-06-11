import { z } from "zod"

export const inputParamsSchema = {
  "documentTemplateId": z.number().int()
}