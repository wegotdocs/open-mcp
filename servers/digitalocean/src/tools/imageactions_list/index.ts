import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "imageactions_list",
  "toolDescription": "List All Actions for an Image",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/images/{image_id}/actions",
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
      "image_id": "image_id"
    }
  },
  inputParamsSchema
}

export default tool