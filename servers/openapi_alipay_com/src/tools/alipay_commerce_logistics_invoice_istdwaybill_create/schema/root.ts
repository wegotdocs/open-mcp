import { z } from "zod"

export const inputParams = {
  "invoice": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `invoice` to the tool, first call the tool `expandSchema` with \"/properties/invoice\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "logistics_code": z.string().describe("即时配送公司编码").optional(),
  "out_invoice_request_no": z.string().describe("开票请求流水号").optional(),
  "waybill_invoices": z.array(z.object({ "waybill_amount": z.string().describe("即时配送运单金额").optional(), "waybill_no": z.string().describe("即时配送运单编号").optional() })).describe("即时配送运单列表").optional()
}