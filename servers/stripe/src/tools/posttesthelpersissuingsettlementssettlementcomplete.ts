import { z } from "zod"

export const toolName = `posttesthelpersissuingsettlementssettlementcomplete`
export const toolDescription = `Complete a test-mode settlement`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/test_helpers/issuing/settlements/{settlement}/complete`
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
  "path": [
    "settlement"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "settlement": z.string().max(5000).describe("The settlement token to mark as complete.") }).shape