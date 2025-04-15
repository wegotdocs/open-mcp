import { z } from "zod"

export const inputParams = {
  "config_id": z.string().describe("关键词配置ID").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}