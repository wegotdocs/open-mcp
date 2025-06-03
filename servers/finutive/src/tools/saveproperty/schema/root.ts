import { z } from "zod"

export const inputParamsSchema = {
  "property_name": z.string().describe("Property name"),
  "property_value": z.string().describe("Property value")
}