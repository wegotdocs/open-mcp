import { z } from "zod"

export const toolName = `getentitieswitherrors`
export const toolDescription = `Get errors information about changed entities by ID`
export const baseUrl = `/api`
export const path = `/v1/groupOperations/change/{processId}/errors`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "offset",
    "limit"
  ],
  "header": [],
  "path": [
    "processId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "processId": z.string().uuid(), "offset": z.number().int().optional(), "limit": z.number().int() }).shape