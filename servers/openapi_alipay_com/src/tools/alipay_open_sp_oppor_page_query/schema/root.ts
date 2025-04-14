import { z } from "zod"

export const inputParams = {
  "isv_pid": z.string().describe("服务商pid").optional(),
  "status_list": z.string().describe("作业记录状态列表,以,拼接传入").optional(),
  "page_size": z.string().describe("页大小").optional(),
  "page_num": z.string().describe("页数").optional()
}