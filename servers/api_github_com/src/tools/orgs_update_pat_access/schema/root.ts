import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "pat_id": z.number().int().describe("The unique identifier of the fine-grained personal access token."),
  "action": z.literal("revoke").describe("Action to apply to the fine-grained personal access token.")
}