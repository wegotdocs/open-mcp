import { z } from "zod"

export const toolName = `listcontainers`
export const toolDescription = `List Containers`
export const baseUrl = `/api`
export const path = `/v1/containers`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "service",
    "root",
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "service": z.string().describe("Filter Containers by Object Store Service name").optional(), "root": z.boolean().describe("Filter by Containers at the root level. E.g., without parent"), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number containers returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of containers before this cursor").optional(), "after": z.string().describe("Returns list of containers after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape