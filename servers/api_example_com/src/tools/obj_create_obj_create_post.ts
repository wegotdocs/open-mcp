import { z } from "zod"

export const toolName = `obj_create_obj_create_post`
export const toolDescription = `Obj Create`
export const baseUrl = `https://api.example.com`
export const path = `/obj/create`
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
    "obj"
  ]
}
export const flatMap = {}

export const inputParams = {
  "obj": z.object({ "project_id": z.string(), "object_id": z.string(), "val": z.any(), "builtin_object_class": z.union([z.string(), z.null()]).optional(), "wb_user_id": z.union([z.string(), z.null()]).describe("Do not set directly. Server will automatically populate this field.").optional() })
}