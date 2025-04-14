import { z } from "zod"

export const inputParams = {
  "page_no": z.number().int().describe("查询起始页码，如第1页，单位：/页").optional(),
  "page_size": z.number().int().describe("每页数据大小，默认 20条，最大支持20个，单位：/个").optional()
}