import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "action": z.literal("revoke").describe("Action to apply to the fine-grained personal access token."),
  "pat_ids": z.array(z.number().int().describe("Unique identifier of the fine-grained personal access token.")).min(1).max(100).describe("The IDs of the fine-grained personal access tokens.")
}