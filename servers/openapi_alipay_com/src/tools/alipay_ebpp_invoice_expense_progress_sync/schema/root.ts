import { z } from "zod"

export const inputParams = {
  "apply_id": z.string().describe("同步申请id，每次发起同步时生成，isv每次请求需要保证唯一").optional(),
  "business_time": z.string().describe("报销状态变更执行时间").optional(),
  "expense_detail_url": z.string().describe("报销详情地址，提供用户通过发票管家查看报销进度的地址\r\t如果报销企业入驻发票管家时需要isv传入报销详情地址，则必须提供").optional(),
  "expense_order_no": z.string().describe("报销单据号").optional(),
  "expense_tax_no": z.string().describe("报销企业税号").optional(),
  "invoice_code": z.string().describe("发票代码").optional(),
  "invoice_no": z.string().describe("发票号码").optional(),
  "memo": z.string().describe("备注").optional(),
  "open_id": z.string().describe("open_id，支付宝用户id").optional(),
  "status": z.string().describe("报销操作").optional(),
  "user_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}