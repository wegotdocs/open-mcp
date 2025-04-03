import { z } from "zod"

export const toolName = `logoutuser`
export const toolDescription = `Logout a User(Only called for saml and basic Auth)`
export const baseUrl = `/api`
export const path = `/v1/users/logout`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "logoutTime",
    "refreshToken",
    "token",
    "username"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "logoutTime": z.string().datetime({ offset: true }).optional(), "refreshToken": z.string().optional(), "token": z.string(), "username": z.string().optional() }).shape