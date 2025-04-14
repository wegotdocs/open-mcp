import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "voucher_package_id_list": z.array(z.string()).describe("券包id列表").optional()
}