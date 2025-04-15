import { z } from "zod"

export const inputParamsSchema = {
  "integrationConfigurationId": z.string(),
  "resourceId": z.string(),
  "productId": z.string(),
  "name": z.string(),
  "status": z.enum(["ready","pending","suspended","resumed","uninstalled","error"]),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "billingPlan": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `billingPlan` to the tool, first call the tool `expandSchema` with \"/properties/billingPlan\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "notification": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `notification` to the tool, first call the tool `expandSchema` with \"/properties/notification\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()).optional()
}