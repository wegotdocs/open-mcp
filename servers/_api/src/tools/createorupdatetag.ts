import { z } from "zod"

export const toolName = `createorupdatetag`
export const toolDescription = `Create or update a tag`
export const baseUrl = `/api`
export const path = `/v1/tags`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "associatedTags",
    "classification",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "mutuallyExclusive",
    "name",
    "owner",
    "parent",
    "provider"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "associatedTags": z.array(z.string()).optional(), "classification": z.string().min(1).max(3072).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "mutuallyExclusive": z.boolean().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w'\\- .&()]+$")).min(2).max(64), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "parent": z.string().min(1).max(3072).optional(), "provider": z.enum(["system","user"]).optional() }).shape