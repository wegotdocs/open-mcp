import { z } from "zod"

export const toolName = `createpersonalaccesstoken`
export const toolDescription = `Provide access token to User`
export const baseUrl = `/api`
export const path = `/v1/users/security/token`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "JWTTokenExpiry",
    "tokenName"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "JWTTokenExpiry": z.enum(["OneHour","1","7","30","60","90","Unlimited"]), "tokenName": z.string() }).shape