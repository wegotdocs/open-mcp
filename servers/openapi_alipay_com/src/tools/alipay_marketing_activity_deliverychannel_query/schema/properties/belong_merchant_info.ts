import { z } from "zod"

export const inputParams = {
  "business_type": z.string().describe("合作业务类型。").optional(),
  "merchant_id": z.string().describe("商户信息").optional(),
  "merchant_id_type": z.string().describe("商户id类型。 限制: 服务商代运营模式必传\t如果merchant_id_type选择SMID。则表明当前商家券活动的归属者是该SMID所绑定的支付宝PID。 因此要求该SMID必须绑定相应的支付宝PID。").optional()
}