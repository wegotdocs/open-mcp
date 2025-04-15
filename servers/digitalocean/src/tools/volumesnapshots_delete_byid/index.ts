import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "volumesnapshots_delete_byid",
  "toolDescription": "Delete a Volume Snapshot",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/volumes/snapshots/{snapshot_id}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "snapshot_id": "snapshot_id"
    }
  },
  inputParamsSchema
}

export default tool