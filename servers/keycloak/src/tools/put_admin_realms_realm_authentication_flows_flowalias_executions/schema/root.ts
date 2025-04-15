import { z } from "zod"

export const inputParamsSchema = {
  "flowAlias": z.string().describe("Flow alias"),
  "id": z.string().optional(),
  "requirement": z.string().optional(),
  "displayName": z.string().optional(),
  "alias": z.string().optional(),
  "description": z.string().optional(),
  "requirementChoices": z.array(z.string()).optional(),
  "configurable": z.boolean().optional(),
  "authenticationFlow": z.boolean().optional(),
  "providerId": z.string().optional(),
  "authenticationConfig": z.string().optional(),
  "flowId": z.string().optional(),
  "level": z.number().int().optional(),
  "index": z.number().int().optional(),
  "priority": z.number().int().optional()
}