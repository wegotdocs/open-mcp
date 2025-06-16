import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_server_protection",
  "toolDescription": "Change Server Protection",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/change_protection",
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
      "delete": "delete",
      "rebuild": "rebuild"
    }
  },
  inputParamsSchema
}

export default tool