import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_feed_v3_calendar_radarr_ics",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/feed/v3/calendar/radarr.ics",
  "method": "get",
  "security": [
    {
      "key": "X-Api-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "query": {
      "pastDays": "pastDays",
      "futureDays": "futureDays",
      "tags": "tags",
      "unmonitored": "unmonitored"
    }
  },
  inputParamsSchema
}

export default tool