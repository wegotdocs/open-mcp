import { z } from "zod"

export const toolName = `getresourcetypepermission`
export const toolDescription = `Get permissions a given resource/entity type for logged in user`
export const baseUrl = `/api`
export const path = `/v1/permissions/{resource}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user"
  ],
  "header": [],
  "path": [
    "resource"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "resource": z.string().describe("Type of the resource"), "user": z.string().describe("Permission for user specified in this query param. If not specified, the user is defaulted to the logged in user").optional() }).shape