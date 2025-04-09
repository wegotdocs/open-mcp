import { z } from "zod"

export const inputParams = {
  "attributes": z.array(z.enum(["notSelectable","defaultValue"])).describe("DEPRECATED").optional(),
  "scope": z.string().optional()
}