import { z } from "zod"

export const toolName = `getpersonalaccesstoken`
export const toolDescription = `Get personal access token to User`
export const baseUrl = `/api`
export const path = `/v1/users/security/token`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "username"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "username": z.string().describe("User Name of the User for which to get. (Default = `false`)").optional() }).shape