import { z } from "zod"

export const inputParams = {
  "biz_date": z.string().describe("查询指定自然日的起初余额和期末余额，biz_date与biz_month传入参数互斥").optional(),
  "biz_month": z.string().describe("查询指定自然月的起初余额和期末余额，biz_date与biz_month传入参数互斥").optional()
}