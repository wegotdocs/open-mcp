import { z } from "zod"

export const inputParamsSchema = {
  "instanceId": z.string(),
  "projectId": z.string(),
  "genericOauth": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `genericOauth` to the tool, first call the tool `expandSchema` with \"/properties/genericOauth\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "publicReadAccess": z.boolean().describe("If it's true, anyone can access the Grafana dashboards without logging in. If it is wrong, a login is required.").optional(),
  "useStackitSso": z.boolean().describe("If it's true, it overwrites the current genericOauth config and configures STACKIT SSO for this instance.").optional(),
  "Authorization": z.string().describe("Accepts technical credentials and api gateway access.")
}