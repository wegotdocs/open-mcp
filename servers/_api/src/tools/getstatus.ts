import { z } from "zod"

export const toolName = `getstatus`
export const toolDescription = `Get a processing status of changed entities by ID`
export const baseUrl = `/api`
export const path = `/v1/groupOperations/change/{processId}/status`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "processId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "processId": z.string().uuid() }).shape