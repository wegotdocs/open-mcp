import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteuser",
  "toolDescription": "Delete user account",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/delete",
  "method": "delete",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool