import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportrecordscsv",
  "toolDescription": "Export a dataset in CSV",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/exports/csv",
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
      "delimiter": "delimiter",
      "list_separator": "list_separator",
      "quote_all": "quote_all",
      "with_bom": "with_bom"
    }
  },
  inputParamsSchema
}

export default tool