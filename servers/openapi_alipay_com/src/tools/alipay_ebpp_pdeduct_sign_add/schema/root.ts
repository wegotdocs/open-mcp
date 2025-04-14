import { z } from "zod"

export const inputParams = {
  "agent_channel": z.string().describe("机构签约代扣来源渠道\r\tPUBLICPLATFORM：服务窗").optional(),
  "agent_code": z.string().describe("从服务窗发起则为publicId的值").optional(),
  "bill_key": z.string().describe("户号，机构针对于每户的水、电都会有唯一的标识户号").optional(),
  "biz_type": z.string().describe("业务类型。枚举支持：\t*JF：公共事业缴纳。\t*WUYE：物业缴费。\t*HK：信用卡还款。\t*TX：通讯缴费。\t*IND：保险缴费。").optional(),
  "charge_inst": z.string().describe("支付宝缴费系统中的出账机构ID").optional(),
  "deduct_prod_code": z.string().describe("代扣产品码。 缴费业务场景中，传入INST_DIRECT_DEDUCT。保险业务场景中, 传入INSURANCE_MERCHANT_DEDUCT。").optional(),
  "deduct_type": z.string().describe("签约类型可为空").optional(),
  "ext_user_info": z.string().describe("外部用户实名认证相关信息, 用于做签约时的实名校验。 \r\t注： \r\t\r\tname: 姓名\r\tcert_type: 身份证：IDENTITY_CARD、护照：PASSPORT、军官证：OFFICER_CARD、士兵证：SOLDIER_CARD、户口本：HOKOU等\r\tcert_no: 证件号码\r\tneed_check_info取值 T/F，只有为T时才做强制校验。\r\tmobile:手机号，目前暂不使用此字段做校验\r\tmin_age: 允许的最小买家年龄,min_age为整数，必须大于等于0.").optional(),
  "extend_field": z.string().describe("扩展字段").optional(),
  "notify_config": z.string().describe("通知方式设置，可为空").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_agreement_id": z.string().describe("外部产生的协议ID").optional(),
  "owner_name": z.string().describe("户名，户主真实姓名").optional(),
  "pay_config": z.string().describe("支付工具设置，目前可为空").optional(),
  "pay_password_token": z.string().describe("支付密码鉴权token，需要用户首先处于登陆态，然后访问https://ebppprod.alipay.com/deduct/enterMobileicPayPassword.htm?cb=自己指定的回跳连接地址，访问页面后会进到独立密码校验页，用户输入密码校验成功后，会生成token回调到指定的回跳地址，如果设置cb=www.alipay.com则最后回调的内容是www.alipay.com?token=312314ADFDSFAS，然后签约时直接取得地址后token的值即可。").optional(),
  "pid": z.string().describe("商户id，商户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "sign_expire_date": z.string().describe("签约到期时间。空表示无限期，一期固定传空。").optional(),
  "sub_biz_type": z.string().describe("业务子类型。业务子类型是业务类型的下一级概念。枚举支持：\t*WATER：缴水费。\t*ELECTRIC：缴电费。\t*GAS：缴燃气费。\t*COMMUN：缴固话宽带费。\t*CATV：缴有线电视费。\t*TRAFFIC：缴交通罚款。\t*WUYE：缴物业费。\t*RC：定期还车贷代扣。\t*RH：定期还房贷代扣。\t*RR：定期还房租代扣。\t*RN：定期还网贷代扣。\t*CZ：手机充值代扣。\t*CAR：车险。\t*LIFE：寿险。\t*HEALTH：健康险。\t例如：WATER表示JF下面的水费。").optional(),
  "user_id": z.string().describe("用户 id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional()
}