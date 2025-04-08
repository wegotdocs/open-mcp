import { z } from "zod"

export const toolName = `getsourcessource`
export const toolDescription = `Retrieve a source`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/sources/{source}`
export const method = `get`
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
  "query": [
    "client_secret",
    "expand"
  ],
  "header": [],
  "path": [
    "source"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "source": z.string().max(5000),
  "client_secret": z.string().max(5000).describe("The client secret of the source. Required if a publishable key is used to retrieve the source.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
}