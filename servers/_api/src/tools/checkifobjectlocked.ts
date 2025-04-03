import { z } from "zod"

export const toolName = `checkifobjectlocked`
export const toolDescription = `Check whether the given object is locked`
export const baseUrl = `/api`
export const path = `/v1/objects/lock/{id}`
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

export const inputParams = z.object({ "id": z.string() }).shape