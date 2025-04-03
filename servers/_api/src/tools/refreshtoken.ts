import { z } from "zod"

export const toolName = `refreshtoken`
export const toolDescription = `Provide access token to User with refresh token`
export const baseUrl = `/api`
export const path = `/v1/users/refresh`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "refreshToken"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "refreshToken": z.string() }).shape