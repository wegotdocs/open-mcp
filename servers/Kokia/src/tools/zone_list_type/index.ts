import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "zone_list_type",
  "toolDescription": "Returns a list of zones of a given type",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/zones/{type}",
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
      "id": "id",
      "area": "area",
      "region": "region",
      "type": "type",
      "point": "point",
      "include_geometry": "include_geometry",
      "limit": "limit",
      "effective": "effective"
    }
  },
  inputParamsSchema
}

export default tool