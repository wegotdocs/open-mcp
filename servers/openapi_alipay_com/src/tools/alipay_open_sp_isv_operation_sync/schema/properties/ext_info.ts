import { z } from "zod"

export const inputParams = {
  "activation_time": z.string().describe("激活时间").optional(),
  "device_no": z.string().describe("设备号").optional()
}