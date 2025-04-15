import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账号id，与enterprise_id两者必填其一").optional(),
  "create_by": z.string().describe("创建人").optional(),
  "employee_id": z.string().describe("企业域定义的员工id，与user_id两者必填其一").optional(),
  "enterprise_id": z.string().describe("企业域定义下的企业id，与accountId两者必填其一").optional(),
  "modify_by": z.string().describe("修改人").optional(),
  "new_title_id": z.string().describe("修改后的抬头id").optional(),
  "old_title_id": z.string().describe("修改前的抬头id").optional(),
  "open_id": z.string().describe("支付宝open_id，与employee_id两者必填其一").optional(),
  "title_tag": z.string().describe("员工抬头关系标").optional(),
  "user_id": z.string().describe("支付宝id2088，与employee_id两者必填其一").optional()
}