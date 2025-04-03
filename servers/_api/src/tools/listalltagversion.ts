import { z } from "zod"

export const toolName = `listalltagversion`
export const toolDescription = `List tag versions`
export const baseUrl = `/api`
export const path = `/v1/tags/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the tag") }).shape