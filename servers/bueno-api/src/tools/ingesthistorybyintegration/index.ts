import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ingesthistorybyintegration",
  "toolDescription": "Ingest history for an Integration",
  "baseUrl": "https://api.example.com",
  "path": "/v2/integrations/{integrationId}/history",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "data": "data",
      "tz": "tz",
      "source": "source"
    }
  },
  inputParamsSchema
}

export default tool