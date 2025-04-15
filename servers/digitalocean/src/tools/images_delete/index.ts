import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "images_delete",
  "toolDescription": "Delete an Image",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/images/{image_id}",
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
      "image_id": "image_id"
    }
  },
  inputParamsSchema
}

export default tool