import { z } from "zod"

export const toolName = `getlatestreindexbatchjob`
export const toolDescription = `Get Latest Reindexing Batch Job`
export const baseUrl = `/api`
export const path = `/v1/search/reindex/latest`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape