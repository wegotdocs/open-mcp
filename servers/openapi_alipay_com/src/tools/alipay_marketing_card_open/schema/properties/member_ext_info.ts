import { z } from "zod"

export const inputParams = {
  "birth": z.string().describe("生日 yyyy-MM-dd").optional(),
  "cell": z.string().describe("手机号").optional(),
  "gende": z.string().describe("性别").optional(),
  "name": z.string().describe("姓名").optional()
}