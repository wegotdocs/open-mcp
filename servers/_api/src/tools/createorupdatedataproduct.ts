import { z } from "zod"

export const toolName = `createorupdatedataproduct`
export const toolDescription = `Create or update a dataProduct`
export const baseUrl = `/api`
export const path = `/v1/dataProducts`
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
    "experts",
    "extension",
    "fullyQualifiedName",
    "name",
    "owner"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string().optional(), "domain": z.string().min(1).max(3072), "experts": z.array(z.string()).optional(), "extension": z.record(z.any()).optional(), "fullyQualifiedName": z.string().min(1).max(3072).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional() }).shape