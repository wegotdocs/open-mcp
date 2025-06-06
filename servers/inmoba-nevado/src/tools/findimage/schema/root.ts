import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "imageId": z.number().int()
}