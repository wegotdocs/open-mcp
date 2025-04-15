import { z } from "zod"

export const inputParams = {
  "free_charging_pile": z.number().int().describe("空闲充电桩车位数").optional(),
  "free_parking_space": z.number().int().describe("车场空闲可用的车位数").optional(),
  "parking_id": z.string().describe("停车场ID").optional(),
  "parking_space_status": z.string().describe("停车场实时状态: 0 拥堵,1 正常，2 空闲").optional()
}