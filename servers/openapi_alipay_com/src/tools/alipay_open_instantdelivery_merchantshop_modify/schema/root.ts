import { z } from "zod"

export const inputParams = {
  "contact_name": z.string().describe("联系人姓名").optional(),
  "logistics_codes": z.array(z.string()).describe("要更新的配送公司列表，必须包含已经创建过该门店的配送公司，可以新增开通了账户的配送公司").optional(),
  "out_biz_no": z.string().describe("外部业务号").optional(),
  "phone": z.string().describe("联系人电话/手机号").optional(),
  "shop_no": z.string().describe("商家门店编码").optional()
}