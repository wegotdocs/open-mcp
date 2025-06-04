import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecontracttype",
  "toolDescription": "Update a contract type",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/contract-types/{contractTypeId}",
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
      "contractTypeId": "contractTypeId"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool