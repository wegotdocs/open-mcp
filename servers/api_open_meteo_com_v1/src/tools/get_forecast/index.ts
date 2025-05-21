import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_forecast",
  "toolDescription": "Obtener pronóstico del tiempo",
  "baseUrl": "https://api.open-meteo.com/v1",
  "path": "/forecast",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "latitude": "latitude",
      "longitude": "longitude",
      "current": "current",
      "hourly": "hourly"
    }
  },
  inputParamsSchema
}

export default tool