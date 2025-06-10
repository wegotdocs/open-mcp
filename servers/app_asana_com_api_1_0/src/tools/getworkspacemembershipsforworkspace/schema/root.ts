import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["created_at","is_active","is_admin","is_guest","is_view_only","offset","path","uri","user","user.name","user_task_list","user_task_list.name","user_task_list.owner","user_task_list.workspace","vacation_dates","vacation_dates.end_on","vacation_dates.start_on","workspace","workspace.name"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}