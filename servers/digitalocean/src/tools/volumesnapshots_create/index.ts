import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "volumesnapshots_create",
  "toolDescription": "Create Snapshot from a Volume",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/volumes/{volume_id}/snapshots",
  "method": "post",
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
      "volume_id": "volume_id"
    },
    "body": {
      "name": "name",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool