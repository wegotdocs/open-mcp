import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateenvironmentmapextension",
  "toolDescription": "Modifies or updates an EnvironmentMapExtension object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/EnvironmentMapExtension/{id}",
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
      "Map": "Map",
      "environmentId": "environmentId",
      "extensionGroupId": "extensionGroupId",
      "id": "b_id",
      "mapId": "mapId",
      "name": "name",
      "processId": "processId"
    }
  },
  inputParamsSchema
}

export default tool