import { z } from "zod"

export const inputParams = {
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "flow_id": z.string().describe("流程id，通过 <a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.contract.signflows.create\">创建电子合同签署流程</a>(alipay.eco.contract.signflows.create)接口获取。").optional()
}