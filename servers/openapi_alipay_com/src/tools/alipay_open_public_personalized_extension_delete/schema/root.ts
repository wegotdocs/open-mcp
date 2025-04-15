import { z } from "zod"

export const inputParams = {
  "extension_key": z.string().describe("一套扩展区的key，删除默认扩展区时传入default ，查询扩展区列表可以获得每套扩展区的key").optional()
}