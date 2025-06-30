import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdataset",
  "toolDescription": "Show dataset information",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}",
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
      "lang": "lang",
      "timezone": "timezone",
      "include_links": "include_links",
      "include_app_metas": "include_app_metas"
    }
  },
  inputParamsSchema
}

export default tool