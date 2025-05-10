import { z } from "zod"

export const inputParams = {
  "data": z.string().describe("模板消息内容。商家/开发者将模板占位符替换为自定义内容").optional(),
  "form_id": z.string().describe("支付消息模板：需传入用户发生的交易行为的支付宝交易号 trade_no；</br>表单提交模板：需传入用户在小程序触发表单提交事件获得的表单号；</br>刷脸消息模板：需传入在IOT刷脸后得到的ftoken等，用于信息发送的校验。</br>").optional(),
  "page": z.string().describe("小程序的跳转页面。用于用户点击模板消息 进入小程序查看 按钮后，跳转至商家小程序对应页面。").optional(),
  "to_open_id": z.string().describe("支付宝openId，用于支付宝用户在当前应用下的用户标识。").optional(),
  "to_user_id": z.string().describe("接收模板消息用户支付宝 user_id，可通过 <a href=\"https://opendocs.alipay.com/mini/api/openapi-authorize\">用户授权</a> 获取").optional(),
  "user_template_id": z.string().describe("商家在商家自运营中心选用的消息模板ID，详情参见 <a href=\"https://opendocs.alipay.com/mini/03l9bb?pathHash=19d2e0aa&ref=api#%E9%A2%86%E7%94%A8%E8%AE%A2%E9%98%85%E6%B6%88%E6%81%AF%E6%A8%A1%E6%9D%BF\">选用消息模板</a> 。").optional()
}