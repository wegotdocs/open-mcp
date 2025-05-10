import { z } from "zod"

export const inputParams = {
  "biz_id": z.string().describe("调用方身份识别标记(应用名称) 与业务单据号联合唯一").optional(),
  "biz_no": z.string().describe("业务单据号，业务流水号").optional(),
  "invoice_amt": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `invoice_amt` to the tool, first call the tool `expandSchema` with \"/properties/invoice_amt\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "invoice_type": z.string().describe("申请开票类型，01：专票；02：普票").optional(),
  "memo": z.string().describe("备注").optional(),
  "mthtly_bill_nos": z.array(z.string()).describe("需开票的应收月账单号").optional(),
  "operator": z.string().describe("申请人的uid号").optional(),
  "out_biz_type": z.string().describe("01主站，02芝麻，03金融云").optional()
}