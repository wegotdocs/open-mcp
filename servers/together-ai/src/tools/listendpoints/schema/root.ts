import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["dedicated","serverless"]).describe("Filter endpoints by type").optional()
}