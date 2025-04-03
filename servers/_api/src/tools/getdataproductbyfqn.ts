import { z } from "zod"

export const toolName = `getdataproductbyfqn`
export const toolDescription = `Get a dataProduct by name`
export const baseUrl = `/api`
export const path = `/v1/dataProducts/name/{name}`
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

export const inputParams = z.object({ "name": z.string().describe("Name of the dataProduct"), "fields": z.string().describe("Fields requested in the returned resource").optional() }).shape