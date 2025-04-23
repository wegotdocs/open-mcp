import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_dataset_version_datasets_id_versions_version_id_delete",
  "toolDescription": "Delete Dataset Version",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/datasets/{id}/versions/{version_id}",
  "method": "delete",
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
      "id": "id",
      "version_id": "version_id"
    }
  },
  inputParamsSchema
}

export default tool