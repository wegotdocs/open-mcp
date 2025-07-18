import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "process",
  "toolDescription": "Process or reprocess a web in the system.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/web/process",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "url": "url",
      "name": "name",
      "description": "description",
      "scrapingStrategyId": "scrapingStrategyId"
    }
  },
  inputParamsSchema
}

export default tool