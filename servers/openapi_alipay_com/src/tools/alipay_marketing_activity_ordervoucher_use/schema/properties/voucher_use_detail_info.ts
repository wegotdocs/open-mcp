import { z } from "zod"

export const inputParams = {
  "voucher_use_times": z.number().int().describe("本次核销次数（不包含撤销核销的次数）").optional()
}