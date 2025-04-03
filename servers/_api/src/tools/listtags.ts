import { z } from "zod"

export const toolName = `listtags`
export const toolDescription = `List tags`
export const baseUrl = `/api`
export const path = `/v1/tags`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "parent",
    "fields",
    "disabled",
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

export const inputParams = z.object({ "parent": z.string().describe("List tags filtered by children of tag identified by fqn given in `parent` parameter. The fqn can either be classificationName or fqn of a parent tag").optional(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "disabled": z.string().describe("Filter Disabled Classifications"), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number tags returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of tags before this cursor").optional(), "after": z.string().describe("Returns list of tags after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape