import { z } from "zod"

export const toolName = `obj_read_obj_read_post`
export const toolDescription = `Obj Read`
export const baseUrl = `https://api.example.com`
export const path = `/obj/read`
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
    "object_id",
    "digest",
    "metadata_only"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "object_id": z.string(),
  "digest": z.string(),
  "metadata_only": z.union([z.boolean(), z.null()]).describe("If true, the `val` column is not read from the database and is empty.All other fields are returned.").optional()
}