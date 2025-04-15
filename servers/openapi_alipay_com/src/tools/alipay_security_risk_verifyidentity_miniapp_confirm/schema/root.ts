import { z } from "zod"

export const inputParams = {
  "challenge": z.string().describe("业务的业务流水号，例如订单id").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID，验证时会与做身份认证时候会话中的openid做比对，如不相符核验结果不通过").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID，验证时会与做身份认证时候会话中的userId做比对，如不相符核验结果不通过").optional(),
  "verify_id": z.string().describe("核身校验id，是一次核身校验服务中唯一性的id").optional()
}