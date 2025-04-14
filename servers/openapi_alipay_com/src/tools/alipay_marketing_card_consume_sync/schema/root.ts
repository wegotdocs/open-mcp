import { z } from "zod"

export const inputParams = {
  "act_pay_amount": z.string().describe("用户实际付的现金金额\t\t1.针对预付卡面额的核销金额在use_benefit_list展现，作为权益金额\t\t2.权益金额不叠加在该金额上").optional(),
  "card_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `card_info` to the tool, first call the tool `expandSchema` with \"/properties/card_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "gain_benefit_list": z.array(z.object({ "amount": z.string().describe("PRE_FUND：实际核销或者商户赠送的金额\t\tDISCOUNT：实际折扣掉的金额（获取权益不支持该类型）\t\tCOUPON：实际核销或者商户赠送的券").optional(), "benefit_type": z.string().describe("权益类型").optional(), "count": z.string().describe("COUPON：当核销或者赠送券时，可以设置该值").optional(), "description": z.string().describe("产生核销或者赠送权益的描述").optional() })).describe("获取权益列表").optional(),
  "memo": z.string().describe("备注信息，现有直接填写门店信息").optional(),
  "shop_code": z.string().describe("门店编号").optional(),
  "swipe_cert_type": z.string().describe("产生该笔交易时，用户出具的凭证类型。枚举支持：\t*ALIPAY：支付宝电子卡；\t*ENTITY：实体卡；\t*OTHER：其他。").optional(),
  "target_card_no": z.string().describe("支付宝业务卡号，即通过<a  href=\"https://opendocs.alipay.com/apis/009zw3\">alipay.marketing.card.open</a>(会员卡开卡)接口开卡后获取的  card_info.biz_card_no 值。").optional(),
  "target_card_no_type": z.string().describe("卡号ID类型。支持：\t*BIZ_CARD：支付宝业务卡号（商户会员卡场景使用）。").optional(),
  "trade_amount": z.string().describe("交易金额：本次交易的实际总金额（可认为标价金额）").optional(),
  "trade_name": z.string().describe("交易名称。为空时支付宝将根据交易类型提供默认名称。").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional(),
  "trade_time": z.string().describe("线下交易时间，为用户付款的交易时间。\t说明：当交易时间晚于上次消费记录同步时间时，将变更会员卡信息。").optional(),
  "trade_type": z.string().describe("交易类型。枚举支持：\t*开卡：OPEN；\t*消费：TRADE；\t*充值：DEPOSIT；\t*退卡：RETURN。").optional(),
  "use_benefit_list": z.array(z.object({ "amount": z.string().describe("PRE_FUND：实际核销或者商户赠送的金额\t\tDISCOUNT：实际折扣掉的金额（获取权益不支持该类型）\t\tCOUPON：实际核销或者商户赠送的券").optional(), "benefit_type": z.string().describe("权益类型").optional(), "count": z.string().describe("COUPON：当核销或者赠送券时，可以设置该值").optional(), "description": z.string().describe("产生核销或者赠送权益的描述").optional() })).describe("实际消耗的权益").optional()
}