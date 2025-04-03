import { z } from "zod"

export const toolName = `openidcallback`
export const toolDescription = `Receives auth info from IDP via POST and redirects it via GET to the UI auth client`
export const baseUrl = `/api`
export const path = `/v1/idp/openid/callback`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({}).shape