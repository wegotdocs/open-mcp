import { z } from "zod"

export const inputParams = {
  "dynamic_id": z.string().describe("商户扫描用户的付款码值。18~24位，25~30开头，例如28开头的18位的数字；或人脸支付的ftoken等。").optional(),
  "org_pid": z.string().describe("进件信息中，SMID对应的银行机构的PID信息，一般为2088开头的16位数字。").optional(),
  "pay_smid": z.string().describe("进件信息中，二级商户ID（ sub_merchant_id)信息，一般为2088开头的16位数字。").optional(),
  "sence_no": z.string().describe("外部业务号，用于标识这笔解码请求，对同一个码的重复解码请求，sence_no必须与上一次保持一致，每次请求的sence_no必须不一样，如alipay.user.twostage.common.use接口配合alipay.trade.pay（统一收单交易支付接口）一并使用时，alipay.trade.pay接口的extend_params属性中必须设置DYNAMIC_TOKEN_OUT_BIZ_NO，且值必须与sence_no保持一致").optional(),
  "source_pid": z.string().describe("进件信息中，SMID对应渠道的PID信息，一般为2088开头的16位数字。").optional()
}