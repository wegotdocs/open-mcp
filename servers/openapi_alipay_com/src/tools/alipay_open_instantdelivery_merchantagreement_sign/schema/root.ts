import { z } from "zod"

export const inputParams = {
  "open_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional()
}