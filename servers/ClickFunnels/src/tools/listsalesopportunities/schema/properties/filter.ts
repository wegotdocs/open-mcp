import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of opportunity IDs to filter by.").optional(),
  "pipeline_id": z.string().describe("A comma-separated list of pipeline IDs to filter by.").optional(),
  "pipelines_stage_id": z.string().describe("A comma-separated list of pipelines stage IDs to filter by.").optional(),
  "primary_contact_id": z.string().describe("A comma-separated list of primary contact IDs to filter by.").optional(),
  "assignee_id": z.string().describe("A comma-separated list of assignee memberships IDs to filter by.").optional()
}