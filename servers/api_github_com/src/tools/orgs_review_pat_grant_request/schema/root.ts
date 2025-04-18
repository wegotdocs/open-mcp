import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_request_id": z.number().int().describe("Unique identifier of the request for access via fine-grained personal access token."),
  "action": z.enum(["approve","deny"]).describe("Action to apply to the request."),
  "reason": z.string().max(1024).nullable().describe("Reason for approving or denying the request. Max 1024 characters.").optional()
}