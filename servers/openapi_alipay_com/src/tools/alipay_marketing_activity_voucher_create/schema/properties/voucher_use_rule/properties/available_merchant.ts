import { z } from "zod"

export const inputParams = {
  "available_pids": z.array(z.string()).describe("优惠券可核销的直连商户PID\t\t限制：\t1、available_pids和available_smids至少二选一。").optional(),
  "available_smids": z.array(z.string()).describe("优惠券可核销的间连商户SMID\t\t限制： \t1、available_pids和available_smids至少二选一。").optional()
}