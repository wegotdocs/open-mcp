import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "snapshots_get",
  "toolDescription": "Retrieve an Existing Snapshot",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/snapshots/{snapshot_id}",
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