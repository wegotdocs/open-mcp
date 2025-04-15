import { z } from "zod"

export const inputParamsSchema = {
  "addonKey": z.string().describe("The key of the app, as defined in its descriptor."),
  "propertyKey": z.string().describe("The key of the property.")
}