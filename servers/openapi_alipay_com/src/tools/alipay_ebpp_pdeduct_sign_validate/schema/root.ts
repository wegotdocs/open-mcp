import { z } from "zod"

export const inputParams = {
  "agent_channel": z.string().describe("机构签约代扣来源渠道\r\tPUBLICPLATFORM：服务窗").optional(),
  "agent_code": z.string().describe("从服务窗发起则为该服务窗的appid的值").optional(),
  "bill_key": z.string().describe("户号，机构针对于每户的水、电都会有唯一的标识户号").optional(),
  "biz_type": z.string().describe("业务类型。\r\tJF：缴水、电、燃气、固话宽带、有线电视、交通罚款费用\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tTX：手机充值").optional(),
  "charge_inst": z.string().describe("支付宝缴费系统中的出账机构ID").optional(),
  "deduct_type": z.string().describe("签约类型,可为空。目前类型有INST_DIRECT_DEDUCT").optional(),
  "extend_field": z.string().describe("扩展字段").optional(),
  "notify_config": z.string().describe("通知方式设置，本期预留字段，固定传空。").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_agreement_id": z.string().describe("外部机构签约的协议id").optional(),
  "owner_name": z.string().describe("户名，户主真实姓名").optional(),
  "pay_config": z.string().describe("支付工具设置，目前可为空。类型有：BALANCE;CARTOON;BIGAMOUNT_CREDIT_CARTOON;DEBIT_EXPRESS;OPTIMIZED_MOTO;PCREDIT_PAY;MONEY_FUND").optional(),
  "pid": z.string().describe("商户签约支付宝账号的userid，2088开头16位长度的字符串，在支付宝系统中唯一").optional(),
  "sign_expire_date": z.string().describe("签约到期时间。空表示无限期，一期固定传空。").optional(),
  "sub_biz_type": z.string().describe("业务子类型。\r\tWATER：缴水费\r\tELECTRIC：缴电费\r\tGAS：缴燃气费\r\tCOMMUN：缴固话宽带\r\tCATV：缴有线电视费\r\tTRAFFIC：缴交通罚款\r\tWUYE：缴物业费\r\tHK：信用卡还款\r\tCZ：手机充值").optional(),
  "user_id": z.string().describe("用户支付宝账号id，2088开头16位长度的字符串，在支付宝系统中唯一").optional()
}