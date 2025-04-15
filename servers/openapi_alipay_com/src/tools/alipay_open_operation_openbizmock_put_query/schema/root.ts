import { z } from "zod"

export const inputParams = {
  "b_query": z.string().describe("test").optional(),
  "c_body": z.string().describe("test").optional()
}