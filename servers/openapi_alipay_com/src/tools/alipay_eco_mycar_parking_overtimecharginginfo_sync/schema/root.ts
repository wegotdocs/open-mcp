import { z } from "zod"

export const inputParams = {
  "car_number": z.string().describe("车牌号").optional(),
  "isv_url": z.string().describe("智能助理当前的跳转链接").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create(录入停车场信息)接口获取。").optional(),
  "serial_no": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程").optional()
}