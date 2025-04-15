import { z } from "zod"

export const inputParams = {
  "max_quantity_by_day": z.number().int().describe("设置此字段，允许指定单天最大发券数量。\t\t限制:\t每天发放张数*活动天数应小于等于优惠券发放总量").optional(),
  "natural_person_limit": z.boolean().describe("限制相同身份证号领取次数(voucher_quantity_limit_per_user)。默认false不限制。\t枚举值\ttrue：是\tfalse：否").optional(),
  "phone_number_limit": z.boolean().describe("限制相同手机号领取次数(voucher_quantity_limit_per_user)。默认false不限制\t枚举值\ttrue：是\tfalse：否").optional(),
  "real_name_limit": z.boolean().describe("限制支付宝实名用户才能领取支付券,默认为false表示不限制\t枚举值\ttrue\\false").optional(),
  "voucher_quantity": z.number().int().describe("发行券的总数量。\t限制：\t1、发放总个数最少1个\t2、发放总个数最多99999999个").optional(),
  "voucher_quantity_limit_per_user": z.number().int().describe("每人领取限制。 默认按照支付宝账号进行领取限制; \t不填写或填入0表示没有领取限制.").optional(),
  "voucher_quantity_limit_per_user_period_type": z.string().describe("周期限领配置,限制每人在固定周期内领取张数(voucher_quantity_limit_per_user),默认LIFE_CYCLE").optional()
}