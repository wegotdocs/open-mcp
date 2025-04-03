import { z } from "zod"

export const toolName = `createorupdatetest`
export const toolDescription = `Update test case`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testCases`
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
    "entityLink",
    "extension",
    "name",
    "owner",
    "parameterValues",
    "testDefinition",
    "testSuite"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "entityLink": z.string().regex(new RegExp("^(?U)<#E::\\w+::[\\w'\\- .&/:+\"\\\\()$#%]+>$")), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "parameterValues": z.array(z.object({ "name": z.string().optional(), "value": z.string().optional() })).optional(), "testDefinition": z.string().min(1).max(3072), "testSuite": z.string().min(1).max(3072) }).shape