import { z } from "zod"

export const toolName = `createdatabase`
export const toolDescription = `Create a database`
export const baseUrl = `/api`
export const path = `/v1/databases`
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
    "name",
    "owner",
    "retentionPeriod",
    "service",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "default": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^((?!::).)*$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "retentionPeriod": z.string().optional(), "service": z.string().min(1).max(3072), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional() }).shape