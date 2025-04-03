import { z } from "zod"

export const toolName = `lockobject`
export const toolDescription = `Lock an object`
export const baseUrl = `/api`
export const path = `/v1/objects/lock/{id}`
export const method = `post`
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

export const inputParams = z.object({ "id": z.string() }).shape