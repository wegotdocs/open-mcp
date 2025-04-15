import { z } from "zod"

export const inputParams = {
  "m_short_name": z.string().describe("商户品牌简称，只能由大写字母、下划线、数字组成，且必须以大写字母开头。").optional(),
  "product_code": z.string().describe("商户门店入驻的产品码,STANDARD_INVOICE:扫码开票，INVOICE_RETURN:企业自建-发票回传，INVOICE_EXPENSE:发票报销，PAYMENT_OPEN:支付即开票，PAY_FEE_OPEN:缴费后开票。").optional(),
  "process_id": z.string().describe("工单流水号（如果不填则默认查询最近一条工单）").optional()
}