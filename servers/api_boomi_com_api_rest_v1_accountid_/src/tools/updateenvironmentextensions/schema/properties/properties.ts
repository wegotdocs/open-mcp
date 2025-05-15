import { z } from "zod"

export const inputParamsSchema = {
  "property": z.array(z.object({ "name": z.string().describe("Name of property. Refer the Startup Properties Reference table.").optional(), "value": z.string().describe("Value of property.").optional() })).optional()
}