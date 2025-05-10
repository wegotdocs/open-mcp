import { z } from "zod"

export const toolName = `consumemessages`
export const toolDescription = `Get messages`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/messaging/consume`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "destination",
    "depth"
  ]
}
export const flatMap = {}

export const inputParams = {
  "destination": z.string().describe("Optional, if supplied gets any messages outstanding for this destination, else all messages pending delivery").optional(),
  "depth": z.number().int().describe("The max number of events that should be returned").optional()
}