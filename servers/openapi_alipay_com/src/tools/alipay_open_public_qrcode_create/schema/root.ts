import { z } from "zod"

export const inputParams = {
  "code_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `code_info` to the tool, first call the tool `expandSchema` with \"/properties/code_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "code_type": z.string().describe("二维码类型，目前只支持两种类型：\r\tTEMP：临时的（默认）；\r\tPERM：永久的").optional(),
  "expire_second": z.string().describe("临时码过期时间，以秒为单位，最大不超过1800秒；\r\t永久码置空").optional(),
  "show_logo": z.string().describe("二维码中间是否显示服务窗logo，Y：显示；N：不显示（默认）").optional()
}