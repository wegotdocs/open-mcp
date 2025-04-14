import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花芝轻会员。传入该参数，会忽略其它所有参数。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_sign_no": z.string().describe("外部签约号，由商户提供，花芝轻会员协议中标识用户的唯一签约号（确保在商户系统中唯一）。").optional(),
  "auth_scene": z.string().describe("花芝轻会员签约场景，商户和支付宝签约时确定。该值需要与系统/页面签约接口调用时传入的值保持一致。").optional()
}