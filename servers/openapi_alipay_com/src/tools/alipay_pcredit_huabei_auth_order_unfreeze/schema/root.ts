import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花呗先享协议号").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "need_terminated": z.string().describe("true表示需要解约。false或者不填写表示仅解冻。").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "order_title": z.string().describe("商户业务订单的简单描述，如商品名称等，长度不超过100个字母或50个汉字").optional(),
  "out_request_no": z.string().describe("商户本次操作的请求流水号，用于标识请求流水的唯一性，不能包含除中文、英文、数字以外的字符，需要保证在商户端不重复。").optional(),
  "seller_id": z.string().describe("商户的支付宝用户id。如果该值为空，则默认为商户签约账号对应的支付宝用户ID。").optional(),
  "unfreeze_amount": z.string().describe("需要解冻的金额，单位为：元（人民币），精确到小数点后两位").optional()
}