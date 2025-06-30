import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecord",
  "toolDescription": "Read a dataset record",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/records/{record_id}",
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
      "record_id": "record_id"
    },
    "query": {
      "select": "select",
      "lang": "lang",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool