import { z } from "zod"

export const inputParams = {
  "biz_scene": z.string().describe("场景码").optional(),
  "business_params": z.string().describe("JSON格式，传递业务扩展参数，使用前请与支付宝工程师联系！").optional(),
  "order_id": z.string().describe("发红包时支付宝返回的支付宝订单号order_id。").optional(),
  "out_request_no": z.string().describe("标识一次资金退回请求，一笔资金退回失败后重新提交，要采用原来的资金退回单号。总退款金额不能超过用户实际支付金额。").optional(),
  "passback_params": z.string().describe("公用回传参数，如果请求时传递了该参数，则异步通知商户时会回传该参数。").optional(),
  "product_code": z.string().describe("产品码").optional(),
  "refund_amount": z.string().describe("需要退款的金额，该金额不能大于订单金额,单位为元，支持两位小数").optional(),
  "remark": z.string().describe("资金退回备注").optional()
}