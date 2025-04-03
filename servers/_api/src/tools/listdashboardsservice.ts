import { z } from "zod"

export const toolName = `listdashboardsservice`
export const toolDescription = `List dashboard services`
export const baseUrl = `/api`
export const path = `/v1/services/dashboardServices`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "name",
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

export const inputParams = z.object({ "name": z.string().optional(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000), "before": z.string().describe("Returns list of dashboard services before this cursor").optional(), "after": z.string().describe("Returns list of dashboard services after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape