import { z } from "zod"

export const inputParamsSchema = {
  "block_execution": z.boolean().optional(),
  "cell_number": z.string().optional(),
  "force_password_reset": z.boolean().optional(),
  "github_username": z.string().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "phone_number": z.string().optional(),
  "prefetch": z.array(z.literal("user")).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "slack_user_id": z.string().optional(),
  "slack_username": z.string().optional(),
  "title": z.string().optional(),
  "twitter_username": z.string().optional(),
  "user": z.number().int().optional()
}