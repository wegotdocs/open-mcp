import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["new_graph_export","new_project","new_project.name","new_project_template","new_project_template.name","new_task","new_task.created_by","new_task.name","new_task.resource_subtype","new_task_template","new_task_template.name","resource_subtype","status"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}