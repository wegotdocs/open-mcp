import { z } from "zod"

export const inputParams = {
  "need_detail": z.boolean().describe("指示是否返回内容详情, 默认为false\tfalse: 仅返回内容ID列表\ttrue:返回 content_details").optional(),
  "page_num": z.number().int().describe("当页分页,默认为1").optional(),
  "page_size": z.number().int().describe("分页记录数，最大20,默认20").optional(),
  "public_id": z.string().describe("生活号+号ID，只有MCN机构为达人号ID查询内容才需要传入").optional(),
  "status": z.string().describe("内容状态，默认查询所有状态").optional()
}