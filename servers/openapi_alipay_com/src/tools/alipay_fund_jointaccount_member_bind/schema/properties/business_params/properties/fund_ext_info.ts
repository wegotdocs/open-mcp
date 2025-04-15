import { z } from "zod"

export const inputParams = {
  "fund_identity": z.string().describe("出资主体账号，fund_identity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "fund_identity_type": z.string().describe("出资主体账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional()
}