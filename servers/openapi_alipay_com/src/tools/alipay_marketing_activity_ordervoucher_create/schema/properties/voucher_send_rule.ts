import { z } from "zod"

export const inputParams = {
  "natural_person_limit": z.boolean().describe("是否开启自然人领取限制。自然人表示按照身份证纬度进行领取限制。").optional(),
  "phone_number_limit": z.boolean().describe("是否开启电话号码领取限制。").optional(),
  "voucher_quantity": z.number().int().describe("发行券的数量。").optional(),
  "voucher_quantity_limit_per_user": z.number().int().describe("每人领取限制。默认按照支付宝uid进行领取限制;\t不填写或填入0，默认没有领取限制。").optional()
}