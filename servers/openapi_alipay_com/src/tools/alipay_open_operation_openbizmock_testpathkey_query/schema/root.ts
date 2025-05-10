import { z } from "zod"

export const inputParams = {
  "keykey": z.string().describe("ceshi"),
  "a": z.string().describe("测试"),
  "b": z.string().describe("ceshi").optional(),
  "c": z.string().describe("测试").optional()
}