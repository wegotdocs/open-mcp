import { z } from "zod"

export const toolName = `getadcrelationshipbyname`
export const toolDescription = `Get a entity addition type by name`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcRelationships/name/{name}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape