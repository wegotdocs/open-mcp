import { z } from "zod"

export const inputParamsSchema = {
  "Custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Custom` to the tool, first call the tool `expandSchema` with \"/properties/Custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "allow_answers": z.boolean().describe("Allow answers").optional(),
  "allow_user_suggested_options": z.boolean().describe("Allow user suggested options").optional(),
  "description": z.string().describe("Poll description").optional(),
  "enforce_unique_vote": z.boolean().describe("Enforce unique vote").optional(),
  "id": z.string().max(255).describe("Poll ID"),
  "is_closed": z.boolean().describe("Is closed").optional(),
  "max_votes_allowed": z.number().int().lte(10).describe("Max votes allowed").optional(),
  "name": z.string().describe("Poll name"),
  "options": z.array(z.object({ "custom": z.record(z.any()).optional(), "id": z.string().max(255), "text": z.string().optional() }).nullable()).describe("Poll options").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional(),
  "voting_visibility": z.enum(["anonymous","public"]).describe("Voting visibility").optional()
}