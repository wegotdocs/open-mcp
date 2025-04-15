import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账户ID").optional(),
  "add_employee_list": z.array(z.string()).describe("切换open_id前使用此字段：\t需要添加的员工UID列表\t约束：一次最多50个").optional(),
  "add_employee_open_id_list": z.array(z.string()).describe("切换open_id后使用此字段：\t需要添加的员工open_id列表\t约束：一次最多50个").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "project_id": z.string().describe("项目ID").optional(),
  "remove_employee_list": z.array(z.string()).describe("切换open_id前使用此字段：\t需要移除的员工UID列表\t约束：一次最多50个").optional(),
  "remove_employee_open_id_list": z.array(z.string()).describe("切换open_id后前使用此字段： 需要移除的员工open_id列表 约束：一次最多50个").optional()
}