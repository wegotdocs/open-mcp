import { z } from "zod"

export const inputParams = {
  "settle_entity_biz_type": z.string().describe("结算主体资产业务类型，settled 表示已结算资产").optional(),
  "settle_entity_id": z.string().describe("结算主体账号\t当结算主体类型为SecondMerchant，本参数为二级商户的SecondMerchantID；当结算主体类型为MerchantStore，本参数为商户门店ID。").optional(),
  "settle_entity_type": z.string().describe("结算主体类型\tSecondMerchant：结算主体为二级商户；Store：结算主体为商户门店").optional()
}