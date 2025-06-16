import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "attach_iso_to_server",
  "toolDescription": "Attach an ISO to a Server",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/attach_iso",
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
      "iso": "iso"
    }
  },
  inputParamsSchema
}

export default tool