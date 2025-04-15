import { z } from "zod"

export const inputParams = {
  "start_date": z.string().describe("留资开始日期，格式：yyyy-mm-dd 或 yyyy-mm-dd hh:mm:ss;不能早于30天前").optional(),
  "end_date": z.string().describe("留资结束日期，格式：yyyy-mm-dd 或 yyyy-mm-dd hh:mm:ss;不能晚于当天").optional(),
  "page_no": z.number().int().describe("分页参数之页数，从1开始").optional(),
  "page_size": z.number().int().describe("分页参数之每页大小，最大1000").optional(),
  "biz_token": z.string().describe("代理商访问灯火平台的token").optional(),
  "principal_tag": z.string().describe("商家标志").optional(),
  "promote_page_id": z.number().int().describe("推广页id").optional()
}