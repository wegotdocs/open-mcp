import { z } from "zod"

export const inputParamsSchema = {
  "portfolio": z.string().describe("Globally unique identifier for supporting portfolio.").optional(),
  "project": z.string().describe("Globally unique identifier for supporting project.").optional(),
  "task": z.string().describe("Globally unique identifier for supporting task.").optional(),
  "is_workspace_level": z.boolean().describe("Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.").optional(),
  "team": z.string().describe("Globally unique identifier for the team.").optional(),
  "workspace": z.string().describe("Globally unique identifier for the workspace.").optional(),
  "time_periods": z.array(z.string()).describe("Globally unique identifiers for the time periods.").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.").optional(),
  "offset": z.string().describe("Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n*Note: You can only pass in an offset that was returned to you via a previously paginated request.*").optional(),
  "opt_fields": z.array(z.enum(["current_status_update","current_status_update.resource_subtype","current_status_update.title","due_on","followers","followers.name","html_notes","is_workspace_level","liked","likes","likes.user","likes.user.name","metric","metric.can_manage","metric.currency_code","metric.current_display_value","metric.current_number_value","metric.initial_number_value","metric.is_custom_weight","metric.precision","metric.progress_source","metric.resource_subtype","metric.target_number_value","metric.unit","name","notes","num_likes","offset","owner","owner.name","path","start_on","status","team","team.name","time_period","time_period.display_name","time_period.end_on","time_period.period","time_period.start_on","uri","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}