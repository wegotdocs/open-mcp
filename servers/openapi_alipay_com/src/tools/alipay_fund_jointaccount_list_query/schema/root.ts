import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "operate_role": z.string().describe("角色：创建方(CREATOR)、参与方(PARTICIPANT)").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "identity": z.string().describe("员工账号：\t\tidentity_type是ALIPAY_USER_ID填支付宝会员ID（2088开头）；\t\t是ALIPAY_LOGON_ID 填支付宝登录号").optional(),
  "identity_type": z.string().describe("账号类型，目前支持如下类型： 1、ALIPAY_USER_ID 支付宝的会员ID 2、ALIPAY_LOGON_ID：支付宝登录号，支持邮箱和手机号格式").optional()
}