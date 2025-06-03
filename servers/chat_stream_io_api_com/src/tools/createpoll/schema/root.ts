import { z } from "zod"

export const inputParamsSchema = {
  "Custom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `Custom` to the tool, first call the tool `expandSchema` with \"/properties/Custom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "allow_answers": z.boolean().describe("Indicates whether users can suggest user defined answers").optional(),
  "allow_user_suggested_options": z.boolean().optional(),
  "description": z.string().describe("A description of the poll").optional(),
  "enforce_unique_vote": z.boolean().describe("Indicates whether users can cast multiple votes").optional(),
  "id": z.string().max(255).optional(),
  "is_closed": z.boolean().describe("Indicates whether the poll is open for voting").optional(),
  "max_votes_allowed": z.number().int().lte(10).describe("Indicates the maximum amount of votes a user can cast").optional(),
  "name": z.string().describe("The name of the poll"),
  "options": z.array(z.object({ "custom": z.record(z.any()).optional(), "text": z.string().optional() }).nullable()).optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional(),
  "voting_visibility": z.enum(["anonymous","public"]).optional()
}