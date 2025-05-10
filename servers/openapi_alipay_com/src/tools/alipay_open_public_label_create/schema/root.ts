import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("标签名").optional()
}