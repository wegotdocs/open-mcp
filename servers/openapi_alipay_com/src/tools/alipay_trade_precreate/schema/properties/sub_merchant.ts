import { z } from "zod"

export const inputParams = {
  "merchant_id": z.string().describe("支付宝二级商户编号。\t间连受理商户的支付宝商户编号，通过间连商户入驻接口后由支付宝生成。\t直付通和机构间连业务场景下必传。").optional(),
  "merchant_type": z.string().describe("二级商户编号类型。\t枚举值：\talipay:支付宝分配的间联商户编号；\t目前仅支持alipay，默认可以不传。").optional()
}