import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["custom_field","custom_field.asana_created_field","custom_field.created_by","custom_field.created_by.name","custom_field.currency_code","custom_field.custom_label","custom_field.custom_label_position","custom_field.date_value","custom_field.date_value.date","custom_field.date_value.date_time","custom_field.default_access_level","custom_field.description","custom_field.display_value","custom_field.enabled","custom_field.enum_options","custom_field.enum_options.color","custom_field.enum_options.enabled","custom_field.enum_options.name","custom_field.enum_value","custom_field.enum_value.color","custom_field.enum_value.enabled","custom_field.enum_value.name","custom_field.format","custom_field.has_notifications_enabled","custom_field.id_prefix","custom_field.is_formula_field","custom_field.is_global_to_workspace","custom_field.is_value_read_only","custom_field.multi_enum_values","custom_field.multi_enum_values.color","custom_field.multi_enum_values.enabled","custom_field.multi_enum_values.name","custom_field.name","custom_field.number_value","custom_field.people_value","custom_field.people_value.name","custom_field.precision","custom_field.privacy_setting","custom_field.representation_type","custom_field.resource_subtype","custom_field.text_value","custom_field.type","is_important","parent","parent.name","project","project.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}