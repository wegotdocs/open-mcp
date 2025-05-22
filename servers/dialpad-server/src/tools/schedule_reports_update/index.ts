import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "schedule_reports_update",
  "toolDescription": "Schedule reports -- Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/schedulereports/{id}",
  "method": "patch",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "at": "at",
      "coaching_group": "coaching_group",
      "enabled": "enabled",
      "endpoint_id": "endpoint_id",
      "frequency": "frequency",
      "name": "name",
      "on_day": "on_day",
      "report_type": "report_type",
      "target_id": "target_id",
      "target_type": "target_type",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool