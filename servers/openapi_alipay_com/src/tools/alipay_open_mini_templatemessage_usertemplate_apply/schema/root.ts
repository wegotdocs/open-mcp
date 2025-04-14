import { z } from "zod"

export const inputParams = {
  "keyword_list": z.string().describe("开发者自行组合好的模板关键词列表，关键词之间使用英文的逗号“,”进行分割，关键词顺序可以自由搭配，最多支持10个关键词组合,这里组织的关键词，在发送模板消息接口中，按照这里的顺序进行占位符替换").optional(),
  "template_library_id": z.string().describe("模板库id，可登录小程序后台查看获取").optional()
}