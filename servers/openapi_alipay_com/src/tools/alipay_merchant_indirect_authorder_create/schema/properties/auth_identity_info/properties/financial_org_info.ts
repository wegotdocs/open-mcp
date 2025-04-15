import { z } from "zod"

export const inputParams = {
  "financial_org_cert_img": z.array(z.string()).describe("金融机构许可证图片，最多五张（使用图片上传接口）").optional(),
  "financial_org_type": z.string().describe("银行业(BANK)、支付机构(PAYMENT)、保险业(INSURANCE)、交易及结算类金融机构(SETTLE)、OTHER(OTHER)").optional()
}