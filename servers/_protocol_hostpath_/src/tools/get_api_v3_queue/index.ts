import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v3_queue",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/queue",
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
      "page": "page",
      "pageSize": "pageSize",
      "sortKey": "sortKey",
      "sortDirection": "sortDirection",
      "includeUnknownMovieItems": "includeUnknownMovieItems",
      "includeMovie": "includeMovie",
      "movieIds": "movieIds",
      "protocol": "protocol",
      "languages": "languages",
      "quality": "quality",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool