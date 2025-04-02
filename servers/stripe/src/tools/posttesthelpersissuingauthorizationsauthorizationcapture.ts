import { z } from "zod"

export const toolName = `posttesthelpersissuingauthorizationsauthorizationcapture`
export const toolDescription = `Capture a test-mode authorization`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/test_helpers/issuing/authorizations/{authorization}/capture`
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
    "authorization"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "authorization": z.string().max(5000) }).shape