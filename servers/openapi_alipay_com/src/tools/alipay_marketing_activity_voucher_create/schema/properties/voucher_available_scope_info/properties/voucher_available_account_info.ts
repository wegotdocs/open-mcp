import { z } from "zod"

export const inputParams = {
  "available_pids": z.array(z.string()).describe("优惠券可核销的直连商户PID").optional(),
  "available_smids": z.array(z.string()).describe("优惠券可核销的间连商户SMID").optional()
}