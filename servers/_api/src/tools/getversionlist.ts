import { z } from "zod"

export const toolName = `getversionlist`
export const toolDescription = ``
export const baseUrl = `/api`
export const path = `/v1/objects/{type}/{id}/versions`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "type",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.string(), "id": z.string().uuid() }).shape