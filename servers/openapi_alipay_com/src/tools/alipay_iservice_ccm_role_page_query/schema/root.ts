import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("角色名称").optional(),
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 10").optional(),
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional()
}