import { z } from "zod"

export const toolName = `createtype`
export const toolDescription = `Create a type`
export const baseUrl = `/api`
export const path = `/v1/metadata/types`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "category",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "extension",
    "name",
    "nameSpace",
    "owner",
    "schema"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "category": z.enum(["field","entity"]).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w]+$")), "nameSpace": z.string(), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "schema": z.string() }).shape