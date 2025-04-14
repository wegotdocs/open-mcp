import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号（用户签约成功后的协议号 ）").optional(),
  "apply_token": z.string().describe("鉴权申请token，其格式和内容，由支付宝定义。在需要做支付鉴权校验时，该参数不能为空。").optional(),
  "auth_confirm_no": z.string().describe("鉴权确认码，在需要做支付鉴权校验时，该参数不能为空").optional(),
  "deduct_permission": z.string().describe("商户代扣扣款许可").optional()
}