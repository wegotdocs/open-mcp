import { z } from "zod"

export const toolName = `createadcusersettings`
export const toolDescription = `Create a adcUserSettings`
export const baseUrl = `/api`
export const path = `/v1/adcUserSettings`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "dataProducts",
    "default",
    "description",
    "displayName",
    "domain",
    "extension",
    "favorite",
    "id",
    "name",
    "object",
    "objectType",
    "owner",
    "settingReference"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "default": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().min(1).max(128), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "favorite": z.boolean().optional(), "id": z.string().uuid().optional(), "name": z.string().min(1).max(256).optional(), "object": z.string(), "objectType": z.enum(["View","Global","NewNotificationFlagForMentions","NewNotificationFlagForRequests","NewNotificationFlagForTasks","Local","Shared","FiltersVisibility","Selected"]), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }), "settingReference": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }) }).shape