import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_volume",
  "toolDescription": "Create a Volume",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/volumes",
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
    "body": {
      "automount": "automount",
      "format": "format",
      "labels": "labels",
      "location": "location",
      "name": "name",
      "server": "server",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool