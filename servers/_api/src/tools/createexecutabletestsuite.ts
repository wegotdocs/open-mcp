import { z } from "zod"

export const toolName = `createexecutabletestsuite`
export const toolDescription = `Create an executable test suite`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testSuites/executable`
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
    "description",
    "displayName",
    "domain",
    "executableEntityReference",
    "extension",
    "name",
    "owner"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "executableEntityReference": z.string().min(1).max(3072).optional(), "extension": z.record(z.any()).optional(), "name": z.string().min(1).max(256), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional() }).shape