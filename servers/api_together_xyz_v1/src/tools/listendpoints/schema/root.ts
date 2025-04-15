import { z } from "zod"

export const inputParams = {
  "type": z.enum(["dedicated","serverless"]).describe("Filter endpoints by type").optional()
}