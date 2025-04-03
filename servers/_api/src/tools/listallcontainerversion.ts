import { z } from "zod"

export const toolName = `listallcontainerversion`
export const toolDescription = `List Container versions`
export const baseUrl = `/api`
export const path = `/v1/containers/{id}/versions`
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

export const inputParams = z.object({ "id": z.string().describe("Container Id") }).shape