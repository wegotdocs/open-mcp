import { z } from "zod"

export const inputParams = {
  "service_code": z.string().describe("服务代码。通过<a href=\"https://opendocs.alipay.com/apis/01dmgh\">alipay.iservice.ccm.service.initialize</a>(isv服务初始化接口) 获取。").optional()
}