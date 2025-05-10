import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("分页参数").optional(),
  "offset": z.number().int().describe("分页参数").optional(),
  "keyword": z.string(),
  "sort": z.enum(["match","heat","rank","score"]).describe("排序规则\n\n- `match` meilisearch 的默认排序，按照匹配程度\n- `heat` 收藏人数\n- `rank` 排名由高到低\n- `score` 评分\n").optional(),
  "filter": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `filter` to the tool, first call the tool `expandSchema` with \"/properties/filter\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>不同条件之间是 `且` 的关系</property-description>").optional()
}