import { z } from "zod"

export const inputParams = {
  "enroll_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `enroll_info` to the tool, first call the tool `expandSchema` with \"/properties/enroll_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "enroll_scene_type": z.string().describe("活动报名场景配置。\t枚举值：\tVOUCHER：券报名场景的报名；\tMINI_APP：小程序报名场景的报名；").optional(),
  "out_biz_no": z.string().describe("外部操作流水号。由商家/ISV 自定义，仅支持字母、数字、下划线且需保证每次操作唯一。").optional(),
  "plan_id": z.string().describe("要报名的招商方案ID").optional()
}