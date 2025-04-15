import { z } from "zod"

export const inputParams = {
  "optional": z.array(z.string()).describe("开卡表单可填字段，可选字段选项不能与必填字段required重复").optional(),
  "required": z.array(z.string()).describe("开卡表单必填字段，必填字段必须有一个值，并且不能与可选字段optional里面重复").optional()
}