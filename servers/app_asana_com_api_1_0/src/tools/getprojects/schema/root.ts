import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "workspace": z.string().describe("The workspace or organization to filter projects on.").optional(),
  "team": z.string().describe("The team to filter projects on.").optional(),
  "archived": z.boolean().describe("Only return projects whose `archived` field takes on the value of this parameter.").optional(),
  "opt_fields": z.array(z.enum(["archived","color","completed","completed_at","completed_by","completed_by.name","created_at","created_from_template","created_from_template.name","current_status","current_status.author","current_status.author.name","current_status.color","current_status.created_at","current_status.created_by","current_status.created_by.name","current_status.html_text","current_status.modified_at","current_status.text","current_status.title","current_status_update","current_status_update.resource_subtype","current_status_update.title","custom_field_settings","custom_field_settings.custom_field","custom_field_settings.custom_field.asana_created_field","custom_field_settings.custom_field.created_by","custom_field_settings.custom_field.created_by.name","custom_field_settings.custom_field.currency_code","custom_field_settings.custom_field.custom_label","custom_field_settings.custom_field.custom_label_position","custom_field_settings.custom_field.date_value","custom_field_settings.custom_field.date_value.date","custom_field_settings.custom_field.date_value.date_time","custom_field_settings.custom_field.default_access_level","custom_field_settings.custom_field.description","custom_field_settings.custom_field.display_value","custom_field_settings.custom_field.enabled","custom_field_settings.custom_field.enum_options","custom_field_settings.custom_field.enum_options.color","custom_field_settings.custom_field.enum_options.enabled","custom_field_settings.custom_field.enum_options.name","custom_field_settings.custom_field.enum_value","custom_field_settings.custom_field.enum_value.color","custom_field_settings.custom_field.enum_value.enabled","custom_field_settings.custom_field.enum_value.name","custom_field_settings.custom_field.format","custom_field_settings.custom_field.has_notifications_enabled","custom_field_settings.custom_field.id_prefix","custom_field_settings.custom_field.is_formula_field","custom_field_settings.custom_field.is_global_to_workspace","custom_field_settings.custom_field.is_value_read_only","custom_field_settings.custom_field.multi_enum_values","custom_field_settings.custom_field.multi_enum_values.color","custom_field_settings.custom_field.multi_enum_values.enabled","custom_field_settings.custom_field.multi_enum_values.name","custom_field_settings.custom_field.name","custom_field_settings.custom_field.number_value","custom_field_settings.custom_field.people_value","custom_field_settings.custom_field.people_value.name","custom_field_settings.custom_field.precision","custom_field_settings.custom_field.privacy_setting","custom_field_settings.custom_field.representation_type","custom_field_settings.custom_field.resource_subtype","custom_field_settings.custom_field.text_value","custom_field_settings.custom_field.type","custom_field_settings.is_important","custom_field_settings.parent","custom_field_settings.parent.name","custom_field_settings.project","custom_field_settings.project.name","custom_fields","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.id_prefix","custom_fields.is_formula_field","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.representation_type","custom_fields.text_value","custom_fields.type","default_access_level","default_view","due_date","due_on","followers","followers.name","html_notes","icon","members","members.name","minimum_access_level_for_customization","minimum_access_level_for_sharing","modified_at","name","notes","offset","owner","path","permalink_url","privacy_setting","project_brief","public","start_on","team","team.name","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}