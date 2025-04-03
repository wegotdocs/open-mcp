import { z } from "zod"

export const toolName = `listglossaryterm`
export const toolDescription = `List glossary terms`
export const baseUrl = `/api`
export const path = `/v1/glossaryTerms`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "glossary",
    "parent",
    "adcSubjectArea",
    "fields",
    "limit",
    "before",
    "after",
    "include",
    "withTestCase"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "glossary": z.string().describe("List glossary terms filtered by glossary identified by Id given in `glossary` parameter.").optional(), "parent": z.string().describe("List glossary terms filtered by children of glossary term identified by Id given in `parent` parameter.").optional(), "adcSubjectArea": z.string().describe("List glossary terms filtered by subject area identified by Id given in `adcSubjectArea` parameter.").optional(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number glossary terms returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of glossary terms before this cursor").optional(), "after": z.string().describe("Returns list of glossary terms after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities."), "withTestCase": z.boolean() }).shape