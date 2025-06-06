import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "fileId": z.number().int()
}