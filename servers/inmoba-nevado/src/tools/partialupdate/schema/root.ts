import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "linkId": z.number().int()
}