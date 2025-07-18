import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "runindexer",
  "toolDescription": "Runs indexer",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/data/index/{useCaseId}/run",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "useCaseId": "useCaseId"
    }
  },
  inputParamsSchema
}

export default tool