import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("商户数据回传的任务名称，供C端展示。当累计的数据类型为任务类型时，此为必传字段").optional()
}