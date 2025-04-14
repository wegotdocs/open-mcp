import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("累计类型为金额类型的累计名称。为必传入参。").optional(),
  "out_discount_infos": z.array(z.object({ "discount_amount": z.string().describe("商户回传的优惠金额，如用户享受的红包金额，单位元").optional(), "discount_name": z.string().describe("商户数据回传的优惠信息的名称").optional(), "discount_type": z.string().describe("优惠信息的类型。为枚举值，商户可任意选择一个值作为入参传入。可取值：\t(\"exclusiveBenefit\",\"专享优惠\"),\t(\"exclusiveDiscount\",\"专享折扣\"),\t(\"appreciationBenefit\", \"增值权益\"),\t(\"memberPoint\", \"会员积分\")").optional() })).describe("优惠信息。为List类型，支持传入多笔优惠，大部分场景传入一笔。包含：优惠名称，优惠类型，优惠金额（单位元）。\t字段必传场景：\t1.当累计模式为【交易绑定模式】时，为必传入参。\t2.当累计模式为【交易解耦模式】，同时需要累计优惠信息时，为必传入参。").optional(),
  "trade_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `trade_info` to the tool, first call the tool `expandSchema` with \"/properties/amount_type_data/properties/trade_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}