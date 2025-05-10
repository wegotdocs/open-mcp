import { z } from "zod"

export const inputParams = {
  "data_type": z.string().describe("标签值类型，不填默认为 string 类型。\t注意：目前只支持 string（字符串类型）。").optional(),
  "label_name": z.string().describe("自定义标签名。\t注意：每个生活号最多创建 100 个自定义标签。").optional()
}