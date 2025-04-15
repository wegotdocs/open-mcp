import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("协议号").optional()
}