import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_status_of_automatic_anticipation",
  "toolDescription": "Retrieve status of automatic anticipation",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/anticipations/configurations",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool