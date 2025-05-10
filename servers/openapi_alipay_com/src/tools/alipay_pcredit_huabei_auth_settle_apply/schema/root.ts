import { z } from "zod"

export const inputParams = {
  "action_type": z.string().describe("操作类型，默认为 MERCHANT_SETTLE（结算）。枚举值如下：\t*  MERCHANT_SETTLE：结算（需要主动退出在发起结算）;\t*  QUIT_SETTLE：退出协议（解约协议）;\t*  PERIOD_SETTLE：分阶段结算（不解约协议）。").optional(),
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "alipay_user_id": z.string().describe("用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "extend_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `extend_params` to the tool, first call the tool `expandSchema` with \"/properties/extend_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "need_terminated": z.string().describe("是否解约，该参数控制结算完成之后的操作，为空则表示结算后解约。枚举值如下：\t*  true：代表解约，默认为true。\t*  false：代表不解约。").optional(),
  "open_id": z.string().describe("用户在支付宝的唯一标识").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标示请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。").optional(),
  "pay_amount": z.string().describe("需要支付的金额，单位为：元（人民币），精确到小数点后两位").optional(),
  "seller_id": z.string().describe("支付宝商家ID，即商家账号在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t说明：若该值为空，则默认为商户签约账号对应的支付宝用户ID。").optional()
}