import { z } from "zod"

export const toolName = `addcustommetric`
export const toolDescription = `Add column custom metrics`
export const baseUrl = `/api`
export const path = `/v1/tables/{id}/customMetric`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "columnName",
    "description",
    "expression",
    "name",
    "owner",
    "updatedAt",
    "updatedBy"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the table"), "columnName": z.string(), "description": z.string().optional(), "expression": z.string(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "updatedAt": z.number().int().optional(), "updatedBy": z.string().optional() }).shape