import { z } from "zod"

export const inputParams = {
  "available_pids": z.array(z.string()).describe("优惠券可以核销的直连商户PID。默认不修改。\t 限制： \t1、核销商户范围只能增大不能减小。").optional(),
  "available_smids": z.array(z.string()).describe("优惠券可以核销的间连商户SMID。默认不修改。\t 限制： \t 1、核销商户范围只能增大不能减小。").optional()
}