import { z } from "zod"

export const inputParams = {
  "route_group": z.string().describe("路由规则组，用于唯一标记一条路由规则。调用 https://opendocs.alipay.com/apis/00rkye 接口关联普通二维码后的返回值。").optional()
}