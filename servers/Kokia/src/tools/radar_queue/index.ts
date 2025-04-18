import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "radar_queue",
  "toolDescription": "Returns metadata about a given radar queue",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/radar/queues/{host}",
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
      "limit": "limit",
      "arrived": "arrived",
      "created": "created",
      "published": "published",
      "station": "station",
      "type": "type",
      "feed": "feed",
      "resolution": "resolution"
    }
  },
  inputParamsSchema
}

export default tool