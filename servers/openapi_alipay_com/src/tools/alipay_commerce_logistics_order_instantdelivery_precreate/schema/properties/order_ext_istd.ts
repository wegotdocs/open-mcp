import { z } from "zod"

export const inputParams = {
  "cash_on_delivery": z.string().describe("骑手应付金额，单位元").optional(),
  "cash_on_pickup": z.string().describe("骑手应收金额，单位元").optional(),
  "consumer_order_time": z.string().describe("消费者下单时间").optional(),
  "delivery_direction": z.number().int().describe("物流流向，1：从门店取件送至用户；2：从用户取件送至门店").optional(),
  "delivery_type": z.number().int().describe("配送类型, 0: 即时单 1 预约单").optional(),
  "desc": z.string().describe("备注").optional(),
  "expected_delivery_time": z.string().describe("期望派单时间").optional(),
  "expected_finish_time": z.string().describe("期望送达时间").optional(),
  "expected_pick_time": z.string().describe("期望取件时间").optional(),
  "insure_price": z.string().describe("保价金额").optional(),
  "is_direct_delivery": z.number().int().describe("是否直拿直送，1:直拿直送 0:非直拿直送").optional(),
  "is_finish_code_needed": z.number().int().describe("是否需要收货码，1:需要 0:不需要").optional(),
  "is_insured": z.number().int().describe("是否保价，1:保价 0:不保价").optional(),
  "is_pickup_code_needed": z.number().int().describe("是否需要取货码，1:需要 0:不需要").optional(),
  "poi_seq": z.string().describe("门店订单流水号").optional(),
  "service_code": z.string().describe("即时配送公司的服务代码").optional()
}