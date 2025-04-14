import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止（yyyy-MM-dd HH:mm:ss）\t特殊说明：\t1）与起始时间必须同时传，且大于起始时间\t2）不传则默认不修改").optional(),
  "effective_start_date": z.string().describe("有效期起始（yyyy-MM-dd HH:mm:ss）\t特殊说明：\t1）与截止时间必须同时传，且小于截止时间\t2）不传入则默认不修改").optional(),
  "project_id": z.string().describe("项目ID").optional(),
  "project_name": z.string().describe("项目名\t特殊说明：不传入则默认不修改").optional()
}