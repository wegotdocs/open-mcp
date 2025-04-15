import { z } from "zod"

export const inputParams = {
  "actual_amount": z.string().describe("实际金额").optional(),
  "car_color": z.string().describe("车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "car_number": z.string().describe("车牌号").optional(),
  "discount_amount": z.string().describe("折扣金额").optional(),
  "exit_id": z.string().describe("用于识别车辆出口，多出入口车场适用").optional(),
  "is_encrypt_car_number": z.boolean().describe("是否加密，默认为false").optional(),
  "isv_url": z.string().describe("智能助理当前的跳转链接").optional(),
  "order_amount": z.string().describe("订单总金额").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "out_time": z.string().describe("车辆离场时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个ISV或商户范围内唯一。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口获取。").optional(),
  "serial_no": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.enterinfo.sync\">alipay.eco.mycar.parking.enterinfo.sync</a>(车辆驶入接口)接口获取。").optional(),
  "space_number": z.string().describe("用于标识车辆停放车位编号，路侧适用").optional(),
  "store_id": z.string().describe("与parking_id对应的外部停车场编号，在门店中维护").optional()
}