import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("用户ID").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议Id。若协议id不传递，则需要保证业务类型、子业务类型、出账机构、户号必传").optional(),
  "biz_type": z.string().describe("业务类型。\r\tJF：缴水、电、燃气、固话宽带、有线电视、交通罚款费用\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tTX：手机充值").optional(),
  "sub_biz_type": z.string().describe("业务子类型。\r\tWATER：缴水费\r\tELECTRIC：缴电费\r\tGAS：缴燃气费\r\tCOMMUN：缴固话宽带\r\tCATV：缴有线电视费\r\tTRAFFIC：缴交通罚款\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tCZ：手机充值").optional(),
  "charge_inst": z.string().describe("支付宝缴费系统中的出账机构ID").optional(),
  "bill_key": z.string().describe("户号，机构针对于每户的水、电都会有唯一的标识户号").optional()
}