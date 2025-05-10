import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("角色id").optional(),
  "ccs_instance_id": z.string().describe("部门id，不传默认用租户ID").optional()
}