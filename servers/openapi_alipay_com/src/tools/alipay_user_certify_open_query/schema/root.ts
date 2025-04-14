import { z } from "zod"

export const inputParams = {
  "certify_id": z.string().describe("本次申请操作的唯一标识，通过alipay.user.certify.open.initialize(身份认证初始化服务)接口同步响应获取。").optional()
}