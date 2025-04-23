import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_datapoints_datasets_id_datapoints_get",
  "toolDescription": "List Datapoints",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/datasets/{id}/datapoints",
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
      "version_id": "version_id",
      "environment": "environment",
      "page": "page",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool