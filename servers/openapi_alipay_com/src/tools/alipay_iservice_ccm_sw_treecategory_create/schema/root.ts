import { z } from "zod"

export const inputParams = {
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "description": z.string().describe("描述").optional(),
  "father_id": z.number().int().describe("父节点ID").optional(),
  "name": z.string().describe("节点名称").optional(),
  "tags": z.array(z.string()).describe("标签。KNOWLEDGE（知识库）；PLATFORM（公有云工作台）；HELP（公有云帮助中心）").optional()
}