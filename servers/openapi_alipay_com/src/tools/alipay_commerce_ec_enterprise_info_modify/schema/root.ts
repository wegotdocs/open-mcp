import { z } from "zod"

export const inputParams = {
  "enterprise_alias": z.string().describe("企业简称").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "enterprise_name": z.string().describe("企业名称").optional()
}