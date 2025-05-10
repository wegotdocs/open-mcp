import { z } from "zod"

export const inputParams = {
  "ext_school_id": z.string().describe("学校外标编号").optional(),
  "order_pay_type": z.string().describe("账单唤起收银台的方式：\t1-手机wap;2-当面付。默认值为1（不传值或传非数字值）").optional(),
  "royalty_amount": z.string().describe("分账金额，单位：元").optional(),
  "school_name": z.string().describe("学校名称").optional(),
  "trans_in_pid": z.string().describe("分账收入户PID").optional()
}