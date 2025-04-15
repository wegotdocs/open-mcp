import { z } from "zod"

export const inputParams = {
  "mini_app_service_codes": z.array(z.string()).describe("小程序服务编码。取值来源：通过<a href=\"https://opendocs.alipay.com/mini/03cgoq?pathHash=49cde24b&scene=common&highlight_field=service_code\" target=\"_blank\">alipay.open.app.service.apply(小程序服务创建)</a>接口创建服务后获取。").optional(),
  "mini_app_url": z.string().describe("小程序核销链接").optional()
}