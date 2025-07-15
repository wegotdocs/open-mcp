import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the role").readonly().optional(),
  "name": z.string().max(200).describe("The name of the role"),
  "default_hourly_rate": z.string().describe("Default hourly rate applied to a fee-based project/phase team member using this role").optional(),
  "created": z.string().describe("Date/time this record was created").readonly().optional(),
  "created_by": z.number().int().describe("ID of the account that created this record").readonly().optional(),
  "modified": z.string().describe("Date/time this record was last modified").readonly().optional(),
  "modified_by": z.number().int().describe("ID of the account that last modified this record").readonly().optional(),
  "cost_rate_history": z.array(z.object({ "rate": z.string(), "effective_date": z.string() })).describe("`expand` field. List of cost rates applied to people with the role and the effective date when they apply from").optional(),
  "people_ids": z.array(z.number().int()).describe("`expand` field. List of all people by `people_id` that are currently assigned to the role").optional(),
  "people_count": z.number().int().describe("`expand` field. Count of all people currently assigned to the role").optional()
}