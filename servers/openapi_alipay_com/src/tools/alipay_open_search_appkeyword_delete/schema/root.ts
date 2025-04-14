import { z } from "zod"

export const inputParams = {
  "config_id": z.string().describe("关键词配置ID").optional(),
  "key_words": z.array(z.string()).describe("需要删除的生效关键词").optional(),
  "target_appid": z.string().describe("小程序id").optional()
}