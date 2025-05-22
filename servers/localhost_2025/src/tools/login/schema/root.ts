import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().regex(new RegExp("^[a-zA-Z0-9_-]{5,20}$")).min(5).max(20).describe("用户名称"),
  "password": z.string().regex(new RegExp("^[a-zA-Z0-9_-]{6,32}$")).min(6).max(20).nullable().describe("密码"),
  "grantType": z.enum(["password","verify_code","refresh_token","wx_cp","wx_mp","wx_ma","wx_app"]).describe("授权模式")
}