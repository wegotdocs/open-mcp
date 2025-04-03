import { z } from "zod"

export const toolName = `getdomainbyfqn`
export const toolDescription = `Get a domain by name`
export const baseUrl = `/api`
export const path = `/v1/domains/name/{name}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Name of the domain"), "fields": z.string().describe("Fields requested in the returned resource").optional() }).shape