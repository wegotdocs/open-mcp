import { z } from "zod"

export const inputParams = {
  "agreement_query": z.boolean().describe("是否启用车牌代扣状态查询功能，true为启用，false为停用").optional(),
  "charge_info_list": z.array(z.object({ "charge_fee": z.string().describe("计费金额；单位元；").optional(), "charge_node": z.string().describe("START_CHARGING：开始计费\tFEE_INCREASE：费用增加\tTO_TOP：日封顶").optional(), "charge_time": z.string().describe("开始计费或者费用增加的时间；传东八区时间；").optional() })).describe("本次行程收费计划清单").optional(),
  "entrance_name": z.string().describe("车辆进入停车场的入口通道名称").optional(),
  "entrance_number": z.number().int().describe("车辆进入停车场的入口通道编号；按线下实际编号为准；").optional(),
  "free_enter_minutes": z.string().describe("当前停车场的入场免费时长分钟数").optional(),
  "in_time": z.string().describe("车辆入场的时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，入场时间不应晚于当前网络时间").optional(),
  "is_encrypt_plate_no": z.boolean().describe("车牌是否加密，true为加密，false为不加密，默认为false").optional(),
  "membership_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `membership_info` to the tool, first call the tool `expandSchema` with \"/properties/membership_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "need_charge": z.boolean().describe("当前行程是否需要计费。true：需要，false：不需要。不传默认为true。").optional(),
  "open_appid": z.string().describe("蚂蚁会员统一ID对应的归属应用appid").optional(),
  "open_id": z.string().describe("蚂蚁会员统一ID").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "parking_id": z.string().describe("支付宝停车平台ID，由支付宝定义的该停车场标识，同一个isv或商户范围内唯一。通过 alipay.eco.mycar.parking.parkinglotinfo.create\t(录入停车场信息)接口获取。").optional(),
  "plate_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "plate_no": z.string().describe("车牌号（支持加密格式）").optional(),
  "service_url": z.string().describe("停车服务页面地址。\t1、服务商停车服务页面地址必须是支付宝小程序URL（无需转换https），详见：https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F\t\t2、若服务商没有服务链接，可传输支付宝停车官方小程序的服务链接：alipays://platformapi/startapp?appId=2021001102642986&page=pages%2Fparking-fee%2Findex\t\t3、若此次对接的是无感支付，则服务链接传输为：alipays://platformapi/startapp?appId=2021001102642986&page=%2Fpages%2Fparking-bill%2Findex").optional()
}