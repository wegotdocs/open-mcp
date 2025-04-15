import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "biz_type": z.string().describe("开放表单信息查询业务类型").optional(),
  "template_id": z.string().describe("会员卡模板id。使用会员卡模板创建接口(alipay.marketing.card.template.create)返回的结果").optional(),
  "request_id": z.string().describe("查询用户表单提交信息的请求id。\t\t网页移动应用&小程序应用：与auth_code  一起通过alipay.marketing.card.activateurl.apply(获取会员卡领卡投放链接)接口callback地址回传。\t\t注意：auth_code（用户授权码）用于换取用户授权令牌 accessToken，后续调用接口需传入accessToken。").optional()
}