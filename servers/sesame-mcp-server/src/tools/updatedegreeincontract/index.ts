import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatedegreeincontract",
  "toolDescription": "Update a degree",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/degrees/{degreeId}",
  "method": "put",
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
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool