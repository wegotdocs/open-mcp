import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievedatastream",
  "toolDescription": "Retrieve Data Stream by ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/data-streams/{dataStreamId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "dataStreamId": "dataStreamId"
    }
  },
  inputParamsSchema
}

export default tool