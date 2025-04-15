import { z } from "zod"

export const inputParams = {
  "start_time": z.string().describe("账务流水创建时间的起始范围。只能查询一年内的记录").optional(),
  "end_time": z.string().describe("账务流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "alipay_order_no": z.string().describe("支付宝订单号，通过支付宝订单号精确查询相关的流水明细，商户订单号与支付宝订单号互斥").optional(),
  "merchant_order_no": z.string().describe("商户订单号，通过商户订单号精确查询相关的流水明细，商户订单号与支付宝订单号互斥").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional(),
  "trans_code": z.string().describe("账务的类型代码，特殊场景下使用").optional(),
  "agreement_no": z.string().describe("协议授权码，特殊场景下使用").optional(),
  "agreement_product_code": z.string().describe("协议产品码。特殊场景下使用").optional(),
  "bill_user_id": z.string().describe("指定用户做账单查询").optional()
}