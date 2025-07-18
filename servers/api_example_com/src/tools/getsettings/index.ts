import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsettings",
  "toolDescription": "Get chat default settings or a specific useCase.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/settings",
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
      "useCaseId": "useCaseId",
      "showAsArray": "showAsArray"
    }
  },
  inputParamsSchema
}

export default tool