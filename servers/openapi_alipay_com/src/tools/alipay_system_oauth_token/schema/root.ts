import { z } from "zod"

export const inputParams = {
  "code": z.string().describe("授权码，用户对应用授权后得到。本参数在 grant_type 为 authorization_code 时必填；为 refresh_token 时不填。").optional(),
  "grant_type": z.string().describe("授权方式").optional(),
  "refresh_token": z.string().describe("刷新令牌，上次换取访问令牌时得到。本参数在 grant_type 为 authorization_code 时不填；为 refresh_token 时必填，且该值来源于此接口的返回值 app_refresh_token（即至少需要通过 grant_type=authorization_code 调用此接口一次才能获取）。").optional()
}