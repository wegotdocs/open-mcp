import { z } from "zod"

export const inputParams = {
  "business_hours": z.string().describe("营业时间").optional(),
  "car_daylight_advanced_price": z.string().describe("小车-白天 非首个计费单元价格").optional(),
  "car_daylight_base_price": z.string().describe("小车-白天 首个计费单元价格").optional(),
  "car_night_advanced_price": z.string().describe("小车-夜间 非首个计费单元价格").optional(),
  "car_night_base_price": z.string().describe("小车-夜间 首个计费单元价格").optional(),
  "car_onetime_price": z.string().describe("小车 计次收费价格\r\txx元 / 次，按次收费的车场填写").optional(),
  "daily_price_upperbound": z.string().describe("单日停车封顶价格：具体值或“不封顶”").optional(),
  "daylight_business_hours": z.string().describe("车场白天（收费）营业时间段").optional(),
  "free_period": z.string().describe("单次停车免费时长").optional(),
  "has_charging_pile": z.string().describe("是否有充电桩: -1 未知,0 否,1 是").optional(),
  "is_charge": z.string().describe("是否收费：-1 未知,0 否,1 是").optional(),
  "night_business_hours": z.string().describe("车场夜间（收费）营业时间段").optional(),
  "parking_id": z.string().describe("停车场ID").optional(),
  "parking_space_count": z.number().int().describe("总车位数").optional(),
  "remark": z.string().describe("复杂计费补充描述\r\t收费复杂无法格式化的车场填写，以文本形式表述").optional(),
  "truck_daylight_advanced_price": z.string().describe("大车-白天 非首个计费单元价格").optional(),
  "truck_daylight_base_price": z.string().describe("大车-白天 首个计费单元价格").optional(),
  "truck_night_advanced_price": z.string().describe("大车-夜间 非首个计费单元价格").optional(),
  "truck_night_base_price": z.string().describe("大车-夜间 首个计费单元价格").optional(),
  "truck_onetime_price": z.string().describe("大车 计次收费价格\r\txx元 / 次，按次收费的车场填写").optional()
}