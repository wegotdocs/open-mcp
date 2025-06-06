import { z } from "zod"

export const inputParamsSchema = {
  "propertyId": z.number().int(),
  "imageId": z.number().int(),
  "publish": z.boolean().describe("It is ignored if the main field is true or if it is the only image of the property").optional(),
  "main": z.boolean().describe("Default true if it is the only image of the property, otherwise false").optional(),
  "position": z.number().int().nullable().optional()
}