import { z } from "zod"

export const inputParams = {
  "max_age": z.string().describe("年龄区间判断的上限，闭区间").optional(),
  "min_age": z.string().describe("年龄区间判断的下限，闭区间").optional(),
  "query_type": z.string().describe("query_type不填, 返回uid\r\tquery_type=1, 返回手机号\r\tquery_type=2, 返回图片").optional()
}