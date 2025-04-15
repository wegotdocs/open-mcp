import { z } from "zod"

export const inputParams = {
  "mini_app_delivery_type": z.string().describe("仅小程序推广可用。").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "service_code_list": z.array(z.string()).describe("小程序服务编码/home_page，通过 alipay.open.app.appcontent.function.create(小程序服务创建)接口创建服务后获取。 限制: 1.只有mini_app_id有值时该值传入才会有效 2.当前只支持一个服务code 3.service_codes必须是已传入的mini_app_id下的小程序").optional()
}