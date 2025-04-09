import { z } from "zod"

export const inputParams = {
  "locations": z.array(z.string()).describe("An array of comma separated {latitude,longitude} strings.").optional(),
  "path": z.array(z.string()).describe("An array of comma separated {latitude,longitude} strings.").optional(),
  "samples": z.number().describe("Required if path parameter is set.").optional()
}