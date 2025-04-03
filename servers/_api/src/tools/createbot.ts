import { z } from "zod"

export const toolName = `createbot`
export const toolDescription = `Create a bot`
export const baseUrl = `/api`
export const path = `/v1/bots`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "botUser",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "name",
    "owner",
    "provider"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "botUser": z.string(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w\\-.]+$")).min(1).max(64), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "provider": z.enum(["system","user"]).optional() }).shape