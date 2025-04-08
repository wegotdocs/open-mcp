import { z } from "zod"

export const toolName = `obj_delete_obj_delete_post`
export const toolDescription = `Obj Delete`
export const baseUrl = `https://api.example.com`
export const path = `/obj/delete`
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
    "digests"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string(),
  "object_id": z.string(),
  "digests": z.union([z.array(z.string()), z.null()]).describe("List of digests to delete. If not provided, all digests for the object will be deleted.").optional()
}