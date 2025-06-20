import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_variables_id_",
  "toolDescription": "Update a variable",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/variables/{id}",
  "method": "put",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "key": "key",
      "value": "value",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool