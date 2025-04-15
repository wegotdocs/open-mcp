import { z } from "zod"

export const inputParams = {
  "out_request_nos": z.string().describe("报关请求号。需要查询的商户端报关请求号，支持批量查询，\r\t多个值用英文半角逗号分隔，单次请求最多10个;").optional()
}