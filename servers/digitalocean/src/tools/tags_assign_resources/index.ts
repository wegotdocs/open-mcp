import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tags_assign_resources",
  "toolDescription": "Tag a Resource",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/tags/{tag_id}/resources",
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
      "tag_id": "tag_id"
    },
    "body": {
      "resources": "resources"
    }
  },
  inputParamsSchema
}

export default tool