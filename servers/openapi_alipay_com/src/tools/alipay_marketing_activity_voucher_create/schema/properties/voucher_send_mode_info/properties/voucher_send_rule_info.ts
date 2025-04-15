import { z } from "zod"

export const inputParams = {
  "max_quantity_by_day": z.number().int().describe("设置此字段，允许指定单天最大发券数量。").optional(),
  "natural_person_limit": z.boolean().describe("是否开启自然人领取限制。 自然人表示按照身份证纬度进行领取限制。").optional(),
  "phone_number_limit": z.boolean().describe("是否开启电话号码领取限制。").optional(),
  "phone_number_need_input_limit": z.boolean().describe("下单时是否需要用户填写手机号码").optional(),
  "publish_end_time": z.string().describe("券发放结束时间。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "publish_start_time": z.string().describe("券发放开始时间。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "quantity": z.number().int().describe("发行券的数量。").optional(),
  "quantity_limit_per_user": z.number().int().describe("每人领取限制。 默认按照支付宝账号进行领取限制; 不填写或填入0表示没有领取限制.").optional(),
  "quantity_limit_per_user_period_type": z.string().describe("周期限领配置,限制每人在固定周期内领取张数(voucher_quantity_limit_per_user),默认LIFE_CYCLE").optional(),
  "real_name_limit": z.boolean().describe("限制支付宝实名用户才能领取支付券,默认为false表示不限制 枚举值 true\\false").optional()
}