import { z } from "zod"

export const toolName = `getresourcepermissions`
export const toolDescription = `Get permissions for logged in user`
export const baseUrl = `/api`
export const path = `/v1/permissions`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "user"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "user": z.string().describe("Permission for user specified in this query param. If not specified, the user is defaulted to the logged in user").optional() }).shape