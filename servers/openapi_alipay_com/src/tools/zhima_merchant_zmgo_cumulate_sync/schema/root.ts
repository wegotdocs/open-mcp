import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("芝麻go协议号，唯一标识一个芝麻go协议。").optional(),
  "amount_type_sync_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `amount_type_sync_data` to the tool, first call the tool `expandSchema` with \"/properties/amount_type_sync_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "biz_action": z.string().describe("数据回传的动作类型。枚举如下：\t* POSITIVE：正向回传，即订单金额累加，优惠累加，任务次数累加。\t* REVERSE：逆向回传，即订单金额退款，优惠退款，任务次数回退。").optional(),
  "biz_time": z.string().describe("回传数据发生的实际时间，包括：订单交易时间，优惠核销时间，以及任务完成时间。为必传入参。 如：用户在【2019-03-08 00:00:00】核销了一个红包，但是【2019-03-10 00:00:00】才进行数据回传，此时biz_time取值红包核销的时间，也就是【2019-03-08 00:00:00】。").optional(),
  "data_type": z.string().describe("回传数据类型，枚举：\tTASK - 进度型，影响进度\tDISCOUNT - 优惠型").optional(),
  "discount_type_sync_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `discount_type_sync_data` to the tool, first call the tool `expandSchema` with \"/properties/discount_type_sync_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "open_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "out_biz_no": z.string().describe("外部业务号，唯一标识一笔回传数据。").optional(),
  "provider_pid": z.string().describe("数据回传的商户 ID，即和用户发生业务来往的 PID 主体。商户账号在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "refer_out_biz_no": z.string().describe("逆向对应的正向外部业务号。逆向场景为必传入参。也就是biz_action为REVERSE时为必传入参。 逆向时需通过此字段明确对应的正向的外部业务号。").optional(),
  "sub_biz_action": z.string().describe("数据回传动作子类型，枚举值，为必传入参。\tADD - 新增数据\tUPDATE - 修改数据\t备注：UPDATE只能更新金额信息。").optional(),
  "times_type_sync_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `times_type_sync_data` to the tool, first call the tool `expandSchema` with \"/properties/times_type_sync_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "user_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t").optional()
}