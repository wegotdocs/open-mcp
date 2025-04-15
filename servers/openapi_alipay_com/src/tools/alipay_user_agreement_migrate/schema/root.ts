import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ）").optional(),
  "target_app_id": z.string().describe("需要迁移的目标商户应用id").optional(),
  "target_invoke_app_id": z.string().describe("需要迁移的目标商户调用应用id").optional(),
  "target_partner_id": z.string().describe("需要迁移的目标商户id").optional()
}