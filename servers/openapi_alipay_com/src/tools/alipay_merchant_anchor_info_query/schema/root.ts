import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "public_id": z.string().describe("生活号ID").optional()
}