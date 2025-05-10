import { z } from "zod"

export const inputParams = {
  "out_request_no": z.string().describe("外部请求号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional(),
  "page_num": z.number().int().describe("几页，起始页为 1。不填默认为 1。").optional(),
  "page_size": z.number().int().describe("页面大小。每页记录数，取值范围是(0,100]。不填默认为20").optional()
}