import { z } from "zod"

export const inputParams = {
  "enroll_merchant": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `enroll_merchant` to the tool, first call the tool `expandSchema` with \"/properties/enroll_merchant\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "enroll_scene_type": z.string().describe("活动报名场景配置。 \t枚举值：\tVOUCHER：券报名场景查询；\tMINI_APP：小程序报名场景查询；\tVOUCHER,MINI_APP：同时进行券报名场景和小程序报名场景的查询；").optional(),
  "page_num": z.number().int().describe("第几页，默认1（需要在1和999之间）").optional(),
  "page_size": z.number().int().describe("每页记录条数，默认20，需要在1和100之间").optional()
}