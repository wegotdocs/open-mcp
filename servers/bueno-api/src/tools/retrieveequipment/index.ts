import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveequipment",
  "toolDescription": "Retrieve Equipment with advanced search",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equips",
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
    "query": {
      "organisationId": "organisationId",
      "expr": "expr",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool