import { z } from "zod"

export const toolName = `createorupdateeventsubscription`
export const toolDescription = `Updated an existing or create a new Event Subscription`
export const baseUrl = `/api`
export const path = `/v1/events/subscriptions`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "alertType",
    "batchSize",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "enabled",
    "extension",
    "filteringRules",
    "name",
    "owner",
    "provider",
    "readTimeout",
    "subscriptionConfig",
    "subscriptionType",
    "timeout",
    "trigger"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "alertType": z.enum(["ChangeEvent","DataInsightReport","Task/Conversation/Announcement"]), "batchSize": z.number().int().optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "enabled": z.boolean().optional(), "extension": z.record(z.any()).optional(), "filteringRules": z.object({ "resources": z.array(z.string()), "rules": z.array(z.object({ "condition": z.string(), "description": z.string().optional(), "effect": z.enum(["include","exclude"]), "fullyQualifiedName": z.string().min(1).max(3072).optional(), "name": z.string().optional() })).optional() }).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "provider": z.enum(["system","user"]).optional(), "readTimeout": z.number().int().optional(), "subscriptionConfig": z.record(z.any()).optional(), "subscriptionType": z.enum(["GenericWebhook","SlackWebhook","MsTeamsWebhook","GChatWebhook","Email","ActivityFeed","DataInsight"]), "timeout": z.number().int().optional(), "trigger": z.object({ "cronExpression": z.string().optional(), "scheduleInfo": z.enum(["Daily","Weekly","Monthly","Custom"]).optional(), "triggerType": z.enum(["RealTime","Scheduled"]) }).optional() }).shape