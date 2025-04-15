import { z } from "zod"

export const inputParams = {
  "mini_app_url": z.string().describe("小程序发券链接").optional()
}