import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upsert_datasets_post",
  "toolDescription": "Upsert Dataset",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/datasets",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "version_id": "version_id",
      "environment": "environment",
      "include_datapoints": "include_datapoints"
    },
    "body": {
      "path": "path",
      "id": "id",
      "datapoints": "datapoints",
      "action": "action",
      "attributes": "attributes",
      "version_name": "version_name",
      "version_description": "version_description"
    }
  },
  inputParamsSchema
}

export default tool