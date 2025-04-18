import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_request_ids": z.array(z.number().int()).min(1).max(100).describe("Unique identifiers of the requests for access via fine-grained personal access token. Must be formed of between 1 and 100 `pat_request_id` values.").optional(),
  "action": z.enum(["approve","deny"]).describe("Action to apply to the requests."),
  "reason": z.string().max(1024).nullable().describe("Reason for approving or denying the requests. Max 1024 characters.").optional()
}