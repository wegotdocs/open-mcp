import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().nullable().describe("用户ID[22222]"),
  "phoneNumber": z.string().regex(new RegExp("\\S*")).min(2).max(64).describe("手机号码[17011112222]"),
  "name": z.string().regex(new RegExp("\\S*")).min(2).max(64).describe("名字[张三丰]"),
  "contractAmount": z.number().nullable().describe("合同金额[1999]"),
  "approvalStatus": z.number().int().nullable().describe("审核状态[1-待审核,2-审核通过,3-已驳回]")
}