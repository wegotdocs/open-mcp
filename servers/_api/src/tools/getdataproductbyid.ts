import { z } from "zod"

export const toolName = `getdataproductbyid`
export const toolDescription = `Get a dataProduct by Id`
export const baseUrl = `/api`
export const path = `/v1/dataProducts/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "fields"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid().describe("Id of the dataProduct"), "fields": z.string().describe("Fields requested in the returned resource").optional() }).shape