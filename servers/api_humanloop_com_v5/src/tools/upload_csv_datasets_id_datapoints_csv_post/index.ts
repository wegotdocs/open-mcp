import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_csv_datasets_id_datapoints_csv_post",
  "toolDescription": "Upload CSV",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/datasets/{id}/datapoints/csv",
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
    "path": {
      "id": "id"
    },
    "query": {
      "version_id": "version_id",
      "environment": "environment"
    }
  },
  inputParamsSchema
}

export default tool