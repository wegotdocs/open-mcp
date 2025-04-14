import { z } from "zod"

export const inputParams = {
  "attachments": z.array(z.object({ "file_name": z.string().describe("文章附件").optional(), "id": z.number().int().describe("附件id").optional(), "key": z.string().describe("附件完整Key").optional(), "url": z.string().describe("附件的url").optional() })).describe("附件列表").optional(),
  "category_id": z.number().int().describe("所属类目ID，如果search_all_category为true则不用填").optional(),
  "ccs_instance_id": z.string().describe("子部门ID，不传为默认部门").optional(),
  "content": z.string().describe("内容").optional(),
  "extend_titles": z.array(z.string()).describe("扩展标题").optional(),
  "keywords": z.array(z.string()).describe("标签").optional(),
  "library_id": z.string().describe("知识库ID").optional(),
  "publish_end": z.string().describe("默认为 2999-12-31 23:59:59").optional(),
  "publish_start": z.string().describe("默认为当前时间").optional(),
  "related_articles": z.array(z.object({ "id": z.number().int().describe("知识点id").optional(), "title": z.string().describe("知识点标题").optional() })).describe("关联知识点").optional(),
  "scene_codes": z.array(z.string()).describe("场景ID。KNOWLEDGE（内部知识库）；ROBOT（机器人）;HELP（帮助中心）；WHELP（无线帮助中心）").optional(),
  "title": z.string().describe("标题").optional()
}