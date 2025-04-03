import { z } from "zod"

export const toolName = `createadcrelationship`
export const toolDescription = ``
export const baseUrl = `/api`
export const path = `/v1/metadata/adcRelationships`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "attributeKeyName",
    "bidirectional",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "multipleDestinations",
    "multipleSources",
    "name",
    "owner",
    "pairings",
    "reverseAttributeKeyName",
    "reverseName"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "attributeKeyName": z.string().regex(new RegExp("^(?U)(?! |\\d+$|.*-$)[\\w()\\[\\]`%+!?#\\\\]+$")).min(1).max(1024).optional(), "bidirectional": z.boolean(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "multipleDestinations": z.boolean(), "multipleSources": z.boolean(), "name": z.string().regex(new RegExp("^(?U)(?![-_ ,—])[\\w()\\[\\]`%+!?\"/\\\\][\\w ()\\[\\]_\\-`,%+—!?\"/\\\\]+(?<![-_ ,—])$")).min(2).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "pairings": z.array(z.object({ "condition": z.object({ "type": z.enum(["entityTypePair","termTypeIn","termTypePair","termType"]).optional() }), "destType": z.string(), "sourceType": z.string() })).min(0).max(2147483647), "reverseAttributeKeyName": z.string().regex(new RegExp("^(?U)(?! |\\d+$|.*-$)[\\w()\\[\\]`%+!?#\\\\]+$")).min(1).max(1024).optional(), "reverseName": z.string().regex(new RegExp("^(?U)(?![-_ ,—])[\\w()\\[\\]`%+!?\"/\\\\][\\w ()\\[\\]_\\-`,%+—!?\"/\\\\]+(?<![-_ ,—])$")).min(2).max(128).optional() }).shape