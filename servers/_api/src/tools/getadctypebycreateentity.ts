import { z } from "zod"

export const toolName = `getadctypebycreateentity`
export const toolDescription = `Get a entity addition type by createEntity request`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas/fullType/byCreateEntity`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "prepare"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "adcStewards",
    "addition",
    "children",
    "dataProducts",
    "deleted",
    "description",
    "displayName",
    "domain",
    "extension",
    "fullyQualifiedName",
    "glossary",
    "href",
    "name",
    "owner",
    "parent",
    "tags",
    "updatedAt",
    "updatedBy"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "prepare": z.boolean().optional(), "adcStewards": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "addition": z.record(z.any()).optional(), "children": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "dataProducts": z.array(z.string()).optional(), "deleted": z.boolean().optional(), "description": z.string(), "displayName": z.string(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "fullyQualifiedName": z.string().min(1).max(256).optional(), "glossary": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }), "href": z.string().url().optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "parent": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional(), "updatedAt": z.number().int().optional(), "updatedBy": z.string().optional() }).shape