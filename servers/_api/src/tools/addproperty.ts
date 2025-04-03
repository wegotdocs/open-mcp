import { z } from "zod"

export const toolName = `addproperty`
export const toolDescription = `Add or update a Property to an entity`
export const baseUrl = `/api`
export const path = `/v1/metadata/types/{id}`
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
    "description",
    "name",
    "propertyType"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the type"), "description": z.string(), "name": z.string().regex(new RegExp("^(?U)[\\w]+$")), "propertyType": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }) }).shape