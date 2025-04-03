import { z } from "zod"

export const toolName = `getadcsettingsbyname`
export const toolDescription = `Get settings`
export const baseUrl = `/api`
export const path = `/v1/adcSettings/name/{name}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("Fully qualified name of the AdcSettings"), "include": z.enum(["all","deleted","non-deleted"]).describe("Include all, deleted, or non-deleted entities.") }).shape