import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("券可用的小程序 appId，卡包详情页可跳转到该 appId。").optional(),
  "mini_app_path": z.string().describe("指定跳转到 mini_app_id 时的具体页面路径。").optional(),
  "service_codes": z.array(z.string()).describe("小程序服务编码，通过 alipay.open.app.appcontent.function.create(小程序服务创建)接口创建服务后获取。").optional()
}