import { z } from "zod"

export const inputParams = {
  "biz_token": z.string().describe("代理商访问灯火平台的token").optional(),
  "principal_tag": z.string().describe("商家标志").optional(),
  "type": z.string().describe("推广页类型：COLLECT_INFO -  免费留资；TRADE - 付费留资； OPERATION_PAID - 运营商付费留资；待扩展").optional(),
  "page_no": z.number().int().describe("分页参数之页数，从1开始").optional(),
  "page_size": z.number().int().describe("分页参数之每页大小，最大1000").optional()
}