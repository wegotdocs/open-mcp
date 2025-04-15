import { z } from "zod"

export const inputParams = {
  "b_query": z.string().describe("纬度").optional()
}