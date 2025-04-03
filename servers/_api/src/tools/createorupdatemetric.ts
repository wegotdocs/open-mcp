import { z } from "zod"

export const toolName = `createorupdatemetric`
export const toolDescription = `Create or update a metric`
export const baseUrl = `/api`
export const path = `/v1/metrics`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "changeDescription",
    "dataProducts",
    "deleted",
    "description",
    "displayName",
    "domain",
    "extension",
    "followers",
    "fullyQualifiedName",
    "href",
    "id",
    "metadata",
    "name",
    "owner",
    "provider",
    "service",
    "tags",
    "updatedAt",
    "updatedBy",
    "usageSummary",
    "version",
    "votes"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "changeDescription": z.object({ "fieldsAdded": z.array(z.object({ "displayName": z.string().optional(), "name": z.string().optional(), "newValue": z.record(z.any()).optional(), "oldValue": z.record(z.any()).optional() })).optional(), "fieldsDeleted": z.array(z.object({ "displayName": z.string().optional(), "name": z.string().optional(), "newValue": z.record(z.any()).optional(), "oldValue": z.record(z.any()).optional() })).optional(), "fieldsUpdated": z.array(z.object({ "displayName": z.string().optional(), "name": z.string().optional(), "newValue": z.record(z.any()).optional(), "oldValue": z.record(z.any()).optional() })).optional(), "previousVersion": z.number().optional() }).optional(), "dataProducts": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "extension": z.record(z.any()).optional(), "followers": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "fullyQualifiedName": z.string().min(1).max(3072).optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "metadata": z.object({ "additionVersions": z.record(z.number()).optional(), "attributeVersions": z.record(z.number()).optional(), "entityTypeName": z.string().optional(), "entityTypeVersion": z.number().optional() }).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "provider": z.enum(["system","user"]).optional(), "service": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional(), "updatedAt": z.number().int().optional(), "updatedBy": z.string().optional(), "usageSummary": z.object({ "dailyStats": z.object({ "count": z.number().int(), "percentileRank": z.number().optional() }), "date": z.string(), "monthlyStats": z.object({ "count": z.number().int(), "percentileRank": z.number().optional() }).optional(), "weeklyStats": z.object({ "count": z.number().int(), "percentileRank": z.number().optional() }).optional() }).optional(), "version": z.number().optional(), "votes": z.object({ "downVoters": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "downVotes": z.number().int().optional(), "upVoters": z.array(z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() })).optional(), "upVotes": z.number().int().optional() }).optional() }).shape