import { z } from "zod"

export const inputParams = {
  "voucher_package_id": z.string().describe("券包id，对应alipay.marketing.activity.voucherpackage.query中voucher_package_id。").optional()
}