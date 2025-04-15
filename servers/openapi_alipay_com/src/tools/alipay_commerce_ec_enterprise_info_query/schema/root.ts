import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id,从企业注册等接口获取，和out_biz_no参数二选一，都传优先取企业id").optional(),
  "out_biz_no": z.string().describe("服务商生成的请求唯一流水号/业务幂等号，和enterprise_id参数二选一，都传优先取企业id").optional()
}