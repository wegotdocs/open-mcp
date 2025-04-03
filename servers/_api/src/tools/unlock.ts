import { z } from "zod"

export const toolName = `unlock`
export const toolDescription = `Remove locking for the given object object`
export const baseUrl = `/api`
export const path = `/v1/objects/lock/{id}`
export const method = `delete`
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