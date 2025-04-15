import { z } from "zod"

export const inputParamsSchema = {
  "propertyKey": z.string().describe("The key of the property.")
}