import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepersistedprocessproperties",
  "toolDescription": "Modifies or updates a PersistedProcessProperties object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/PersistedProcessProperties/{id}",
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
      "Process": "Process",
      "atomId": "atomId"
    }
  },
  inputParamsSchema
}

export default tool