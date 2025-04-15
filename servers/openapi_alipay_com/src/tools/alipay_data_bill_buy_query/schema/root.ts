import { z } from "zod"

export const inputParams = {
  "start_time": z.string().describe("交易流水创建时间的起始范围").optional(),
  "end_time": z.string().describe("交易流水创建时间的结束范围。与起始时间间隔不超过31天。查询结果为起始时间至结束时间的左闭右开区间").optional(),
  "alipay_order_no": z.string().describe("支付宝交易流水号。如果查询参数中指定流水号，则只查询流水号相关的记录").optional(),
  "merchant_order_no": z.string().describe("商户交易号。如果查询参数中指定交易号，则只查询相关的记录").optional(),
  "store_no": z.string().describe("门店编号，模糊搜索").optional(),
  "page_no": z.string().describe("分页号，从1开始").optional(),
  "page_size": z.string().describe("分页大小1000-2000，默认2000").optional()
}