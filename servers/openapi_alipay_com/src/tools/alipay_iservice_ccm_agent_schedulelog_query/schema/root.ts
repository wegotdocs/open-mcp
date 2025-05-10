import { z } from "zod"

export const inputParams = {
  "agent_ids": z.array(z.string()).describe("客服id集合,限制最多100个id,不传查询部门下所有客服的状态变更流水日志").optional(),
  "ccs_instance_id": z.string().describe("部门id（即租户实例ID、数据权限ID）").optional(),
  "end_time": z.string().describe("客服状态变更结束时间,开始时间与结束时间间隔不能超过1天,采用UTC时间，按照ISO8601标准表示，格式为：yyyy-MM-dd'T'HH:mm:ss'Z'").optional(),
  "limit": z.number().int().describe("查询条数,最大100, 不传默认100").optional(),
  "page_num": z.number().int().describe("查询结果的页码，起始值为 1，默认值为 1").optional(),
  "page_size": z.number().int().describe("分页查询时设置的每页记录数，最大值 100 行，默认为 100").optional(),
  "start_id": z.number().int().describe("起始id,分页导出的起始客服状态变更流水id,第一页传0,翻页时传上一页结果的最大id").optional(),
  "start_time": z.string().describe("客服状态变更开始时间,采用UTC时间，按照ISO8601标准表示，格式为：yyyy-MM-dd'T'HH:mm:ss'Z'").optional()
}