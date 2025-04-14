import { z } from "zod"

export const inputParams = {
  "agent_pid": z.string().describe("该笔停车交易需要返佣的对象实体PID，可能是商户，可能是ISV；只做下沉，用于离线表层面对账。").optional(),
  "car_number": z.string().describe("车牌").optional(),
  "card_number": z.string().describe("如果是停车卡缴费，则填入停车卡卡号，否则为'*'").optional(),
  "in_duration": z.string().describe("停车时长（以分为单位）").optional(),
  "in_time": z.string().describe("入场时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "open_id": z.string().describe("应用用户ID，唯一标识").optional(),
  "order_no": z.string().describe("支付宝支付流水，系统唯一").optional(),
  "order_status": z.string().describe("设备商订单状态，枚举支持：\t* 0：成功。\t* 1：失败。").optional(),
  "order_time": z.string().describe("订单创建时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "out_order_no": z.string().describe("设备商订单号，由ISV系统生成").optional(),
  "out_parking_id": z.string().describe("ISV停车场ID，由ISV定义的停车场标识，同一个isv或商户范围内唯一。需与 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口传入值一致。").optional(),
  "out_time": z.string().describe("出场时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 <a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口获取。").optional(),
  "parking_name": z.string().describe("停车场名称，需与<a href=\"https://opendocs.alipay.com/apis/api_19/alipay.eco.mycar.parking.parkinglotinfo.create\">alipay.eco.mycar.parking.parkinglotinfo.create</a>(录入停车场信息)接口传入值一致。").optional(),
  "parking_record_id": z.string().describe("支付宝业务流水号，用于记录车辆从驶入到驶出的全流程。通过 alipay.eco.mycar.parking.enterinfo.sync(车辆驶入接口)接口获取。").optional(),
  "pay_money": z.string().describe("缴费金额，保留小数点后两位").optional(),
  "pay_scene": z.string().describe("支付场景：INPARKINGLOT_PAY：场内在线缴费；ENTRANCE_EXIT_PAY：出入口缴费、VEH_DEVICE_PAY：车机缴费；会根据场景判断是否发放能量，当前只有场内支付场景会发能量，需要能量发放请与服务接入支持同学提前沟通。").optional(),
  "pay_time": z.string().describe("缴费时间, 格式\"YYYYMM-DD HH:mm:ss\"，24小时制").optional(),
  "pay_type": z.string().describe("付款方式，枚举支持：\t*1：支付宝在线缴费。").optional(),
  "smid": z.string().describe("间连商户ID").optional(),
  "user_id": z.string().describe("停车缴费用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。\t注意：ISV需保证用户 id的正确性，以免导致用户在停车平台查询不到相关的订单信息。").optional()
}