import { z } from "zod"

export const inputParamsSchema = {
  "propertyName": z.string().describe("Name of the property to retrieve")
}