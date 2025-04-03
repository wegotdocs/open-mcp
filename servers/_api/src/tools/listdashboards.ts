import { z } from "zod"

export const toolName = `listdashboards`
export const toolDescription = `List dashboards`
export const baseUrl = `/api`
export const path = `/v1/dashboards`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "service",
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "service": z.string().describe("Filter dashboards by service name").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number dashboards returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of dashboards before this cursor").optional(), "after": z.string().describe("Returns list of dashboards after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape