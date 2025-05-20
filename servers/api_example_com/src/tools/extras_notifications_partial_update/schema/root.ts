import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this notification."),
  "object_type": z.string().optional(),
  "object_id": z.number().int().gte(0).lte(9223372036854776000).optional(),
  "user": z.number().int().optional(),
  "read": z.string().datetime({ offset: true }).nullable().optional(),
  "event_type": z.enum(["object_created","object_updated","object_deleted","job_started","job_completed","job_failed","job_errored"]).describe("* `object_created` - Object created\n* `object_updated` - Object updated\n* `object_deleted` - Object deleted\n* `job_started` - Job started\n* `job_completed` - Job completed\n* `job_failed` - Job failed\n* `job_errored` - Job errored").optional()
}