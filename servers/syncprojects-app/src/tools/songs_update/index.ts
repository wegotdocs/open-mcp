export { inputParams } from "./schema/root.js"

export const toolName = `songs_update`
export const toolDescription = ``
export const baseUrl = `https://www.syncprojects.app/api/v1/`
export const path = `/api/v1/songs/{id}/`
export const method = `put`
export const security = [
  {
    "key": "sessionid",
    "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
    "in": "cookie",
    "envVarName": "SESSIONID",
    "schemeType": "apiKey",
    "schemeName": "sessionid"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
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
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "b_id",
    "name",
    "created_at",
    "updated_at",
    "sync_enabled",
    "directory_name",
    "last_mtime",
    "project",
    "is_locked",
    "revision",
    "url",
    "archived",
    "project_file",
    "album",
    "album_order",
    "duration"
  ]
}
export const flatMap = {
  "b_id": "id"
}