import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("芝麻go协议号，唯一标识一个芝麻go协议。为必传入参。").optional(),
  "amount_type_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `amount_type_data` to the tool, first call the tool `expandSchema` with \"/properties/amount_type_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "biz_action": z.string().describe("数据回传的动作类型，为枚举值，为必传入参。\t可取值：\t(\"ORDER_PAID\", \"正向支付\")，(\"ORDER_REFUND\", \"逆向退款\")。\t其中ORDER_PAID表示回传为正向的，即订单金额累加，优惠累加，任务次数累加；而ORDER_REFUND表示回传为逆向的，即订单金额退款，优惠退款，任务次数回退。").optional(),
  "biz_time": z.string().describe("交易发生时间，包括：订单交易时间，优惠核销时间，以及任务完成时间。为必传入参。\t如：用户在【2019-03-08 00:00:00】核销了一个红包，但是【2019-03-10 00:00:00】才进行数据回传，此时biz_time取值红包核销的时间，也就是【2019-03-08 00:00:00】。").optional(),
  "cumulate_data_type": z.string().describe("累计类型。为枚举值，为必传入参。\t可取值：(\"AMOUNT\", \"金额类型\")，(\"TASK\", \"任务类型\")，(\"AMOUNT_TASK\", \"额度和任务类型\")。\t其中，交易解耦模式仅允许AMOUNT或TASK。而交易绑定模式下，仅允许AMOUNT_TASK。").optional(),
  "ext_info": z.string().describe("扩展字段，格式为Json格式的字符串，非必传。").optional(),
  "has_alipay_trade": z.boolean().describe("是否为支付宝交易。仅在累计模式为【交易绑定模式】下被消费。当芝麻Go模板配置的累计模式为交易绑定模式时，此时需传入扩展参数是否为支付宝交易。若是支付宝交易，传值true，否则为false。若不传此字段，默认为false。\t若为true，则会对交易号trade_no进行校验，校验是否为支付宝交易，以及用户userId和商户partnerId是否一致，若校验不通过，累计失败。").optional(),
  "open_id": z.string().describe("用户userId，蚂蚁统一会员ID，为必传入参。").optional(),
  "out_biz_no": z.string().describe("外部业务号。需保证唯一，为必传入参。\t若接口调用失败，提示信息为更换幂等号，商户更换此字段重新发起调用。").optional(),
  "partner_id": z.string().describe("商户ID，为必传入参。").optional(),
  "pay_out_biz_no": z.string().describe("逆向对应的正向外部业务号。逆向场景为必传入参。也就是biz_action为ORDER_REFUND时为必传入参。\t逆向时需通过此字段明确对应的正向的外部业务号。").optional(),
  "request_from": z.string().describe("取固定值ExternalMerchantSource，为必传入参。表示数据回传来源为外部商户，数据回传内部逻辑需感知。").optional(),
  "task_type_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `task_type_data` to the tool, first call the tool `expandSchema` with \"/properties/task_type_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "user_id": z.string().describe("用户userId，蚂蚁统一会员ID，为必传入参。").optional()
}