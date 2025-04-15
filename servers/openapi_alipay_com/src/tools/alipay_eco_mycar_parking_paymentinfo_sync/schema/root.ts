import { z } from "zod"

export const inputParams = {
  "car_number": z.string().describe("车牌号").optional(),
  "isv_url": z.string().describe("停车消息透出后，消息详情的落地承接页链接，可配置ISV维度的统一值").optional(),
  "out_serial_no": z.string().describe("外部业务停车流水号(用于串通进场与出场信息)。如果\tout_serial_no与serial_no都传递，则一起校验。\t● serial_no与out_serial_no二选一必填。\t● 入参有serial_no和out_serial_no，则优先根据serial_no和out_serial_no一起匹配进出场事件\t● 入参仅有serial_no，则优先根据serial_no匹配进出场事件\t● 入参仅有out_serial_no，则根据out_serial_no匹配进出场事件").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create(录入停车场信息)接口获取。").optional(),
  "payment_free_minutes": z.number().int().describe("停车场内缴费后，允许出场的免费时长分钟数").optional(),
  "payment_time": z.string().describe("场内缴费时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，场内缴费不应晚于当前网络时间").optional(),
  "serial_no": z.string().describe("支付宝业务流水号(用于串通进场与出场信息)。可通过 alipay.eco.mycar.parking.enterinfo.sync\t(车辆驶入接口)接口获取。\t● serial_no与out_serial_no二选一必填。\t● 入参有serial_no和out_serial_no，则优先根据serial_no和out_serial_no一起匹配进出场事件\t● 入参仅有serial_no，则优先根据serial_no匹配进出场事件\t● 入参仅有out_serial_no，则根据out_serial_no匹配进出场事件").optional()
}