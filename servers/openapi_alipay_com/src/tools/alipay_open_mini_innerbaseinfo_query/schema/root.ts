import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("小程序ID，mini_app_id 和 mini_app_name 两个需要有其中一个必填，当填了mini_app_id时只使用id去进行查询。").optional(),
  "inst_code": z.string().describe("租户code，alipay or taobao").optional(),
  "mini_app_name": z.string().describe("小程序name，mini_app_id 和 mini_app_name 两个需要有其中一个必填，当填了mini_app_id时只使用id去进行查询。").optional(),
  "app_sub_type": z.string().describe("小程序类型，TINYAPP_TEMPLATE，TINYAPP_NORMAL，TINYAPP_PLUGIN，使用mini_app_name查询的时候，该字段要求必传。").optional()
}