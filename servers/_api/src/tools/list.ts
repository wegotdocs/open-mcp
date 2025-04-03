import { z } from "zod"

export const toolName = `list`
export const toolDescription = `List subject areas`
export const baseUrl = `/api`
export const path = `/v1/adcSubjectAreas`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "glossary",
    "parent",
    "parentStrict",
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

export const inputParams = z.object({ "glossary": z.string().uuid().describe("List subject areas filtered by glossary identified by Id given in `glossary` parameter.").optional(), "parent": z.string().uuid().describe("List subject areas filtered by children of subject area identified by Id given in `parent` parameter.").optional(), "parentStrict": z.string().describe("List subject areas filtered by direct children of subject area identified by Id given in `parentStrict` parameter.").optional(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number subject areas returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of subject areas before this cursor").optional(), "after": z.string().describe("Returns list of subject areas after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape