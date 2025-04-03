import { z } from "zod"

export const toolName = `getadcentityadditiontypebyid`
export const toolDescription = `Get a entity addition type`
export const baseUrl = `/api`
export const path = `/v1/custom/{type}/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields",
    "include"
  ],
  "header": [],
  "path": [
    "id",
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "type": z.string(), "fields": z.string().describe("Fields requested in the returned resource").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape