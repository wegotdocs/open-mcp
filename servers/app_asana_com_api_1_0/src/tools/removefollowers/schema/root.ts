import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","owner","owner.name","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}