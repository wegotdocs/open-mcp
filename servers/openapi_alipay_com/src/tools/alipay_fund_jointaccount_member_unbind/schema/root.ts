import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("账本id").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "biz_scene": z.string().describe("场景码").optional(),
  "identity": z.string().describe("成员账号：\tidentity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional(),
  "name": z.string().describe("姓名，账号类型为ALIPAY_LOGON_ID时必填").optional(),
  "product_code": z.string().describe("产品码").optional(),
  "status": z.string().describe("成员当前状态：\t邀请中（PROCESSING）、正常（NORMAL）").optional()
}