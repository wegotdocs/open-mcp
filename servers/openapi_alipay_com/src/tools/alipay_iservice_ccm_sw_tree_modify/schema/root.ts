import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.number().int().describe("类目ID").optional(),
  "name": z.string().describe("类目名称").optional()
}