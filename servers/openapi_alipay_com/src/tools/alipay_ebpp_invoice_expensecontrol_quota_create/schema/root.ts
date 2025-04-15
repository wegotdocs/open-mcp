import { z } from "zod"

export const inputParams = {
  "effective_end_date": z.string().describe("额度失效时间（格式：yyyy-MM-dd HH:mm:ss）").optional(),
  "effective_start_date": z.string().describe("额度生效时间（格式：yyyy-MM-dd HH:mm:ss）").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "issue_desc": z.string().describe("批量发放时，可填写该字段").optional(),
  "issue_name": z.string().describe("批量发放时，可填写该字段作为发放名称，如果未填写取outer_source_id为默认值").optional(),
  "issue_quota_target_list": z.array(z.object({ "issue_quota": z.string().describe("当发放余额或点券时，单位为元，币种以创建制度时填写的currency为准，不填写默认为人民币。当发放类型为次卡时，单位为次。").optional(), "owner_id": z.string().describe("切换open_id前请使用：owner类型为PHONE时该字段表示员工手机号，owner类型为EMPLOYEE时该字段表示为员工支付宝uid，owner类型为ENTERPRISE_PAY_UID时该字段表示为员工企业码id，owner类型为ENTERPRISE时可不填，如果填写仅支持填企业id").optional(), "owner_open_id": z.string().describe("切换open_id后请使用：owner类型为PHONE时，填写员工手机号，EMPLOYEE时填写员工open_id").optional(), "owner_type": z.string().describe("owner类型，用来表示owner_id的类型").optional(), "user_name": z.string().describe("员工姓名").optional() })).describe("创建额度发放明细列表").optional(),
  "outer_source_id": z.string().describe("外部操作幂等ID，标识创建额度的唯一性，防止重复创建").optional(),
  "quota_type": z.string().describe("创建额度类型").optional(),
  "share_mode": z.string().describe("0:不可转赠\t1:可以转增").optional(),
  "target_id": z.string().describe("额度维度ID").optional(),
  "target_type": z.string().describe("额度维度\t枚举值：\tINSTITUTION（制度维度），\tEXPENSE_TYPE（费用类型维度）").optional()
}