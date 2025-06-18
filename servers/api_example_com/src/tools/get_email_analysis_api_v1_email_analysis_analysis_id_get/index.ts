import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_email_analysis_api_v1_email_analysis_analysis_id_get",
  "toolDescription": "Get Email Analysis",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/email-analysis/{analysis_id}",
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
      "analysis_id": "analysis_id"
    }
  },
  inputParamsSchema
}

export default tool