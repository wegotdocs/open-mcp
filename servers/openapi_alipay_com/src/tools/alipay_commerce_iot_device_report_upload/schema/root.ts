import { z } from "zod"

export const inputParams = {
  "report_content": z.string().describe("设备检测报告详情").optional(),
  "sn": z.string().describe("设备唯一标识").optional()
}