import { z } from "zod"

export const inputParams = {
  "answering_mode": z.string().describe("热线接入方式，取值0，1，2").optional(),
  "ccs_instance_ids": z.array(z.string()).describe("部门id列表").optional(),
  "chat_configs": z.array(z.object({ "ccs_instance_id": z.string().describe("数据权限id(租户实例id)").optional(), "extended_group_ids": z.array(z.string()).describe("在线扩展技能组id列表").optional(), "group_id": z.string().describe("在线技能组id").optional(), "level_id": z.string().describe("在线服务等级").optional() })).describe("在线技能组设置，技能组部门间隔离，此设置应与ccs_instance_ids对应").optional(),
  "creator_id": z.string().describe("操作人客服id").optional(),
  "email": z.string().describe("客服邮箱").optional(),
  "external_user_id": z.string().describe("客服账号id，当user_channel=ALIPAY时，external_user_id为支付宝账号id").optional(),
  "hotline_configs": z.array(z.object({ "ccs_instance_id": z.string().describe("数据权限id(租户实例id)").optional(), "group_ids": z.array(z.string()).describe("热线技能组id").optional() })).describe("热线技能组设置，技能组部门间隔离，此设置应与ccs_instance_ids对应").optional(),
  "job_number": z.string().describe("客服工号，新增后不可变更。4位数字，不可重复").optional(),
  "mobile": z.string().describe("客服手机号").optional(),
  "nick_name": z.string().describe("客服昵称").optional(),
  "real_name": z.string().describe("客服姓名").optional(),
  "role_ids": z.array(z.object({ "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(), "role_id": z.string().describe("角色ID").optional() })).describe("角色id列表").optional(),
  "user_channel": z.string().describe("客服账号渠道 ALIPAY:支付宝账号").optional()
}