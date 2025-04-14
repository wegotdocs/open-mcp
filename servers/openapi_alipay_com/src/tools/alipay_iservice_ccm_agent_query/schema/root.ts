import { z } from "zod"

export const inputParams = {
  "answering_mode": z.string().describe("热线接入方式").optional(),
  "ccs_instance_id": z.string().describe("部门id").optional(),
  "chat_ext_group_ids": z.array(z.string()).describe("在线扩展技能组id").optional(),
  "chat_group_ids": z.array(z.string()).describe("在线技能组id").optional(),
  "chat_level_ids": z.array(z.string()).describe("在线服务等级").optional(),
  "email": z.string().describe("客服邮箱").optional(),
  "hotline_group_ids": z.array(z.string()).describe("热线扩展技能组id").optional(),
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 10").optional(),
  "real_name": z.string().describe("客服姓名").optional(),
  "role_ids": z.array(z.string()).describe("客服角色id").optional()
}