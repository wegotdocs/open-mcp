import { z } from "zod"

export const toolName = `getvalidationresults`
export const toolDescription = `Get a processing result of  the imported file by ID`
export const baseUrl = `/api`
export const path = `/v1/import/{processId}/validation/result`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "offset",
    "limit",
    "itemStatus"
  ],
  "header": [],
  "path": [
    "processId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "processId": z.string().uuid(), "offset": z.number().int().optional(), "limit": z.number().int(), "itemStatus": z.string() }).shape