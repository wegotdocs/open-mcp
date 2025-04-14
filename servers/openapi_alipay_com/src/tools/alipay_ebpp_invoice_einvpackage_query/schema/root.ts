import { z } from "zod"

export const inputParams = {
  "encrypted_uid": z.string().describe("加密过的uid。获取详情参见 <a href=\"https://opendocs.alipay.com/open/017fwh\">\"推\"模式发票报销</a>。").optional(),
  "package_id": z.string().describe("发票包id。获取详情参见 <a href=\"https://opendocs.alipay.com/open/017fwh\">\"推\"模式发票报销</a>。").optional()
}