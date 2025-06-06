import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "htmlId": z.number().int()
}