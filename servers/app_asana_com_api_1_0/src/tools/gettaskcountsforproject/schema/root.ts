import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["num_completed_milestones","num_completed_tasks","num_incomplete_milestones","num_incomplete_tasks","num_milestones","num_tasks"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}