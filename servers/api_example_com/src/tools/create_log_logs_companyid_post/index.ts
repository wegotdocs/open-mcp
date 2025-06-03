import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_log_logs_companyid_post",
  "toolDescription": "Create log",
  "baseUrl": "https://api.example.com",
  "path": "/logs/{companyId}",
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
    "path": {
      "companyId": "companyId"
    },
    "body": {
      "erp": "erp",
      "erpVersion": "erpVersion",
      "connectorVersion": "connectorVersion",
      "level": "level",
      "code": "code",
      "message": "message"
    }
  },
  inputParamsSchema
}

export default tool