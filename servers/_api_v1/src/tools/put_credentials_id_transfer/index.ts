import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_credentials_id_transfer",
  "toolDescription": "Transfer a credential to another project.",
  "baseUrl": "/api/v1",
  "path": "/credentials/{id}/transfer",
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
    "path": {
      "id": "id"
    },
    "body": {
      "destinationProjectId": "destinationProjectId"
    }
  },
  inputParamsSchema
}

export default tool