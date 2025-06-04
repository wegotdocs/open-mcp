import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontracttypes",
  "toolDescription": "Get a contract type",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/contract-types/{contractTypeId}",
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
      "contractTypeId": "contractTypeId"
    }
  },
  inputParamsSchema
}

export default tool