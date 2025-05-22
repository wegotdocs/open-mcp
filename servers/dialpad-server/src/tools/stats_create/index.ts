import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stats_create",
  "toolDescription": "Stats -- Initiate Processing",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/stats",
  "method": "post",
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
    "body": {
      "coaching_group": "coaching_group",
      "coaching_team": "coaching_team",
      "days_ago_end": "days_ago_end",
      "days_ago_start": "days_ago_start",
      "export_type": "export_type",
      "group_by": "group_by",
      "is_today": "is_today",
      "office_id": "office_id",
      "stat_type": "stat_type",
      "target_id": "target_id",
      "target_type": "target_type",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool