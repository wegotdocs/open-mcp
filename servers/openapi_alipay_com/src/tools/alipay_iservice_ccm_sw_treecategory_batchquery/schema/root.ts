import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "library_id": z.number().int().describe("知识库ID").optional(),
  "name": z.string().describe("节点名称").optional(),
  "page_num": z.number().int().describe("页数，page_size不能为空").optional(),
  "page_size": z.number().int().describe("页显示大小，page_num不能为空").optional()
}