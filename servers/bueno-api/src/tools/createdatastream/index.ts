import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdatastream",
  "toolDescription": "Create Data Stream",
  "baseUrl": "https://api.example.com",
  "path": "/v2/data-streams",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "integrationId": "integrationId",
      "streamId": "streamId",
      "status": "status",
      "type": "type",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool