import { z } from "zod"

export const inputParams = {
  "employee_title_list": z.array(z.object({ "account_id": z.string().describe("共同账户id,与enterprise_id两者必填其一").optional(), "create_by": z.string().describe("创建人").optional(), "employee_id": z.string().describe("企业域定义的员工id，与user_id两者必填其一").optional(), "enterprise_id": z.string().describe("企业域定义的企业id，与account_id两者必填其一").optional(), "modify_by": z.string().describe("修改人").optional(), "open_id": z.string().describe("员工支付宝账号open_id,与employee_id两者必填其一").optional(), "title_id": z.string().describe("抬头id").optional(), "title_tag": z.string().describe("关系标记").optional(), "user_id": z.string().describe("员工支付宝账号2088,与employee_id两者必填其一").optional() })).describe("员工与抬头关系列表").optional()
}