import { z } from "zod"

export const inputParams = {
  "content": z.string().describe("图片对应的base64字符串，支持jpg和png，1M之内").optional(),
  "pic_type": z.string().describe("只能传入指定类型，具体类型看文档").optional()
}