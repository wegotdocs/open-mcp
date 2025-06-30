import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecordsfacets",
  "toolDescription": "List dataset facets",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/facets",
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
      "where": "where",
      "refine": "refine",
      "exclude": "exclude",
      "facet": "facet",
      "lang": "lang",
      "timezone": "timezone"
    }
  },
  inputParamsSchema
}

export default tool