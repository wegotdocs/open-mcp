import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletedegreeincontract",
  "toolDescription": "Delete a degree",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/degrees/{degreeId}",
  "method": "delete",
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
      "degreeId": "degreeId"
    }
  },
  inputParamsSchema
}

export default tool