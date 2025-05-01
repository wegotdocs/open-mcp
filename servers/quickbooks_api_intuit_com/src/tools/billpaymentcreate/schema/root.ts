import { z } from "zod"

export const inputParamsSchema = {
  "operation": z.string().optional(),
  "CheckPayment": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `CheckPayment` to the tool, first call the tool `expandSchema` with \"/properties/CheckPayment\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "Line": z.array(z.object({ "Amount": z.number().optional(), "LinkedTxn": z.array(z.object({ "TxnId": z.string().optional(), "TxnType": z.string().optional() })).optional() })).optional(),
  "PayType": z.string().optional(),
  "PrivateNote": z.string().optional(),
  "TotalAmt": z.number().optional(),
  "VendorRef": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `VendorRef` to the tool, first call the tool `expandSchema` with \"/properties/VendorRef\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}