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
  "matchAll": z.array(z.object({ "fieldName": z.string().min(0).max(250).describe("Custom field name"), "operator": z.enum(["EQUALS","NOT_EQUALS","LESS_THAN","LESS_OR_EQUAL_THAN","GREATER_THAN","GREATER_OR_EQUAL_THAN","IS_NOT_NULL","CONTAINS","CONTAINS_NONE","CONTAINS_ANY"]).describe("Custom field operator"), "value": z.string().min(0).max(65535).describe("Custom field value") }).describe("Policy condition custom field")).min(0).max(10).describe("Custom field value must meet all conditions").optional(),
  "matchAny": z.array(z.object({ "fieldName": z.string().min(0).max(250).describe("Custom field name"), "operator": z.enum(["EQUALS","NOT_EQUALS","LESS_THAN","LESS_OR_EQUAL_THAN","GREATER_THAN","GREATER_OR_EQUAL_THAN","IS_NOT_NULL","CONTAINS","CONTAINS_NONE","CONTAINS_ANY"]).describe("Custom field operator"), "value": z.string().min(0).max(65535).describe("Custom field value") }).describe("Policy condition custom field")).min(0).max(10).describe("Custom field value must meet any conditions").optional()
}