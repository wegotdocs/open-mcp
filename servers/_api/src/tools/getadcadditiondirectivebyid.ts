import { z } from "zod"

export const toolName = `getadcadditiondirectivebyid`
export const toolDescription = `Get a entity addition directive`
export const baseUrl = `/api`
export const path = `/v1/metadata/adcAdditionDirectives/{id}`
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

export const inputParams = z.object({ "id": z.string().uuid(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape