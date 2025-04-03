import { z } from "zod"

export const toolName = `revokepersonalaccesstoken`
export const toolDescription = `Revoke personal access token to User`
export const baseUrl = `/api`
export const path = `/v1/users/security/token/revoke`
export const method = `put`
export const security = []
export const keys = {
  "query": [
    "username",
    "removeAll"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "tokenIds"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "username": z.string().describe("Username in case admin is revoking. (Default = `false`)").optional(), "removeAll": z.boolean().describe("Remove All tokens of the user. (Default = `false`)"), "tokenIds": z.array(z.string().uuid()).optional() }).shape