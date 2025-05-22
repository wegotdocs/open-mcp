import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gt(0).describe("页码[1]"),
  "size": z.number().int().gt(0).describe("分页大小[20]"),
  "sort": z.array(z.string().describe("id,DESC|id,ASC")).describe("id,DESC|id,ASC").optional()
}