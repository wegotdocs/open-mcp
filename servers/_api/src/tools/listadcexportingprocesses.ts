import { z } from "zod"

export const toolName = `listadcexportingprocesses`
export const toolDescription = `List adcExportingProcesses`
export const baseUrl = `/api`
export const path = `/v1/export`
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

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional(), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number adcExportingProcesses returned. (1 to 1000000, default = 10)"), "before": z.string().describe("Returns list of adcExportingProcesses before this cursor").optional(), "after": z.string().describe("Returns list of adcExportingProcesses after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape