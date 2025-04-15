import { z } from "zod"

export const inputParams = {
  "app_name": z.string().describe("小程序名字，长度限制 3~30 个字符，仅支持包含简体中文、数字、英文、下划线、+、-。").optional()
}