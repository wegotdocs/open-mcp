import { z } from "zod"

export const inputParamsSchema = {
  "configuration_permissions": z.array(z.number().int().nullable()).optional(),
  "name": z.string().min(1).max(255),
  "description": z.string().max(4000).nullable().optional(),
  "social_provider": z.union([z.literal("AzureAD"), z.literal("Remote"), z.literal(""), z.literal(null)]).nullable().describe("Group imported from a social provider.\n\n* `AzureAD` - AzureAD\n* `Remote` - Remote").optional()
}