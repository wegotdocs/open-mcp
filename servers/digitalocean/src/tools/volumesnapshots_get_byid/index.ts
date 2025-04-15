import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "volumesnapshots_get_byid",
  "toolDescription": "Retrieve an Existing Volume Snapshot",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/volumes/snapshots/{snapshot_id}",
  "method": "get",
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