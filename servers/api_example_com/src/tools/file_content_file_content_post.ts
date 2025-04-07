import { z } from "zod"

export const toolName = `file_content_file_content_post`
export const toolDescription = `File Content`
export const baseUrl = `https://api.example.com`
export const path = `/file/content`
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
    "project_id",
    "digest"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "digest": z.string()
}