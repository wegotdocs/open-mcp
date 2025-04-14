import { z } from "zod"

export const inputParams = {
  "service_name": z.string().describe("服务名称").optional(),
  "category_id": z.string().describe("类目").optional(),
  "page_size": z.number().int().describe("每页记录数").optional(),
  "page_num": z.number().int().describe("页码").optional()
}