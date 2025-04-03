import { z } from "zod"

export const toolName = `getbatchreindexbatchjobwithid`
export const toolDescription = `Get Batch Reindexing Job with Id`
export const baseUrl = `/api`
export const path = `/v1/search/reindex/{jobId}`
export const method = `get`
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