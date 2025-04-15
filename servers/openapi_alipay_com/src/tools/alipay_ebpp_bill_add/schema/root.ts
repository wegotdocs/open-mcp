import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "bank_bill_no": z.string().describe("外部订单号").optional(),
  "bill_date": z.string().describe("账单的账期，格式为 yyyyMMdd。例如：202012表示2020年12月的账单。").optional(),
  "bill_key": z.string().describe("账单单据号，例如水费单号，手机号，电费号，信用卡卡号。没有唯一性要求。").optional(),
  "charge_inst": z.string().describe("支付宝给每个出账机构指定了一个对应的英文短名称来唯一表示该收费单位。").optional(),
  "extend_field": z.string().describe("扩展属性").optional(),
  "merchant_order_no": z.string().describe("输出机构的业务流水号，需要保证唯一性").optional(),
  "mobile": z.string().describe("用户的手机号").optional(),
  "order_type": z.string().describe("支付宝订单类型。枚举支持：\t*JF：公共事业缴纳。\t*WUYE：物业缴费。\t*HK：信用卡还款。\t*TX：通讯缴费。").optional(),
  "owner_name": z.string().describe("拥有该账单的用户姓名").optional(),
  "pay_amount": z.string().describe("缴费金额。用户支付的总金额。单位为 元（人民币）。取值范围为[0.01，100000000.00]，精确到小数点后两位。").optional(),
  "service_amount": z.string().describe("账单的服务费。").optional(),
  "sub_order_type": z.string().describe("子业务类型是业务类型的下一级概念。枚举支持：\t*WATER：缴水费。\t*ELECTRIC：缴电费。\t*GAS：缴燃气费。\t*COMMUN：缴固话宽带费。\t*CATV：缴有线电视费。\t*WUYE：缴物业费。\t*RC：定期还车贷代扣。\t*RH：定期还房贷代扣。\t*RR：定期还房租代扣。\t*RN：定期还网贷代扣。\t*CZ：手机充值代扣。\t例如：WATER表示JF下面的水费。").optional(),
  "traffic_location": z.string().describe("交通违章地点，sub_order_type=TRAFFIC时填写。").optional(),
  "traffic_regulations": z.string().describe("违章行为，sub_order_type=TRAFFIC时填写。").optional()
}