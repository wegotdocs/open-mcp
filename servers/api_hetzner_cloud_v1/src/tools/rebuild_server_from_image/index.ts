import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rebuild_server_from_image",
  "toolDescription": "Rebuild a Server from an Image",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/rebuild",
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
      "id": "id"
    },
    "body": {
      "image": "image"
    }
  },
  inputParamsSchema
}

export default tool