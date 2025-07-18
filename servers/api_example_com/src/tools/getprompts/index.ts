import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprompts",
  "toolDescription": "Get prompts",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/prompt",
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
    "query": {
      "UseCaseId": "UseCaseId"
    }
  },
  inputParamsSchema
}

export default tool