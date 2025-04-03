import { z } from "zod"

export const toolName = `getresourcepermissionbyname`
export const toolDescription = `Get permissions for a given entity name for a logged in user`
export const baseUrl = `/api`
export const path = `/v1/permissions/{resource}/name/{name}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user"
  ],
  "header": [],
  "path": [
    "resource",
    "name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "resource": z.string().describe("Type of the resource"), "name": z.string().describe("Name of the entity"), "user": z.string().describe("Permission for user specified in this query param. If not specified, the user is defaulted to the logged in user").optional() }).shape