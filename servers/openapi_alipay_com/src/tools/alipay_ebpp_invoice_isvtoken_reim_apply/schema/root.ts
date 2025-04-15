import { z } from "zod"

export const inputParams = {
  "isv_app_code": z.string().describe("报销软件app对应的isv app code，由支付宝进行分配。详情参见 <a href=\"https://opendocs.alipay.com/open/017fwh\">\"推\"模式发票报销</a>").optional()
}