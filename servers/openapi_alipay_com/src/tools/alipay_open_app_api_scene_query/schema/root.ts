import { z } from "zod"

export const inputParams = {
  "field_name": z.string().describe("接口出参字段英文名。").optional(),
  "api_name": z.string().describe("接口英文名。").optional()
}