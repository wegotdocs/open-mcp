import { z } from "zod"

export const inputParams = {
  "home_open": z.boolean().describe("云客服是否在小程序首页透出，true-开启，false-不开启").optional(),
  "service_config": z.string().describe("客服方式，目前支持ANTCLOUD-云客服").optional()
}