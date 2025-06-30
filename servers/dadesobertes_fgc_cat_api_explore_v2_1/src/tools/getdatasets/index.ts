import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdatasets",
  "toolDescription": "Query catalog datasets",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets",
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
    "query": {
      "select": "select",
      "where": "where",
      "order_by": "order_by",
      "limit": "limit",
      "offset": "offset",
      "refine": "refine",
      "exclude": "exclude",
      "lang": "lang",
      "timezone": "timezone",
      "group_by": "group_by",
      "include_links": "include_links",
      "include_app_metas": "include_app_metas"
    }
  },
  inputParamsSchema
}

export default tool