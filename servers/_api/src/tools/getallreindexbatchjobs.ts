import { z } from "zod"

export const toolName = `getallreindexbatchjobs`
export const toolDescription = `Get all reindex batch jobs`
export const baseUrl = `/api`
export const path = `/v1/search/reindex`
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