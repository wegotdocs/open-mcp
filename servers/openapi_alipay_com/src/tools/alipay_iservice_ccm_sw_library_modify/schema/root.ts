import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "id": z.string().describe("知识库Id").optional(),
  "name": z.string().describe("知识库名称").optional()
}