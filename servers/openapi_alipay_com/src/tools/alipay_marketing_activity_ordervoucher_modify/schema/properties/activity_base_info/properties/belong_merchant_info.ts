import { z } from "zod"

export const inputParams = {
  "business_type": z.string().describe("合作业务类型,默认为ISV_FOR_MERCHANT").optional(),
  "merchant_id": z.string().describe("商户PID,默认为当前接口调用商户。").optional(),
  "merchant_id_type": z.string().describe("商户id类型。特别说明：如果merchant_id_type选择SMID。则表明当前商家券活动的归属者是该SMID所绑定的支付宝PID。因此要求该SMID必须绑定相应的支付宝PID。").optional()
}