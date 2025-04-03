import { z } from "zod"

export const toolName = `createorupdateclassification`
export const toolDescription = `Update a classification`
export const baseUrl = `/api`
export const path = `/v1/classifications`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "mutuallyExclusive",
    "name",
    "owner",
    "provider"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "mutuallyExclusive": z.boolean().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w'\\- .&()]+$")).min(2).max(64), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "provider": z.enum(["system","user"]).optional() }).shape