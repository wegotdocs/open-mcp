import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_versions_datasets_id_versions_get",
  "toolDescription": "List Versions of a Dataset",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/datasets/{id}/versions",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "include_datapoints": "include_datapoints"
    }
  },
  inputParamsSchema
}

export default tool