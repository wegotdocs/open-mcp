import { z } from "zod"

export const inputParams = {
  "merchant_no": z.string().describe("商户号，目前是商户pid").optional()
}