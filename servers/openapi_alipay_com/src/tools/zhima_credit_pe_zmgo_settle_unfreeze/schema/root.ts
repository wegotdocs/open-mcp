import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花呗先享协议号").optional(),
  "alipay_open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "biz_time": z.string().describe("解冻成功时间").optional(),
  "order_title": z.string().describe("解冻的描述").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标识请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。由商户传入，最终返回给商户。").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "unfreeze_amount": z.string().describe("解冻金额").optional(),
  "unfreeze_extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `unfreeze_extend_params` to the tool, first call the tool `expandSchema` with \"/properties/unfreeze_extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}