import { z } from "zod"

export const inputParams = {
  "merchant_uid": z.string().describe("商户唯一ID(商户pid)").optional()
}