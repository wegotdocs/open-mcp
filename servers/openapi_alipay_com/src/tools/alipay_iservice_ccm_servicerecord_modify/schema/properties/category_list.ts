import { z } from "zod"

export const inputParams = {
  "cat_name": z.string().describe("类目名称(需要每一级用;分隔封装)").optional(),
  "first_cat": z.string().describe("一级类目编码").optional(),
  "fourth_cat": z.string().describe("四级类目编码").optional(),
  "instence_code": z.string().describe("类目树编码").optional(),
  "second_cat": z.string().describe("二级类目编码").optional(),
  "third_cat": z.string().describe("三级类目编码").optional()
}