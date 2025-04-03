import { z } from "zod"

export const toolName = `getstreamjobstatus`
export const toolDescription = `Get Stream Job Latest Status`
export const baseUrl = `/api`
export const path = `/v1/search/reindex/stream/status`
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