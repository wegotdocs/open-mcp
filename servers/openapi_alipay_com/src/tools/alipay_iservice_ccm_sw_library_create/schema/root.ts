import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "instance_code": z.string().describe("知识库对应的类目树名称，与treeId不可同时为空").optional(),
  "name": z.string().describe("知识库名称").optional(),
  "tree_id": z.number().int().describe("知识库对应的类目树Id，与instanceCode不可同时为空").optional()
}