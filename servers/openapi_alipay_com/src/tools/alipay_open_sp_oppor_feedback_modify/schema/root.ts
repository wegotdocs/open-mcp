import { z } from "zod"

export const inputParams = {
  "expand_result": z.string().describe("拓展助手商机拓展结果").optional(),
  "isv_pid": z.string().describe("服务商pid").optional(),
  "leads_id": z.string().describe("商机id").optional(),
  "merchant_pid": z.string().describe("拓展助手商机商家pid").optional(),
  "oppor_id": z.string().describe("商机作业id").optional(),
  "sn": z.string().describe("拓展设备sn号").optional()
}