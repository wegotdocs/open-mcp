import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportrecordsgpx",
  "toolDescription": "Export a dataset in GPX",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/exports/gpx",
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
      "name_field": "name_field",
      "description_field_list": "description_field_list",
      "use_extension": "use_extension"
    }
  },
  inputParamsSchema
}

export default tool