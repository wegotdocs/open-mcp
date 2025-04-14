import { z } from "zod"

export const inputParams = {
  "auth_code": z.string().describe("授权号，协议授权或者cif协议对应的授权号。").optional(),
  "auth_type": z.string().describe("授权类型").optional()
}