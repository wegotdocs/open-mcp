import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "single_point_data_request_api_temporal_hourly_point_get",
  "toolDescription": "Single Point Data Request",
  "baseUrl": "https://api.example.com",
  "path": "/api/temporal/hourly/point",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start": "start",
      "end": "end",
      "latitude": "latitude",
      "longitude": "longitude",
      "community": "community",
      "parameters": "parameters",
      "format": "format",
      "user": "user",
      "header": "header",
      "time-standard": "time-standard",
      "site-elevation": "site-elevation",
      "wind-elevation": "wind-elevation",
      "wind-surface": "wind-surface"
    }
  },
  inputParamsSchema
}

export default tool