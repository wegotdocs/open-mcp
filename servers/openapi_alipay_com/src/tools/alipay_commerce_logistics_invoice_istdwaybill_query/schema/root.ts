import { z } from "zod"

export const inputParams = {
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "out_invoice_request_no": z.string().describe("开票请求流水号").optional()
}