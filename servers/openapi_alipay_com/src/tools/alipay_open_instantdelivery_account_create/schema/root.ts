import { z } from "zod"

export const inputParams = {
  "logistics_codes": z.array(z.string()).describe("配送公司编码").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional()
}