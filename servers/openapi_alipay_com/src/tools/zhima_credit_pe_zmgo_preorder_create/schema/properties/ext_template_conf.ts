import { z } from "zod"

export const inputParams = {
  "buyer_id": z.string().describe("淘宝uid").optional(),
  "xxhm_info_id": z.string().describe("先享后买id").optional()
}