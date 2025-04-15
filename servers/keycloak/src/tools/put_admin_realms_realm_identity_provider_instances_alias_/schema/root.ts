import { z } from "zod"

export const inputParamsSchema = {
  "alias": z.string().optional(),
  "displayName": z.string().optional(),
  "internalId": z.string().optional(),
  "providerId": z.string().optional(),
  "enabled": z.boolean().optional(),
  "trustEmail": z.boolean().optional(),
  "storeToken": z.boolean().optional(),
  "addReadTokenRoleOnCreate": z.boolean().optional(),
  "authenticateByDefault": z.boolean().optional(),
  "linkOnly": z.boolean().optional(),
  "hideOnLogin": z.boolean().optional(),
  "firstBrokerLoginFlowAlias": z.string().optional(),
  "postBrokerLoginFlowAlias": z.string().optional(),
  "organizationId": z.string().optional(),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}