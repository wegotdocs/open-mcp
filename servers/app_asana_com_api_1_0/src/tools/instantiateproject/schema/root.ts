import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}