import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "alerts_query",
  "toolDescription": "Returns all alerts",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/alerts",
  "method": "get",
  "security": [
    {
      "key": "User-Agent",
      "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
      "in": "header",
      "envVarName": "USER_AGENT"
    }
  ],
  "paramsMap": {
    "query": {
      "active": "active",
      "start": "start",
      "end": "end",
      "status": "status",
      "message_type": "message_type",
      "event": "event",
      "code": "code",
      "area": "area",
      "point": "point",
      "region": "region",
      "region_type": "region_type",
      "zone": "zone",
      "urgency": "urgency",
      "severity": "severity",
      "certainty": "certainty",
      "limit": "limit",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool