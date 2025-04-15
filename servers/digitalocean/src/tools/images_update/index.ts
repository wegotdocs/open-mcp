import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "images_update",
  "toolDescription": "Update an Image",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/images/{image_id}",
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
      "image_id": "image_id"
    },
    "body": {
      "name": "name",
      "distribution": "distribution",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool