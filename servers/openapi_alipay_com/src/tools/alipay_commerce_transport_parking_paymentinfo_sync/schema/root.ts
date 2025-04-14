import { z } from "zod"

export const inputParams = {
  "alipay_trade_no": z.string().describe("支付宝交易号；").optional(),
  "discount_amount": z.string().describe("停车费折扣金额；单位元；").optional(),
  "discount_information": z.array(z.object({ "discount_amount": z.string().describe("折扣金额；单位元；").optional(), "discount_type": z.string().describe("折扣类型；\tCOMPREHENSIVE：综合；\tDISCOUNT：打折；\tVOUCHER：券；\tPOINTS：积分；").optional() })).describe("停车费缴费折扣信息；").optional(),
  "free_exit_minutes": z.string().describe("停车场内缴费后，允许出场的免费时长分钟数").optional(),
  "inactive_user": z.boolean().describe("365天未使用支付宝付停车费用户").optional(),
  "is_encrypt_plate_no": z.boolean().describe("车牌是否加密，true为加密，false为不加密，默认为false").optional(),
  "mobile_number": z.string().describe("缴费用户的手机号；").optional(),
  "open_appid": z.string().describe("蚂蚁会员统一ID对应的归属应用appid").optional(),
  "open_id": z.string().describe("蚂蚁会员统一ID").optional(),
  "out_order_no": z.string().describe("服务商停车费支付订单号；").optional(),
  "out_serial_no": z.string().describe("外部停车流水号(用于串通进场与出场信息)").optional(),
  "pay_frequency": z.string().describe("用户在支付宝侧支付停车费次数").optional(),
  "payment_amount": z.string().describe("停车费实付金额；单位元；").optional(),
  "payment_time": z.string().describe("场内缴费时间，格式\"YYYY-MM-DD HH:mm:ss\"，24小时制，请保证服务器时间准确，场内缴费不应晚于当前网络时间").optional(),
  "payment_type": z.string().describe("支付方式；\tALIPAY：支付宝\tWECHAT：微信\tCUQP：云闪付\tCASH：现金\tOTHER：其他渠道\tFREE: 免费").optional(),
  "payment_user_open_id": z.string().describe("停车缴费用户的OPENID；").optional(),
  "plate_color": z.string().describe("车牌颜色，车牌颜色，枚举支持：\t*BLUE：蓝。\t*GREEN：绿。\t*YELLOW：黄。\t*WHITE：白。\t*BLACK：黑。\t*LIMEGREEN：黄绿色。").optional(),
  "plate_no": z.string().describe("车牌号（支持加密格式）").optional(),
  "service_url": z.string().describe("停车服务页面地址。\t1、服务商停车服务页面地址必须是支付宝小程序URL（无需转换https），详见： <a href=\"https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F \"> https://opendocs.alipay.com/support/01rb18#URL%20%E6%A0%BC%E5%BC%8F  </a>\t2、若服务商没有服务链接，可传输支付宝停车官方小程序的服务链接：alipays://platformapi/startapp?appId=2021001102642986&page=pages%2Fparking-fee%2Findex \t3、若此次对接的是无感支付，则服务链接传输为：alipays://platformapi/startapp?appId=2021001102642986&page=%2Fpages%2Fparking-bill%2Findex").optional(),
  "total_amount": z.string().describe("停车费总金额；单位元；理论应等于实付金额+折扣金额").optional()
}