import { z } from "zod"

export const toolName = `listdatabaseservices`
export const toolDescription = `List database services`
export const baseUrl = `/api`
export const path = `/v1/services/databaseServices`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "before",
    "after",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000), "before": z.string().describe("Returns list of database services before this cursor").optional(), "after": z.string().describe("Returns list of database services after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape