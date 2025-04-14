import { z } from "zod"

export const inputParams = {
  "code": z.string().describe("应用授权码，传入应用授权后得到的  app_auth_code。\t说明：\tgrant_type 为 authorization_code 时，本参数必填；\tgrant_type 为 refresh_token 时不填。").optional(),
  "grant_type": z.string().describe("授权方式。支持：\tauthorization_code：使用应用授权码换取应用授权令牌app_auth_token。\trefresh_token：使用app_refresh_token刷新获取新授权令牌。").optional(),
  "refresh_token": z.string().describe("刷新令牌，上次换取访问令牌时得到。本参数在 grant_type 为 authorization_code 时不填；为 refresh_token 时必填，且该值来源于此接口的返回值 app_refresh_token（即至少需要通过 grant_type=authorization_code 调用此接口一次才能获取）。").optional()
}