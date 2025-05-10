import { z } from "zod"

export const inputParams = {
  "advance_payment_type": z.string().describe("垫资支付模式。支付时需要垫资的场景才传入。具体传参需与支付宝约定。\tCREDIT_FULFILLMENT_ZM 表示先用后付产品履约动作支持芝麻垫资。").optional(),
  "buyer_id": z.string().describe("买家的支付宝用户id\r\t\r\t注：\r\t1.用于校验与已存交易中的买家是否相等").optional(),
  "buyer_open_id": z.string().describe("买家支付宝用户唯一标识\t\t注：\t1.用于校验与已存交易中的买家是否相等").optional(),
  "buyer_pay_detail": z.array(z.object({ "amount": z.string().describe("买家支付金额，单位：元。").optional(), "pay_channel": z.string().describe("支付渠道").optional() })).describe("买家支付明细\r\t\r\t目前支持的支付渠道为：\r\t- offline_pos：本次买家使用的是pos刷卡支付\r\t\r\t注：\r\t各支付工具金额总和=订单总金额").optional(),
  "fulfillment_amount": z.string().describe("本次履约支付金额，单位为元，精确到小数点后两位。履约支付场景才需要传入。").optional(),
  "is_async_pay": z.boolean().describe("是否异步支付，传入true时，表明本次期望走异步支付，会先将支付请求受理下来，再异步推进。商户可以通过交易的异步通知或者轮询交易的状态来确定最终的交易结果").optional(),
  "order_pay_mode": z.string().describe("订单支付模式。特殊支付场景才需要传入。具体传参需与支付宝约定。\tCREDIT_FULFILLMENT_ZM表示基于芝麻授信的履约支付模式，比如芝麻先用后付产品。").optional(),
  "out_request_no": z.string().describe("商户请求号，标识一次请求的唯一id，用于幂等控制。").optional(),
  "product_code": z.string().describe("销售产品码").optional(),
  "total_amount": z.string().describe("订单总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]\r\t\r\t注：\r\t1.用于校验与已存交易中的金额是否相等").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}