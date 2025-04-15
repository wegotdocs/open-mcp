import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "add_employee_list": z.array(z.string()).describe("未切换 open_id 时请使用此字段：\t需要添加的员工UID列表\t特殊说明：一次最多50个").optional(),
  "add_employee_open_id_list": z.array(z.string()).describe("切换 open_id 后请使用此字段：\t需要添加的open_id/企业码员工ID列表 特殊说明：一次最多50个").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "group_id_list": z.array(z.string()).describe("费控规则ID列表").optional(),
  "remove_employee_list": z.array(z.string()).describe("未切换 open_id 时请使用此字段：\t需要移除的员工UID列表\t特殊说明：一次最多50个").optional(),
  "remove_employee_open_id_list": z.array(z.string()).describe("切换 open_id 后请使用此字段：\t需要移除的open_id/企业码员工ID列表 特殊说明：一次最多50个").optional()
}