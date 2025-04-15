import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("客服id").optional(),
  "job_number": z.string().describe("客服工号").optional(),
  "user_channel": z.string().describe("客服账号渠道, ALIPAY:支付宝账号\tuser_channel和external_user_id必须配对使用").optional(),
  "external_user_id": z.string().describe("客服账号id，当user_channel=ALIPAY时，此id为支付宝2088id\texternal_user_id和user_channel必须配对使用").optional()
}