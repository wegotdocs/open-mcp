import { z } from "zod"

export const inputParams = {
  "violation_record_id": z.string().describe("支付宝侧生成的违规记录唯一标识").optional()
}