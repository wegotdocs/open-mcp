import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "replace_image",
  "toolDescription": "Update an Image",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/images/{id}",
  "method": "put",
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
      "description": "description",
      "labels": "labels",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool