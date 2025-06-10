import { z } from "zod"

export const inputParamsSchema = {
  "opt_fields": z.array(z.enum(["active","created_at","delivery_retry_count","failure_deletion_timestamp","filters","filters.action","filters.fields","filters.resource_subtype","last_failure_at","last_failure_content","last_success_at","next_attempt_after","resource","resource.name","target"])).describe("This endpoint returns a resource which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.").optional()
}