import { z } from "zod"

export const inputParams = {
  "file_id": z.string().describe("根据申请id查询状态。申请接口可以参考alipay.data.bill.ereceiptagent.apply").optional(),
  "agreement_no": z.string().describe("协议号，根据不同业务协议类型，传入对应类型的协议号，用于isv授权检查并获取商户信息。如果业务类型未指定，则使用默认类型对应的协议号。").optional(),
  "agreement_type": z.string().describe("根据不同业务协议类型，传入不同参数。传入协议产品码（personal_product_code，通过协议查询接口、协议签约通知响应参数获取），不填的话默认按照示例值传入").optional()
}