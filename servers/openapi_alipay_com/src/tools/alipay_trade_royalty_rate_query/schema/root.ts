import { z } from "zod"

export const inputParams = {
  "out_request_no": z.string().describe("外部请求号，由商家自定义。32个字符以内，仅可包含字母、数字、下划线。需保证在商户端不重复。").optional()
}