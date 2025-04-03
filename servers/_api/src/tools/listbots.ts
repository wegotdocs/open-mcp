import { z } from "zod"

export const toolName = `listbots`
export const toolDescription = `List bots`
export const baseUrl = `/api`
export const path = `/v1/bots`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "limit",
    "before",
    "after",
    "include"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "limit": z.number().int().gte(0).lte(1000000), "before": z.string().describe("Returns list of Bot before this cursor").optional(), "after": z.string().describe("Returns list of Bot after this cursor").optional(), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape