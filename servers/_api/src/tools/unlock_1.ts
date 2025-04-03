import { z } from "zod"

export const toolName = `unlock_1`
export const toolDescription = `Remove locking for the given object object and token`
export const baseUrl = `/api`
export const path = `/v1/objects/lock/{id}/{lockToken}`
export const method = `delete`
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