import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "alerts_active",
  "toolDescription": "Returns all currently active alerts",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/alerts/active",
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
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool