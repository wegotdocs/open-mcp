import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("营销活动id").optional(),
  "gmt_end": z.string().describe("活动结束时间").optional(),
  "gmt_start": z.string().describe("活动开始时间").optional(),
  "template_ids": z.array(z.string()).describe("消息模板id列表，最多50个模板id").optional(),
  "title": z.string().describe("消息运营位名称，不填默认使用券名称").optional()
}