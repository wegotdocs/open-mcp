import { z } from "zod"

export const toolName = `runbatchreindexing`
export const toolDescription = `Run Batch Reindexing`
export const baseUrl = `/api`
export const path = `/v1/search/reindex`
export const method = `post`
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