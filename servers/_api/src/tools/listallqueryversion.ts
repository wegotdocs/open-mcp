import { z } from "zod"

export const toolName = `listallqueryversion`
export const toolDescription = `Get List of all query versions`
export const baseUrl = `/api`
export const path = `/v1/queries/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().describe("Query Id") }).shape