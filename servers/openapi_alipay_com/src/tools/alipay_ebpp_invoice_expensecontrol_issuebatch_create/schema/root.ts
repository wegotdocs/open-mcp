import { z } from "zod"

export const inputParams = {
  "batch_no": z.string().describe("发放批次号，用于幂等校验本次发放").optional(),
  "effective_end_date": z.string().describe("额度有效结束时间").optional(),
  "effective_start_date": z.string().describe("额度有效起始时间").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "issue_desc": z.string().describe("发放说明").optional(),
  "issue_name": z.string().describe("发放名称").optional(),
  "issue_target_info_list": z.array(z.object({ "issue_quota": z.string().describe("当发放余额或点券时，单位为元，币种以创建制度时填写的currency为准，不填写默认为人民币。当发放类型为次卡时，单位为次。").optional(), "owner_id": z.string().describe("切换open_id前请使用：owner类型为PHONE时该字段表示员工手机号，owner类型为EMPLOYEE时该字段表示为员工支付宝uid，owner类型为ENTERPRISE_PAY_UID时该字段表示为员工企业码id，owner类型为ENTERPRISE时可不填，如果填写仅支持填企业id").optional(), "owner_open_id": z.string().describe("切换open_id后请使用：owner类型为PHONE时，填写员工手机号，EMPLOYEE时填写员工open_id").optional(), "owner_type": z.string().describe("owner类型，用来表示owner_id的类型").optional(), "user_name": z.string().describe("员工姓名").optional() })).describe("员工发放信息列表").optional(),
  "quota_type": z.string().describe("额度类型").optional(),
  "share_mode": z.string().describe("是否可转赠").optional()
}