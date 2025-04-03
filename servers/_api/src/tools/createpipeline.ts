import { z } from "zod"

export const toolName = `createpipeline`
export const toolDescription = `Create a pipeline`
export const baseUrl = `/api`
export const path = `/v1/pipelines`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "concurrency",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "name",
    "owner",
    "pipelineLocation",
    "scheduleInterval",
    "service",
    "sourceUrl",
    "startDate",
    "tags",
    "tasks"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "concurrency": z.number().int().optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^((?!::).)*$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "pipelineLocation": z.string().optional(), "scheduleInterval": z.string().optional(), "service": z.string().min(1).max(3072), "sourceUrl": z.string().optional(), "startDate": z.string().datetime({ offset: true }).optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional(), "tasks": z.array(z.object({ "description": z.string().optional(), "displayName": z.string().optional(), "downstreamTasks": z.array(z.string()).optional(), "endDate": z.string().optional(), "fullyQualifiedName": z.string().optional(), "name": z.string(), "sourceUrl": z.string().optional(), "startDate": z.string().optional(), "tags": z.array(z.object({ "description": z.string().optional(), "href": z.string().url().optional(), "labelType": z.enum(["Manual","Propagated","Automated","Derived"]), "source": z.enum(["Classification","Glossary"]), "state": z.enum(["Suggested","Confirmed"]), "tagFQN": z.string().min(0).max(3072) })).optional(), "taskSQL": z.string().optional(), "taskType": z.string().optional(), "userDescription": z.string().optional() })).optional() }).shape