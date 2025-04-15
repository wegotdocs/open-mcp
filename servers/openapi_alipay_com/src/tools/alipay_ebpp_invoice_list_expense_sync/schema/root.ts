import { z } from "zod"

export const inputParams = {
  "business_time": z.string().describe("报销进度变更时间").optional(),
  "expense_order_no": z.string().describe("商户报销单据号").optional(),
  "expense_tax_no": z.string().describe("报销企业税号").optional(),
  "invoice_element_list": z.array(z.object({ "apply_id": z.string().describe("同步申请id，每次发起同步时生成，isv每次请求需要保证唯一").optional(), "expense_detail_url": z.string().describe("报销详情地址，提供用户通过发票管家查看报销进度的地址\r\t如果报销企业入驻发票管家时需要isv传入报销详情地址，则必须提供").optional(), "invoice_code": z.string().describe("发票代码").optional(), "invoice_no": z.string().describe("发票号码").optional() })).describe("需要同步报销状态的发票列表").optional(),
  "memo": z.string().describe("报销审批备注").optional(),
  "open_id": z.string().describe("用户uid").optional(),
  "status": z.string().describe("EXPENSE_APPLY:报销申请提交;EXPENSE_APPROVAL_PASS:报销申请审核通过;EXPENSE_FINISHED:报销申请完成;EXPENSE_CANCEL:报销申请撤回").optional(),
  "user_id": z.string().describe("用户uid").optional()
}