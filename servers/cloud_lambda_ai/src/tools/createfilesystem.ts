import { z } from "zod"

export const toolName = `createfilesystem`
export const toolDescription = `Create filesystem`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/filesystems`
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
    "name",
    "region"
  ]
}
export const flatMap = {}

export const inputParams = {
  "name": z.string().regex(new RegExp("^[a-zA-Z]+[0-9a-zA-Z-]*$")).min(1).max(60).describe("The name of the filesystem."),
  "region": z.enum(["europe-central-1","asia-south-1","australia-east-1","me-west-1","asia-northeast-1","asia-northeast-2","us-east-1","us-west-2","us-west-1","us-south-1","us-west-3","us-midwest-1","us-east-2","us-south-2","us-south-3","us-east-3","us-midwest-2","test-east-1","test-west-1"]).describe("The region in which you want to create the filesystem.")
}