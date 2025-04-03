import { z } from "zod"

export const toolName = `listreports`
export const toolDescription = `List reports`
export const baseUrl = `/api`
export const path = `/v1/reports`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fields": z.string().describe("Fields requested in the returned resource").optional() }).shape