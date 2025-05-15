import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfolder",
  "toolDescription": "Creates a Folder object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Folder",
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
    "body": {
      "PermittedRoles": "PermittedRoles",
      "deleted": "deleted",
      "fullPath": "fullPath",
      "id": "id",
      "name": "name",
      "parentId": "parentId",
      "parentName": "parentName"
    }
  },
  inputParamsSchema
}

export default tool