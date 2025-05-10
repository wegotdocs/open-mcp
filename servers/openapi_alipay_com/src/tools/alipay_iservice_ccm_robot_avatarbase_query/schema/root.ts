import { z } from "zod"

export const inputParams = {
  "commodity_code": z.string().describe("开通的数字人的商品码").optional(),
  "method_params": z.string().describe("method_params:对应target_method请求方法的具体传参值k-v map").optional(),
  "target_method": z.string().describe("targetMethod；数字人目标方法调用").optional(),
  "tenant_code": z.string().describe("租户code&租户id，对于子部门客户需要上传子部门id").optional()
}