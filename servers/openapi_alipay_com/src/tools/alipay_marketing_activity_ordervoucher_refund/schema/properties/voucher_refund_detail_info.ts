import { z } from "zod"

export const inputParams = {
  "voucher_refund_use_times": z.number().int().describe("本次取消核销次数").optional()
}