import { z } from "zod"

export const inputParams = {
  "category_id": z.number().int().describe("所属类目ID，如果search_all_category为true则不用填").optional(),
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "end_time": z.string().describe("结束时间，并且开始时间不能为空").optional(),
  "ids": z.array(z.number().int()).describe("文章ID集合").optional(),
  "keyword": z.string().describe("关键字").optional(),
  "keywords": z.array(z.string()).describe("标签").optional(),
  "library_id": z.number().int().describe("知识库ID").optional(),
  "page_num": z.number().int().describe("页数，page_size不能为空").optional(),
  "page_size": z.number().int().describe("页大小，page_num不能为空").optional(),
  "search_all_category": z.boolean().describe("是否搜索所有类目，如果为true则不用填写category_id值").optional(),
  "search_category_type": z.string().describe("Current（搜索当前节点）；\tChildren（搜索当前节点以及子节点）").optional(),
  "start_time": z.string().describe("开始时间，并且结束时间不能为空").optional(),
  "status": z.string().describe("状态，PUBLISHED（已发布），UNPUBLISH（未发布），EXPIRED（失效），DELETED（已删除）").optional()
}