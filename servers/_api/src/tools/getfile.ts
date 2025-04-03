import { z } from "zod"

export const toolName = `getfile`
export const toolDescription = `Get export file`
export const baseUrl = `/api`
export const path = `/v1/export/file/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid() }).shape