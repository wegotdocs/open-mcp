import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefolder",
  "toolDescription": "Modifies or updates a Folder object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Folder/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "PermittedRoles": "PermittedRoles",
      "deleted": "deleted",
      "fullPath": "fullPath",
      "id": "b_id",
      "name": "name",
      "parentId": "parentId",
      "parentName": "parentName"
    }
  },
  inputParamsSchema
}

export default tool