import { z } from "zod"

export const inputParams = {
  "cumulative_preferential_redirect_schema": z.string().describe("芝麻GO管理页已享优惠进度的重定向链接").optional(),
  "custom_benefit_desc": z.string().describe("权益描述").optional(),
  "custom_sub_benefit_desc": z.string().describe("权益描述子标题").optional()
}