import { z } from "zod"

export const toolName = `objs_query_objs_query_post`
export const toolDescription = `Objs Query`
export const baseUrl = `https://api.example.com`
export const path = `/objs/query`
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
    "filter",
    "limit",
    "offset",
    "sort_by",
    "metadata_only"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string().describe("The ID of the project to query"),
  "filter": z.union([z.object({ "base_object_classes": z.union([z.array(z.string()), z.null()]).describe("Filter objects by their base classes").optional(), "object_ids": z.union([z.array(z.string()), z.null()]).describe("Filter objects by their IDs").optional(), "is_op": z.union([z.boolean(), z.null()]).describe("Filter objects based on whether they are weave.ops or not. `True` will only return ops, `False` will return non-ops, and `None` will return all objects").optional(), "latest_only": z.union([z.boolean(), z.null()]).describe("If True, return only the latest version of each object. `False` and `None` will return all versions").optional() }), z.null()]).describe("Filter criteria for the query. See `ObjectVersionFilter`").optional(),
  "limit": z.union([z.number().int(), z.null()]).describe("Maximum number of results to return").optional(),
  "offset": z.union([z.number().int(), z.null()]).describe("Number of results to skip before returning").optional(),
  "sort_by": z.union([z.array(z.object({ "field": z.string(), "direction": z.enum(["asc","desc"]) })), z.null()]).describe("Sorting criteria for the query results. Currently only supports 'object_id' and 'created_at'.").optional(),
  "metadata_only": z.union([z.boolean(), z.null()]).describe("If true, the `val` column is not read from the database and is empty.All other fields are returned.").optional()
}