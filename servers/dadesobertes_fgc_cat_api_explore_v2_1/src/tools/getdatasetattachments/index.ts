import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdatasetattachments",
  "toolDescription": "List dataset attachments",
  "baseUrl": "https://dadesobertes.fgc.cat/api/explore/v2.1",
  "path": "/catalog/datasets/{dataset_id}/attachments",
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
    }
  },
  inputParamsSchema
}

export default tool