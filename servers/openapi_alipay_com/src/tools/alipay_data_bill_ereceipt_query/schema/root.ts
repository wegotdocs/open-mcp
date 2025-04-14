import { z } from "zod"

export const inputParams = {
  "file_id": z.string().describe("根据申请id查询状态。通过 <a href=\"https://opendocs.alipay.com/apis/api_15/alipay.data.bill.ereceipt.apply\">alipay.data.bill.ereceipt.apply(申请电子回单(incubating))</a> 接口同步响应获取。").optional()
}