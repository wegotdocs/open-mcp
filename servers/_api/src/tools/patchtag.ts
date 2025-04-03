import { z } from "zod"

export const toolName = `patchtag`
export const toolDescription = `Update a tag`
export const baseUrl = `/api`
export const path = `/v1/tags/{id}`
export const method = `patch`
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