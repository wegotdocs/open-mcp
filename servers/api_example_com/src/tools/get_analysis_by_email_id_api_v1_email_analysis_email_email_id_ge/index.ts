import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_analysis_by_email_id_api_v1_email_analysis_email_email_id_ge",
  "toolDescription": "Get Analysis By Email Id",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/email-analysis/email/{email_id}",
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
      "email_id": "email_id"
    }
  },
  inputParamsSchema
}

export default tool