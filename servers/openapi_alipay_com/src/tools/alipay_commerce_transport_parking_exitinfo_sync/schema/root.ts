import { z } from "zod"

export const inputParams = {
  "exit_name": z.string().describe("车辆出场的出口通道名称；取实地通道名称；").optional(),
  "exit_number": z.number().int().describe("车辆出场的出口通道编号；与线下实地编码一致；").optional(),
  "is_encrypt_plate_no": z.boolean().describe("车牌是否加密，true为加密，false为不加密，默认为false").optional(),
  "open_appid": z.string().describe("蚂蚁会员统一ID对应的归属应用appid").optional(),
  "open_id": z.string().describe("蚂蚁会员统一ID").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "out_time": z.string().describe("车辆出场的时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，出场时间不应晚于当前网络时间，也不当早于入场时间。").optional(),
  "plate_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "plate_no": z.string().describe("车牌号（支持加密格式）").optional(),
  "service_url": z.string().describe("停车服务页面地址。\t1、服务商停车服务页面地址必须是支付宝小程序URL（无需转换https），详见：https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F 2、若服务商没有服务链接，可传输支付宝停车官方小程序的服务链接：alipays://platformapi/startapp?appId=2021001102642986&page=pages%2Fparking-fee%2Findex 3、若此次对接的是无感支付，则服务链接传输为：alipays://platformapi/startapp?appId=2021001102642986&page=%2Fpages%2Fparking-bill%2Findex").optional()
}