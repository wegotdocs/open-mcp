import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "products_query",
  "toolDescription": "Returns a list of text products",
  "baseUrl": "https://api.weather.gov",
  "path": "/products",
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
      "location": "location",
      "start": "start",
      "end": "end",
      "office": "office",
      "wmoid": "wmoid",
      "type": "type",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool