import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportdatasets",
  "toolDescription": "Export a catalog",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/exports/{format}",
  "method": "get",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "format": "format"
    },
    "query": {
      "select": "select",
      "where": "where",
      "order_by": "order_by",
      "group_by": "group_by",
      "limit": "limit",
      "offset": "offset",
      "refine": "refine",
      "exclude": "exclude",
      "lang": "lang",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool