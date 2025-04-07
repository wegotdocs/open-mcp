import { z } from "zod"

export const toolName = `restartinstance`
export const toolDescription = `Restart instances`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/instance-operations/restart`
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
    "instance_ids"
  ]
}
export const flatMap = {}

export const inputParams = {
  "instance_ids": z.array(z.string()).describe("The unique identifiers (IDs) of the instances to restart.")
}