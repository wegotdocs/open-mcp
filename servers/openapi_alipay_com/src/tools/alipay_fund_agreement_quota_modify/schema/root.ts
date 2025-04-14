import { z } from "zod"

export const inputParams = {
  "agreement_quota_modify_list": z.array(z.object({ "agreement_no": z.string().describe("授权协议号").optional(), "quota_details": z.array(z.object({ "quota_amount": z.string().describe("具体额度，单位：元。如金额为空，表示删除已有的额度设置，无已有额度设置则忽略。").optional(), "quota_dimension": z.string().describe("额度维度\tMONTH/DAY/SINGLE\t分别代表月、日、单次").optional(), "role": z.string().describe("PAYER/PAYEE\t额度管控的角色，收or付款方，目前只支持付款方").optional() })).describe("设置额度明细").optional() })).describe("协议额度设置信息").optional(),
  "biz_scene": z.string().describe("场景码，非固定值，使用的对应的资金场景码保持一致").optional(),
  "product_code": z.string().describe("额度产品码，非固定值，使用的对应的资金产品码保持一致").optional()
}