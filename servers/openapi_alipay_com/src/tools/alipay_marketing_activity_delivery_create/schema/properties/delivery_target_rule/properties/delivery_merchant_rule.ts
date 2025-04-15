import { z } from "zod"

export const inputParams = {
  "brand_id_list": z.array(z.string()).describe("指定品牌id。 说明：如商户需选择某个品牌下维护的收款账号，请上传相关品牌id").optional(),
  "delivery_merchant_infos": z.array(z.object({ "merchant_id": z.string().describe("商户id").optional(), "merchant_id_type": z.string().describe("商户id类型。").optional() })).describe("曝光商户选取列表。 说明：需要传入您期望曝光的商户的商户号，传入为空时默认使用投放优惠券活动的适用范围。 限制：曝光商户号需与投放归属商户号相同，或传入有跨主体授权关系的商户号或有弱绑定关系的M3账号").optional(),
  "delivery_merchant_mode": z.string().describe("指定支付成功页模式。").optional()
}