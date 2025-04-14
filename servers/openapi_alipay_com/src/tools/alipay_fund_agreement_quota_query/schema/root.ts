import { z } from "zod"

export const inputParams = {
  "agreement_no_list": z.array(z.string()).describe("授权协议号").optional(),
  "biz_scene": z.string().describe("场景码，非固定值，使用的对应的资金场景码保持一致").optional(),
  "product_code": z.string().describe("额度产品码，非固定值，使用的对应的资金产品码保持一致").optional()
}