import { z } from "zod"

export const inputParamsSchema = {
  "policy_id": z.number().int(),
  "enabled": z.boolean().describe("Policy condition enabled").optional(),
  "displayName": z.string().min(0).max(255).describe("Policy condition display name").optional(),
  "severity": z.enum(["NONE","MINOR","MODERATE","MAJOR","CRITICAL"]).describe("Policy condition severity").optional(),
  "priority": z.enum(["NONE","LOW","MEDIUM","HIGH"]).describe("Policy condition priority").optional(),
  "channels": z.array(z.number().int().describe("Policy condition notification channels")).min(0).max(20).describe("Policy condition notification channels").optional(),
  "scripts": z.array(z.object({ "scriptId": z.number().int().describe("Policy condition script id").optional(), "runAs": z.enum(["SYSTEM","LOGGED_ON_USER","LOCAL_ADMIN","DOMAIN_ADMIN","PREFERRED_CREDENTIAL_MAC","PREFERRED_CREDENTIAL_LINUX"]).describe("Policy condition script runAs"), "scriptParam": z.string().describe("Policy condition script parameter").optional(), "scriptVariables": z.array(z.object({ "id": z.string().describe("Policy condition script variable Id").optional(), "value": z.string().min(0).max(65535).describe("Policy condition script variable value").optional() }).describe("Policy condition script variable")).min(0).max(20).describe("Policy condition script variables").optional() }).describe("Policy condition script")).min(0).max(20).describe("Policy condition scripts").optional(),
  "notificationAction": z.enum(["NONE","SEND"]).describe("Policy condition notification action").optional(),
  "notifyOnReset": z.boolean().describe("Policy condition notify on reset").optional(),
  "resetThreshold": z.number().int().describe("Policy condition reset threshold (seconds)").optional(),
  "source": z.string().min(0).max(255).describe("Event Source"),
  "eventIds": z.array(z.number().int().describe("Event IDs")).min(0).max(20).describe("Event IDs"),
  "text": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `text` to the tool, first call the tool `expandSchema` with \"/properties/text\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Windows event policy condition text</property-description>").optional(),
  "occurrence": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `occurrence` to the tool, first call the tool `expandSchema` with \"/properties/occurrence\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Windows event policy condition occurrence</property-description>").optional()
}