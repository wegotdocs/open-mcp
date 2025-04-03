import { z } from "zod"

export const toolName = `getadcexportingprocessbyid`
export const toolDescription = `Get a adcExportingProcess by Id`
export const baseUrl = `/api`
export const path = `/v1/export/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the adcExportingProcess"), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape