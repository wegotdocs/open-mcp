import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportrecords",
  "toolDescription": "Export a dataset",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/exports/{format}",
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
      "dataset_id": "dataset_id",
      "format": "format"
    },
    "query": {
      "select": "select",
      "where": "where",
      "order_by": "order_by",
      "group_by": "group_by",
      "limit": "limit",
      "refine": "refine",
      "exclude": "exclude",
      "lang": "lang",
      "timezone": "timezone",
      "use_labels": "use_labels",
      "compressed": "compressed",
      "epsg": "epsg"
    }
  },
  inputParamsSchema
}

export default tool