import { z } from "zod"

export const toolName = `lockobject_1`
export const toolDescription = `Lock an object with token`
export const baseUrl = `/api`
export const path = `/v1/objects/lock/{id}/{lockToken}`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id",
    "lockToken"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string(), "lockToken": z.string() }).shape