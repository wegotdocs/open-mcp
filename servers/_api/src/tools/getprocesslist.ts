import { z } from "zod"

export const toolName = `getprocesslist`
export const toolDescription = `Get info about all processes`
export const baseUrl = `/api`
export const path = `/v1/processes`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "before",
    "after",
    "limit",
    "include",
    "type",
    "ownerId",
    "status",
    "startedAt",
    "startedAtMatchType",
    "finishedAt",
    "finishedAtMatchType",
    "displayName",
    "displayNameMatchType",
    "sort"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "before": z.string().describe("Returns list of processes before this cursor").optional(), "after": z.string().describe("Returns list of processes after this cursor").optional(), "limit": z.number().int().gte(1).lte(1000000).describe("Limit the number processes returned. (1 to 1000000, default = 10)"), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities."), "type": z.array(z.enum(["import","importing-result-export","export","group-change"])).describe("Returns only processes with the specified types").optional(), "ownerId": z.string().describe("Returns only processes with the specified ownerId").optional(), "status": z.array(z.enum(["pending","processing","canceled","paused","finished","failed"])).describe("Returns only processes with the specified statuses").optional(), "startedAt": z.number().int().describe("timestamp").optional(), "startedAtMatchType": z.enum(["eq","gt","lt","ge","le"]).describe("Match type for started at"), "finishedAt": z.number().int().describe("timestamp").optional(), "finishedAtMatchType": z.enum(["eq","gt","lt","ge","le"]).describe("Match type for finished at"), "displayName": z.string().describe("Returns only the process with the specified display name at that matches the displayNameMatchType").optional(), "displayNameMatchType": z.enum(["prefix","infix","postfix"]).describe("Match type for displayName"), "sort": z.array(z.string()).describe("Params for sorting").optional() }).shape