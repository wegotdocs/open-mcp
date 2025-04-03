import { z } from "zod"

export const toolName = `stopajobwithid`
export const toolDescription = `Stop Reindex Job`
export const baseUrl = `/api`
export const path = `/v1/search/reindex/stop/{jobId}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "jobId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "jobId": z.string().uuid().describe("jobId Id") }).shape