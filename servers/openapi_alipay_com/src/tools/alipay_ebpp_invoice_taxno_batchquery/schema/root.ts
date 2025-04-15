import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "enable_trade_out": z.string().describe("默认值为false。true为输出交易信息，false为不输出交易信息。").optional(),
  "end_invoice_date": z.string().describe("查询结束时间，精确到天（按开票日期查询）\tstart_invoice_date和end_invoice_date传值要求\t1.同时为空时，返回最近半年200条数据\t2.必须同时为空 或 同时不为空\t3.结束日期不能大于当前日期\t4.开始时间和结束时间跨度不能超过6个月").optional(),
  "invoice_kind_list": z.array(z.string()).describe("查询票种列表").optional(),
  "limit_size": z.number().int().describe("查询结果上限笔数，最大值20").optional(),
  "page_num": z.number().int().describe("当前页码，为空时默认第一页").optional(),
  "scene": z.string().describe("发票要素获取应用场景。<a href=\"https://opendocs.alipay.com/open/10691/bv8s88\">\"拉\"模式报销</a> 固定为 INVOICE_EXPENSE 表示发票报销。").optional(),
  "start_invoice_date": z.string().describe("查询起始时间，精确到天（按开票日期查询）\tstart_invoice_date和end_invoice_date传值要求\t1.同时为空时，返回最近半年200条数据\t2.必须同时为空 或 同时不为空\t3.结束日期不能大于当前日期\t4.开始时间和结束时间跨度不能超过6个月").optional(),
  "tax_no": z.string().describe("企业税号").optional()
}