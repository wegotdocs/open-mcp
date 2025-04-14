import { z } from "zod"

export const inputParams = {
  "description": z.string().describe("页面展示的任务描（collect_attachement值为true时必填）").optional(),
  "details": z.array(z.object({ "code": z.string().describe("自定义附件标识，后续下载附件使用此标识区分。").optional(), "description": z.string().describe("页面展示的附件中文描述（collectAttachement值为true时必填）").optional(), "order": z.number().int().describe("展示顺序（collectAttachement值为true时必填）").optional() })).describe("附件列表，用于定义每个附件code的描述及页面展示顺序").optional(),
  "title": z.string().describe("页面展示的任务标题（collect_attachement值为true时必填）").optional()
}