import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecords",
  "toolDescription": "Query dataset records",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/records",
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
      "dataset_id": "dataset_id"
    },
    "query": {
      "select": "select",
      "where": "where",
      "group_by": "group_by",
      "order_by": "order_by",
      "limit": "limit",
      "offset": "offset",
      "refine": "refine",
      "exclude": "exclude",
      "lang": "lang",
      "timezone": "timezone",
      "include_links": "include_links",
      "include_app_metas": "include_app_metas"
    }
  },
  inputParamsSchema
}

export default tool