import { z } from "zod"

export const toolName = `createglossary`
export const toolDescription = `Create a glossary`
export const baseUrl = `/api`
export const path = `/v1/glossaries`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "adcStewards",
    "addition",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "mutuallyExclusive",
    "name",
    "owner",
    "provider",
    "reviewers",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "adcStewards": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "mutuallyExclusive": z.boolean().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "provider": z.enum(["system","user"]).optional(), "reviewers": z.array(z.string()).optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional() }).shape