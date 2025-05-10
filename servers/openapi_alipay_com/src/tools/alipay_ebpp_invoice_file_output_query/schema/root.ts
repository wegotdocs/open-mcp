import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "open_id": z.string().describe("发票归属用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "invoice_code": z.string().describe("发票代码\t字段长度（10-12位），全电票时为空").optional(),
  "invoice_no": z.string().describe("发票号码\t字段长度（8-10位），全电票时为20位").optional(),
  "scene": z.string().describe("发票pdf文件下载应用场景。固定为 INVOICE_EXPENSE  表示发票报销。").optional(),
  "skip_expense_progress_sync": z.boolean().describe("是否跳过发票报销状态同步；当为true时，跳过报销状态同步校验。默认为false，需要先做报销状态同步").optional()
}