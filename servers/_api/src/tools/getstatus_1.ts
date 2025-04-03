import { z } from "zod"

export const toolName = `getstatus_1`
export const toolDescription = `Get a processing status of  the imported file by ID`
export const baseUrl = `/api`
export const path = `/v1/import/{processId}/status`
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