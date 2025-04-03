import { z } from "zod"

export const toolName = `revokejwttokenforbotuser`
export const toolDescription = `Revoke JWT Token for a Bot User`
export const baseUrl = `/api`
export const path = `/v1/users/revokeToken`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid() }).shape