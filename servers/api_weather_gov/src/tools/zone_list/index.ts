import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "zone_list",
  "toolDescription": "Returns a list of zones",
  "baseUrl": "https://api.weather.gov",
  "path": "/zones",
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