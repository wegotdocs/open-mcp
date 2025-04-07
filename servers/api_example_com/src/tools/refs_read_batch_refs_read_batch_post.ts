import { z } from "zod"

export const toolName = `refs_read_batch_refs_read_batch_post`
export const toolDescription = `Refs Read Batch`
export const baseUrl = `https://api.example.com`
export const path = `/refs/read_batch`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "refs"
  ]
}
export const flatMap = {}

export const inputParams = {
  "refs": z.array(z.string())
}