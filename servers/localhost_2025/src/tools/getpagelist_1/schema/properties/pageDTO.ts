import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().nullable().describe("唯一标识符[111111]").optional(),
  "userId": z.string().nullable().describe("用户ID[22222]").optional(),
  "phoneNumber": z.string().nullable().describe("手机号码[17011112222]").optional(),
  "name": z.string().nullable().describe("名字[张三丰]").optional(),
  "contractAmount": z.number().nullable().describe("合同金额[1999]").optional(),
  "approvalStatus": z.number().int().nullable().describe("审核状态[1-待审核,2-审核通过,3-已驳回]").optional()
}