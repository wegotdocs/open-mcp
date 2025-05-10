import { z } from "zod"

export const inputParams = {
  "category_id": z.number().int().describe("所属类目ID").optional(),
  "category_name": z.string().describe("知识点所属类目").optional(),
  "content": z.string().describe("知识点答案内容").optional(),
  "ext_id": z.string().describe("外部知识点ID").optional(),
  "extend_titles": z.array(z.string()).describe("扩展标题（问法）").optional(),
  "icon": z.string().describe("问答关联图片附件地址").optional(),
  "id": z.number().int().describe("知识点ID").optional(),
  "is_delete": z.boolean().describe("默认为false，为true且id非空时，表示删除知识点").optional(),
  "is_searchable": z.boolean().describe("是否被检索到，默认false，系统希望为true").optional(),
  "library_id": z.number().int().describe("知识库ID").optional(),
  "library_name": z.string().describe("知识库名称").optional(),
  "spu": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `spu` to the tool, first call the tool `expandSchema` with \"/properties/spu\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "tags": z.array(z.string()).describe("以逗号分割的字符串列表").optional(),
  "title": z.string().describe("知识点标题").optional()
}