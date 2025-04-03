import { z } from "zod"

export const toolName = `listadcentityattributes`
export const toolDescription = `List entity addition types`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "limit",
    "before",
    "after",
    "onlyAvailableToUsers",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number of elements returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of entity addition types before this cursor").optional(), "after": z.string().describe("Returns list of entity addition types after this cursor").optional(), "onlyAvailableToUsers": z.string().describe("Возвращать все атрибуты или только те, что могут быть использованы пользователем"), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape