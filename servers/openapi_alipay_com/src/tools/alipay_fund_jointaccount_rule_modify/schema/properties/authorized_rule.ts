import { z } from "zod"

export const inputParams = {
  "authorized_detail_list": z.array(z.object({ "authorized_principal_id": z.string().describe("收单主体PID").optional() })).describe("授权商户列表").optional(),
  "authorized_type": z.string().describe("WHITELIST-白名单\tALL-全部").optional()
}